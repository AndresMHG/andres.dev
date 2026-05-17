/**
 * Converts public/og-image.svg → public/og-image.png at 1200x630.
 * Runs automatically before every `npm run build` / `npm run generate`.
 */
import { readFile, writeFile, access } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const SVG_PATH = resolve(ROOT, 'public/og-image.svg')
const PNG_PATH = resolve(ROOT, 'public/og-image.png')

const fileExists = async (p) => {
  try { await access(p); return true } catch { return false }
}

const main = async () => {
  if (!(await fileExists(SVG_PATH))) {
    console.error(`[og] missing ${SVG_PATH}`)
    process.exit(1)
  }

  const svg = await readFile(SVG_PATH)

  const png = await sharp(svg, { density: 200 })
    .resize(1200, 630, { fit: 'contain', background: { r: 10, g: 10, b: 10, alpha: 1 } })
    .png({ quality: 92, compressionLevel: 9 })
    .toBuffer()

  await writeFile(PNG_PATH, png)
  console.log(`[og] generated ${PNG_PATH} (${(png.length / 1024).toFixed(1)} kB)`)
}

main().catch((err) => {
  console.error('[og] failed:', err)
  process.exit(1)
})
