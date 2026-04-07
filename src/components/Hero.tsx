import { useEffect, useRef } from 'react'
import { WebGLShader } from '@/components/ui/web-gl-shader'

export default function Hero() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (gridRef.current) {
        gridRef.current.style.transform = `translateY(${window.scrollY * 0.18}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const container = document.getElementById('particles')
    if (!container) return
    const COUNT = 18
    for (let i = 0; i < COUNT; i++) {
      const p = document.createElement('div')
      p.className = 'particle'
      const size = Math.random() * 3 + 1.5
      p.style.cssText = `
        width:${size}px; height:${size}px;
        left:${Math.random() * 100}%;
        bottom:${Math.random() * 40}%;
        animation-duration:${6 + Math.random() * 10}s;
        animation-delay:${Math.random() * 8}s;
      `
      container.appendChild(p)
    }
    return () => {
      if (container) container.innerHTML = ''
    }
  }, [])

  return (
    <section id="hero">
      <WebGLShader />

      <div className="hero-grid" ref={gridRef} />
      <div className="particles" id="particles" />

      <div className="hero-inner">
        <h1>
          Ваша <span className="grad-text">енергетична</span>
          <br />незалежність
          <br />починається тут
        </h1>
        <p className="hero-sub">
          Абріс Рей встановлює сонячні електростанції для будинків і бізнесу з{' '}
          <strong>2016 року</strong>. Індивідуальні рішення, сертифіковане обладнання, повна підтримка.
        </p>
        <div className="hero-btns">
          <a className="btn btn-grad" href="#contact">Безкоштовна консультація</a>
          <a className="btn btn-ghost" href="#services">Наші послуги</a>
        </div>
        <div className="hero-stats" data-reveal>
          <div className="hstat">
            <div className="hstat-num">45+</div>
            <div className="hstat-label">Реалізованих<br />проєктів</div>
          </div>
          <div className="hstat">
            <div className="hstat-num">100%</div>
            <div className="hstat-label">Задоволених<br />клієнтів</div>
          </div>
          <div className="hstat">
            <div className="hstat-num">2016</div>
            <div className="hstat-label">Рік заснування</div>
          </div>
          <div className="hstat">
            <div className="hstat-num">від $0.89</div>
            <div className="hstat-label">За ват<br />під ключ</div>
          </div>
        </div>
      </div>
    </section>
  )
}
