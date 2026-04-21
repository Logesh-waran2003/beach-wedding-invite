import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useWedding, img } from '../config/index.jsx'

export default function Hero() {
  const { couple, hero } = useWedding()
  const sectionRef = useRef(null)
  const bgRef = useRef(null)
  const contentRef = useRef(null)
  const overlayRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ delay: 0.3 })
        .to(overlayRef.current, { yPercent: -100, duration: 1.2, ease: 'power4.inOut' })
        .from(contentRef.current.children, { y: 40, opacity: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out' }, '-=0.4')

      gsap.to(bgRef.current, { yPercent: 20, ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: true } })
      gsap.to(contentRef.current, { y: -60, opacity: 0, ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: '30% top', end: 'bottom top', scrub: true } })
      gsap.to(lineRef.current, { y: 10, repeat: -1, yoyo: true, duration: 1.2, ease: 'sine.inOut' })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden flex items-center justify-center">
      <div ref={overlayRef} className="absolute inset-0 bg-[#1a1a1a] z-30" />
      <div ref={bgRef} className="absolute inset-0 bg-cover bg-center will-change-transform" style={{ backgroundImage: `url(${img(hero.backgroundImage)})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      <div ref={contentRef} className="relative z-20 flex flex-col items-center justify-center h-full text-center">
        <h1 className="font-[family-name:var(--font-display)] text-7xl md:text-9xl font-light text-[#c9a96e] leading-none">{couple.groom.name}</h1>
        <div className="w-16 h-px bg-[#c9a96e] mx-auto my-4" />
        <p className="font-[family-name:var(--font-body)] text-[#c9a96e] text-sm tracking-widest uppercase">Weds</p>
        <div className="w-16 h-px bg-[#c9a96e] mx-auto my-4" />
        <h1 className="font-[family-name:var(--font-display)] text-7xl md:text-9xl font-light text-[#c9a96e] leading-none">{couple.bride.name}</h1>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <div ref={lineRef} className="w-px h-8 bg-[#c9a96e]" />
      </div>
    </section>
  )
}
