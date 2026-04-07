const cards = [
  {
    title: 'Індивідуальний підхід',
    desc: "Ніяких шаблонних рішень. Кожна станція проєктується під конкретний об\u2019єкт, споживання та бюджет клієнта.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--a1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <circle cx="12" cy="12" r="5.5"/>
        <circle cx="12" cy="12" r="2"/>
        <line x1="12" y1="1.5" x2="12" y2="6.5"/>
        <line x1="12" y1="17.5" x2="12" y2="22.5"/>
        <line x1="1.5" y1="12" x2="6.5" y2="12"/>
        <line x1="17.5" y1="12" x2="22.5" y2="12"/>
      </svg>
    ),
  },
  {
    title: 'Офіційна гарантія',
    desc: "Гарантійні зобов\u2019язання на обладнання та виконані роботи. Власний гарантійний та обмінний фонд.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--a1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="11" width="14" height="11" rx="2"/>
        <path d="M8 11 V7 a4 4 0 0 1 8 0 V11"/>
        <circle cx="12" cy="16" r="1.5"/>
        <line x1="12" y1="17.5" x2="12" y2="19.5"/>
      </svg>
    ),
  },
  {
    title: 'Онлайн-моніторинг',
    desc: 'Стежте за виробленням, споживанням та станом батарей у реальному часі з будь-якого пристрою.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--a1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="14" rx="2"/>
        <polyline points="6,14 9,10 12,12 15,7 18,10"/>
        <line x1="8" y1="18" x2="7" y2="22"/>
        <line x1="16" y1="18" x2="17" y2="22"/>
        <line x1="6" y1="22" x2="18" y2="22"/>
      </svg>
    ),
  },
  {
    title: 'Досвід з 2016 року',
    desc: "Понад 9 років у сфері. 45+ успішних проєктів різної складності - від приватних будинків до промислових об'єктів.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--a1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 4 H15 V13 C15 17 13 19 12 20 C11 19 9 17 9 13 Z"/>
        <path d="M9 6 H6 V11 C6 13 7.5 14 9 13"/>
        <path d="M15 6 H18 V11 C18 13 16.5 14 15 13"/>
        <line x1="12" y1="20" x2="12" y2="22"/>
        <line x1="9" y1="22" x2="15" y2="22"/>
      </svg>
    ),
  },
  {
    title: 'Прозоре ціноутворення',
    desc: 'Детальний кошторис без прихованих витрат. Ви знаєте вартість ще до початку робіт.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--a1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 2 H20 V19 L18 17 L16 19 L14 17 L12 19 L10 17 L8 19 L6 17 L4 19 Z"/>
        <line x1="7" y1="7" x2="17" y2="7"/>
        <line x1="7" y1="11" x2="17" y2="11"/>
        <line x1="7" y1="15" x2="13" y2="15"/>
      </svg>
    ),
  },
  {
    title: 'Власні монтажні бригади',
    desc: 'Штатні монтажники та електрики - без субпідрядників. Контроль якості на кожному етапі.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--a1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 18 Q5 10 12 8 Q19 10 19 18"/>
        <line x1="3" y1="20" x2="21" y2="20"/>
        <line x1="5" y1="18" x2="4" y2="20"/>
        <line x1="19" y1="18" x2="20" y2="20"/>
      </svg>
    ),
  },
]

export default function WhyUs() {
  return (
    <section id="why">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="tag">Чому Абріс Рей</span>
          <h2 className="section-title">Наші переваги</h2>
        </div>
        <div className="why-grid">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="why-card"
              data-reveal
              style={{ transitionDelay: `${(i + 1) * 0.05}s` }}
            >
              <div className="why-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
