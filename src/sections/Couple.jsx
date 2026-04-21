import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useWedding, img } from '../config/index.jsx'

function Card({ name, photo, bio }) {
  return (
    <div className="couple-card text-center flex-1">
      <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mx-auto max-w-[280px]">
        <img src={img(photo)} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="font-[family-name:var(--font-display)] text-[#2d2d2d] text-2xl mt-5">{name}</h3>
      <p className="font-[family-name:var(--font-body)] text-[#2d2d2d]/50 text-sm mt-2 max-w-xs mx-auto leading-relaxed">{bio}</p>
    </div>
  )
}

export default function Couple() {
  const { couple } = useWedding()
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.couple-card')
      ;[-60, 60].forEach((x, i) => { if (cards[i]) gsap.from(cards[i], { x, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } }) })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-[#faf8f5] py-24 px-6">
      <div className="text-center mb-16">
        <p className="font-[family-name:var(--font-body)] text-[#8a9a7b] uppercase tracking-[0.3em] text-xs">Meet the</p>
        <h2 className="font-[family-name:var(--font-display)] text-[#2d2d2d] text-4xl md:text-5xl mt-2">Bride &amp; Groom</h2>
      </div>
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <Card name={couple.bride.name} photo={couple.bride.photo} bio={couple.bride.bio} />
        <span className="hidden md:block font-[family-name:var(--font-display)] text-[#c9a96e]/40 text-7xl">&amp;</span>
        <Card name={couple.groom.name} photo={couple.groom.photo} bio={couple.groom.bio} />
      </div>
    </section>
  )
}
