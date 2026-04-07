export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <a className="footer-logo" href="#hero">
            Абріс<em>Рей</em>
          </a>
          <p className="footer-copy">© 2026 Абріс Рей. Сонячні електростанції по всій Україні.</p>
          <ul className="footer-links">
            <li><a href="#about">Про нас</a></li>
            <li><a href="#services">Послуги</a></li>
            <li><a href="#equipment">Обладнання</a></li>
            <li><a href="#contact">Контакти</a></li>
          </ul>
        </div>
        <div className="footer-designed">
          <a href="https://bylund.studio/" target="_blank" rel="noopener noreferrer">Designed by lund.studio</a>
        </div>
      </div>
    </footer>
  )
}
