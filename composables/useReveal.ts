/**
 * Reveal-on-scroll animations driven by a single shared IntersectionObserver.
 *
 * Re-observes new `.reveal` elements after every client-side navigation
 * (Nuxt's `page:finish` hook) so SPA route changes — e.g. /blog → / —
 * don't leave sections stuck at opacity 0.
 *
 * Runs only on the client.
 */
export const useReveal = () => {
  if (import.meta.server) return

  let observer: IntersectionObserver | null = null

  const observeAll = () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const targets = document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)')

    if (reduced || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'))
      return
    }

    if (!observer) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer!.unobserve(entry.target)
            }
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      )
    }

    targets.forEach((el) => observer!.observe(el))
  }

  const schedule = () => nextTick(observeAll)

  onMounted(schedule)

  const nuxtApp = useNuxtApp()
  nuxtApp.hook('page:finish', schedule)

  onBeforeUnmount(() => {
    observer?.disconnect()
    observer = null
  })
}
