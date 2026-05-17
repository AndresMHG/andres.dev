/**
 * Reads public/me-source.{png,jpg,jpeg,webp} and outputs:
 *   - public/me.webp  (600x600, quality 82)
 *   - public/me.jpg   (600x600, quality 85, mozjpeg)
 *
 * Run with: npm run photo
 */
import { access, readdir, unlink } from 'node:fs/promises'
import { resolve, dirname, extname } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PUBLIC = resolve(__dirname, '../public')

const findSource = async () => {
  const files = await readdir(PUBLIC)
  return files
    .find((f) => /^me-source\.(png|jpe?g|webp)$/i.test(f))
}

const main = async () => {
  const source = await findSource()
  if (!source) {
    console.error('[photo] no public/me-source.{png,jpg,webp} found')
    process.exit(1)
  }

  const input = resolve(PUBLIC, source)
  console.log(`[photo] processing ${source}`)

  const base = sharp(input)
    .resize(600, 600, { fit: 'cover', position: 'top' })

  const webp = await base.clone().webp({ quality: 82, effort: 6 }).toBuffer()
  const jpg = await base.clone().jpeg({ quality: 85, mozjpeg: true, progressive: true }).toBuffer()

  await sharp(webp).toFile(resolve(PUBLIC, 'me.webp'))
  await sharp(jpg).toFile(resolve(PUBLIC, 'me.jpg'))

  console.log(`[photo] me.webp -> ${(webp.length / 1024).toFixed(1)} kB`)
  console.log(`[photo] me.jpg  -> ${(jpg.length / 1024).toFixed(1)} kB`)
}

main().catch((e) => { console.error('[photo] failed:', e); process.exit(1) })
