const services = [
  {
    num: '01',
    title: 'Безкоштовний енергоаудит та консультація',
    desc: 'Виїзд інженера або детальна дистанційна консультація. Аналізуємо споживання, оцінюємо дах та ставимо цілі.',
    list: [
      'Аналіз поточного споживання електроенергії',
      'Оцінка конструкції даху та місця монтажу',
      'Визначення мети: автономія чи «Зелений тариф»',
    ],
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="var(--a1)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="19" cy="19" r="11"/>
        <line x1="27" y1="27" x2="37" y2="37"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Індивідуальне проєктування та кошторис',
    desc: 'Ніяких стандартних рішень. Розраховуємо оптимальну потужність панелей, ємність батарей та підбираємо обладнання під ваш бюджет.',
    list: [
      'Розрахунок потужності та ємності',
      'Підбір обладнання від різних виробників',
      'Детальний кошторис без прихованих витрат',
    ],
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="var(--a1)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="22" cy="8" r="2.5"/>
        <line x1="20" y1="10" x2="9" y2="37"/>
        <line x1="24" y1="10" x2="35" y2="37"/>
        <path d="M15 23 Q22 18 29 23"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Постачання обладнання та монтаж',
    desc: 'Власна логістика та досвідчені монтажні бригади. Доставка сертифікованого обладнання в день монтажу, дотримання всіх норм електробезпеки.',
    list: [
      'Якісні кріпильні системи та захисна автоматика',
      'Монтаж за стандартами електробезпеки',
      'Акуратна прокладка кабелів та комутація',
    ],
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="var(--a1)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="8" width="32" height="22" rx="2"/>
        <line x1="6" y1="19" x2="38" y2="19"/>
        <line x1="17" y1="8" x2="17" y2="30"/>
        <line x1="28" y1="8" x2="28" y2="30"/>
        <line x1="14" y1="30" x2="10" y2="38"/>
        <line x1="30" y1="30" x2="34" y2="38"/>
        <line x1="8" y1="38" x2="36" y2="38"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Пусконалагодження та навчання',
    desc: 'Налаштовуємо систему під ваші пріоритети, встановлюємо застосунок для онлайн-моніторингу та навчаємо вас керувати станцією.',
    list: [
      'Програмування інвертора (день/ніч/резерв)',
      'Встановлення застосунку для моніторингу',
      'Навчання основам управління системою',
    ],
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="var(--a1)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M25 4 L12 24 H22 L19 40 L32 20 H22 Z"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Гарантійне та сервісне обслуговування',
    desc: 'Дистанційний моніторинг системи, офіційна гарантія на обладнання та роботи, планове технічне обслуговування.',
    list: [
      'Віддалений моніторинг показників',
      'Перевірка контактів та чищення панелей',
      'Швидке реагування на несправності',
    ],
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="var(--a1)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4 L38 10 V22 C38 32 30 39 22 42 C14 39 6 32 6 22 V10 Z"/>
        <polyline points="13,22 19,29 31,16"/>
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Підключення до мережі',
    desc: 'Повний супровід оформлення технічних умов, документації Укренерго та договору про «Зелений тариф» з місцевим постачальником.',
    list: [
      'Технічні умови та дозвільна документація',
      'Подача заявки та нетто-облік',
      'Договір про «Зелений тариф»',
    ],
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="var(--a1)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="14" y="18" width="16" height="14" rx="3"/>
        <line x1="18" y1="10" x2="18" y2="18"/>
        <line x1="26" y1="10" x2="26" y2="18"/>
        <line x1="22" y1="32" x2="22" y2="38"/>
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="tag">Що ми робимо</span>
          <h2 className="section-title">Комплексні рішення<br />під ключ</h2>
          <p className="section-desc">Від енергоаудиту до моніторингу - ми супроводжуємо вас на кожному кроці.</p>
        </div>
        <div className="services-grid">
          {services.map((svc, i) => (
            <div
              key={svc.num}
              className="svc-card"
              data-reveal
              style={{ transitionDelay: `${(i + 1) * 0.05}s` }}
            >
              <div className="svc-num">{svc.num}</div>
              <div className="svc-icon">{svc.icon}</div>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
              <ul className="svc-list">
                {svc.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
