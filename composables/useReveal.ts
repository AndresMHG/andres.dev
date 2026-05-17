/**
 * Attach a single, shared IntersectionObserver that toggles `.is-visible`
 * on any element with class `.reveal` once it enters the viewport.
 * Runs only client-side to keep the SSR/static output free of side effects.
 */
export const useReveal = () => {
  if (import.meta.server) return

  onMounted(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const targets = document.querySelectorAll<HTMLElement>('.reveal')

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    targets.forEach((el) => observer.observe(el))

    onBeforeUnmount(() => observer.disconnect())
  })
}
