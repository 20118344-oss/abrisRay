const pills = [
  'Сертифіковані монтажники',
  'Офіційна гарантія',
  'Власна логістика',
  'Онлайн-моніторинг',
  'Підключення до мережі',
  'Без прихованих платежів',
]

const cardRows = [
  {
    label: "Проєктів завершено",
    val: "45+ об'єктів по всій Україні",
    width: 90,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--a1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1.5" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22.5"/>
        <line x1="1.5" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22.5" y2="12"/>
        <line x1="4.22" y1="4.22" x2="5.9" y2="5.9"/><line x1="18.1" y1="18.1" x2="19.78" y2="19.78"/>
        <line x1="19.78" y1="4.22" x2="18.1" y2="5.9"/><line x1="4.22" y1="19.78" x2="5.9" y2="18.1"/>
      </svg>
    ),
  },
  {
    label: 'Задоволеність клієнтів',
    val: '100% позитивних відгуків',
    width: 100,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--a1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="7.5,12 10.5,15.5 16.5,8.5"/>
      </svg>
    ),
  },
  {
    label: 'Гарантія на батареї LiFePO₄',
    val: '10 000+ циклів · 10 років',
    width: 95,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--a1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="7" width="16" height="10" rx="2"/>
        <path d="M17 10 h3 a1 1 0 0 1 0 4 h-3"/>
        <line x1="5" y1="10.5" x2="5" y2="13.5"/>
        <line x1="8.5" y1="10.5" x2="8.5" y2="13.5"/>
        <line x1="12" y1="10.5" x2="12" y2="13.5"/>
      </svg>
    ),
  },
  {
    label: 'Гарантія на сонячні панелі',
    val: '12+ років продуктивності',
    width: 85,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--a1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2 L7 13 H12 L10 22 L17 11 H12 Z"/>
      </svg>
    ),
  },
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-layout">
          <div className="about-copy" data-reveal>
            <span className="tag">Хто ми</span>
            <h2 className="section-title">Будуємо сонячні станції в Україні з 2016 року</h2>
            <p>
              <strong>Абріс Рей</strong> - українська компанія з встановлення сонячних електростанцій.
              Ми реалізовуємо повний цикл: від першої консультації до введення системи в експлуатацію
              та подальшого технічного супроводу.
            </p>
            <p>
              До нашої команди входять інженери-проєктувальники, спеціалісти з електроенергетики,
              монтажники та технічна підтримка - всі, хто потрібен для бездоганного результату.
              Ми не продаємо «коробкові» рішення - кожен проєкт розробляється індивідуально.
            </p>
            <p>
              Мета кожної станції - або <strong>повна автономія</strong>, або максимальна вигода
              від «Зеленого тарифу». Ми підберемо оптимальний варіант саме для вас.
            </p>
            <div className="about-pills">
              {pills.map((pill) => (
                <span key={pill} className="pill">
                  <span className="pill-dot" />
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <div className="about-card" data-reveal style={{ transitionDelay: '.15s' }}>
            {cardRows.map((row) => (
              <div key={row.label} className="about-card-row">
                <div className="about-card-icon">{row.icon}</div>
                <div>
                  <div className="about-card-label">{row.label}</div>
                  <div className="about-card-val">{row.val}</div>
                  <div className="meter" style={{ maxWidth: '200px' }}>
                    <div className="meter-bar" data-width={row.width} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
