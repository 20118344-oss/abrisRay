import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('[data-reveal]')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    revealEls.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}
