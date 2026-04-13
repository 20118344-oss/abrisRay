import { useEffect, useRef } from 'react'

function useReveal(ref: React.RefObject<Element | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add('is-visible')
          obs.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
}

const topProjects = [
  {
    img: '/pictures/ab1.png',
    title: 'Приватна гібридна станція 20 кВт',
    desc: 'м. Кременчук, Полтавська область',
  },
  {
    img: '/pictures/ab2.jpg',
    title: 'Комерційна станція 30 кВт',
    desc: 'Офісна будівля, Харків',
  },
]

const bottomProjects = [
  {
    img: '/pictures/ab3.png',
    title: 'Котедж 8 кВт',
    desc: 'Заміський будинок, Львівська обл.',
  },
  {
    img: '/pictures/ab4.jpg',
    title: 'Промисловий об\'єкт 50 кВт',
    desc: 'Виробниче підприємство, Дніпро',
  },
  {
    img: '/pictures/ab5.jpg',
    title: 'Приватна станція 12 кВт',
    desc: 'Котедж, Одеська обл.',
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  useReveal(sectionRef)

  return (
    <section id="projects">
      <div className="container">

        <div className="section-head" data-reveal>
          <span className="tag">Наші проєкти</span>
          <h2 className="section-title">Реалізовані об'єкти</h2>
        </div>

        <div className="tl-wrapper" ref={sectionRef} data-reveal>

          {/* ── Top row: 2 cards above the line ── */}
          <div className="tl-top-row">
            {topProjects.map((p, i) => (
              <div className="tl-card tl-card-top" key={i}>
                <div className="tl-img-wrap">
                  <img src={p.img} alt={p.title} />
                </div>
                <h3 className="tl-title">{p.title}</h3>
                <p className="tl-desc">{p.desc}</p>
                <div className="tl-connector-down">
                  <div className="tl-dot" />
                  <div className="tl-vline" />
                </div>
              </div>
            ))}
          </div>

          {/* ── Horizontal timeline line ── */}
          <div className="tl-hline" />

          {/* ── Bottom row: 3 cards below the line ── */}
          <div className="tl-bottom-row">
            {bottomProjects.map((p, i) => (
              <div className="tl-card tl-card-bottom" key={i}>
                <div className="tl-connector-up">
                  <div className="tl-vline" />
                  <div className="tl-dot" />
                </div>
                <div className="tl-img-wrap">
                  <img src={p.img} alt={p.title} />
                </div>
                <h3 className="tl-title">{p.title}</h3>
                <p className="tl-desc">{p.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
