const inverters = [
  {
    logo: 'Stromherz',
    origin: '🇦🇹 Австрія · з 1993',
    desc: 'Спеціалізація на технологіях LFP-акумуляторів та системах накопичення енергії. Засновано в Велтсі, Австрія.',
    badge: '10 000+ циклів',
  },
  {
    logo: 'Victron',
    origin: '🇳🇱 Нідерланди · з 1970-х',
    desc: 'Світовий лідер в енергетичному обладнанні для морських суден, автодомів та автономних систем. Відкриті модульні рішення.',
    badge: 'Преміум якість',
  },
  {
    logo: 'Hipontech',
    origin: '🇨🇳 Китай (Сучжоу) · з 2018',
    desc: 'Входить до Топ-9 світових постачальників однофазних інверторів за версією Wood Mackenzie. Багаторазовий лауреат EUPD Research.',
    badge: 'Top Brand PV',
  },
  {
    logo: 'Solplanet',
    origin: '🇩🇪 Команда SMA · Німеччина',
    desc: 'Розроблено колишніми інженерами SMA. Захист IP66, безшумна робота, вбудований захист AFCI від займання. Раннє ввімкнення при малому напрузі.',
    badge: 'IP66 · AFCI',
  },
  {
    logo: 'Deye',
    origin: '🇨🇳 Нінбо · Китай',
    desc: 'Лідер китайського ринку відновлюваної енергетики. Справжні гібридні інвертори: сонце + батарея + мережа + генератор одночасно. До 16 паралельних.',
    badge: 'Hybrid · IP65',
  },
]

const panelBrands = ['Jinko Solar', 'LONGi Solar', 'JA Solar', 'Trina Solar']

export default function Equipment() {
  return (
    <section id="equipment">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="tag">Обладнання</span>
          <h2 className="section-title">Тільки перевірені<br />виробники</h2>
          <p className="section-desc">
            Ми співпрацюємо з провідними брендами, чиє обладнання пройшло перевірку часом і підтверджено міжнародними сертифікатами.
          </p>
        </div>

        <div className="equip-grid">
          {inverters.map((item, i) => (
            <div
              key={item.logo}
              className="equip-card"
              data-reveal
              style={{ transitionDelay: `${(i + 1) * 0.05}s` }}
            >
              <div className="equip-logo">{item.logo}</div>
              <div className="equip-origin">{item.origin}</div>
              <div className="equip-desc">{item.desc}</div>
              <div className="equip-badge">{item.badge}</div>
            </div>
          ))}
        </div>

        <div className="panel-brands" data-reveal>
          <span className="panel-brands-label">Сонячні панелі:</span>
          <div className="brand-chips">
            {panelBrands.map((brand) => (
              <span key={brand} className="brand-chip">{brand}</span>
            ))}
          </div>
        </div>

        <div className="price-callout" data-reveal>
          <div>
            <div className="price-big">
              від $0.6<span style={{ fontSize: '1.4rem' }}>/Вт</span>
            </div>
            <div className="price-label">Сонячна станція під ключ</div>
          </div>
          <div className="price-note">
            Від 0.6 дол/ватт. Чим більша встановлена потужність АКБ,<br />
            тим менша відносна вартість вашого проекту/менший термін окупності
          </div>
        </div>
      </div>
    </section>
  )
}
