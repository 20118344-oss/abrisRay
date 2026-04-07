import { useEffect } from 'react'

export function useMeterBars() {
  useEffect(() => {
    const bars = document.querySelectorAll<HTMLElement>('.meter-bar[data-width]')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement
            el.style.width = el.dataset.width + '%'
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.3 }
    )
    bars.forEach((b) => obs.observe(b))
    return () => obs.disconnect()
  }, [])
}
