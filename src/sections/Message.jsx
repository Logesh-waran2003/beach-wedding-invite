import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useWedding } from '../config/index.jsx'

export default function Message() {
  const { message, couple } = useWedding()
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.msg-content', { y: 30, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 85%' } })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-[#f5efe6] py-24 px-6">
      <div className="msg-content max-w-2xl mx-auto text-center">
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2d2d2d] mb-10">A message from the couple</h2>
        <div className="relative px-8">
          <span className="text-7xl text-[#c9a96e]/40 font-serif leading-none absolute -top-6 left-0">&ldquo;</span>
          <p className="font-[family-name:var(--font-body)] text-[#2d2d2d]/70 text-lg italic leading-relaxed pt-4">{message}</p>
          <span className="text-7xl text-[#c9a96e]/40 font-serif leading-none absolute -bottom-10 right-0">&rdquo;</span>
        </div>
        <p className="font-[family-name:var(--font-display)] text-[#c9a96e] text-xl mt-12 italic">— {couple.groom.name} & {couple.bride.name}</p>
      </div>
    </section>
  )
}
