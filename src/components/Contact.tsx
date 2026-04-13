import { useState, FormEvent } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      ;(e.target as HTMLFormElement).reset()
    }, 3500)
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-copy" data-reveal>
            <span className="tag">Зв'язатися з нами</span>
            <h2 className="section-title">Розпочніть свій шлях до сонячної енергії</h2>
            <p>
              Залиште заявку - і наш інженер зв'яжеться з вами протягом одного робочого дня для безкоштовної консультації.
            </p>
            <div className="contact-rows">
              <div className="crow">
                <div className="crow-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--a1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.08 9a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .5h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.1 8.09a16 16 0 006.91 6.91l1.41-1.41a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div className="crow-meta">
                  <span>Телефон</span>
                  <strong><a href="tel:+380681200679">068 1200 679</a></strong>
                </div>
              </div>

              <div className="crow">
                <div className="crow-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--a1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.08 9a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .5h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.1 8.09a16 16 0 006.91 6.91l1.41-1.41a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div className="crow-meta">
                  <span>Телефон</span>
                  <strong><a href="tel:+380970575711">097 057 57 11</a></strong>
                </div>
              </div>

              <div className="crow">
                <div className="crow-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--a1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.08 9a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .5h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.1 8.09a16 16 0 006.91 6.91l1.41-1.41a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div className="crow-meta">
                  <span>Маркетолог</span>
                  <strong><a href="tel:+380675703731">067 570 37 31</a></strong>
                </div>
              </div>

              <div className="crow">
                <div className="crow-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--a1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M2 7 L12 14 L22 7"/>
                  </svg>
                </div>
                <div className="crow-meta">
                  <span>Email</span>
                  <strong><a href="mailto:ibriesun@gmail.com">ibriesun@gmail.com</a></strong>
                </div>
              </div>

              <div className="crow">
                <div className="crow-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--a1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2 C7.6 2 4 5.6 4 10 C4 16 12 24 12 24 C12 24 20 16 20 10 C20 5.6 16.4 2 12 2 Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="crow-meta">
                  <span>Регіон роботи</span>
                  <strong>Вся Україна</strong>
                </div>
              </div>
            </div>

            <a className="tg-btn" href="https://tg.pulse.is/Abriesun_bot" target="_blank" rel="noopener">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#59c7f3">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Написати в Telegram-бот
            </a>
          </div>

          <div className="form-card" data-reveal style={{ transitionDelay: '.15s' }}>
            <h3>Отримати безкоштовну консультацію</h3>
            <form onSubmit={handleForm}>
              <div className="form-grid">
                <div className="form-field">
                  <label>Ваше ім'я</label>
                  <input type="text" placeholder="Іван" required />
                </div>
                <div className="form-field">
                  <label>Номер телефону</label>
                  <input type="tel" placeholder="068 000 00 00" required />
                </div>
                <div className="form-field full">
                  <label>Email</label>
                  <input type="email" placeholder="your@email.com" />
                </div>
                <div className="form-field full">
                  <label>Тип об'єкту</label>
                  <select defaultValue="">
                    <option value="" disabled>Оберіть тип встановлення</option>
                    <option>Приватний будинок</option>
                    <option>Квартира / таунхаус</option>
                    <option>Офіс / магазин</option>
                    <option>Склад / виробництво</option>
                    <option>Агрокомплекс / ферма</option>
                    <option>Лише накопичувач (батарея)</option>
                    <option>Обслуговування / ремонт</option>
                  </select>
                </div>
                <div className="form-field full">
                  <label>Розкажіть про ваш проєкт</label>
                  <textarea placeholder="Приблизна потужність, адреса, поточний рахунок за електроенергію…" />
                </div>
              </div>
              <button
                className="form-submit"
                type="submit"
                style={submitted ? {
                  background: 'linear-gradient(135deg,#4caf50,#2e7d32)',
                  boxShadow: '0 4px 22px rgba(76,175,80,.35)',
                } : {}}
              >
                {submitted ? 'Заявку надіслано ✓' : 'Надіслати заявку →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
