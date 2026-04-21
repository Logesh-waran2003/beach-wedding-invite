import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const cards = [
  { emoji: '📸', title: '#ForeverTogether', desc: 'Use our wedding hashtag on all your photos and stories' },
  { emoji: '🌤️', title: 'Weather', desc: 'Expected 22°C with cloudy skies — light layers recommended' },
  { emoji: '🚗', title: 'Parking', desc: 'Complimentary valet parking available at the venue entrance' },
  { emoji: '👗', title: 'Dress Code', desc: 'Festive elegant — dress to celebrate in style' },
]

export default function ThingsToKnow() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.info-card', {
        y: 30,
        scale: 0.95,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 90%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-24 px-6 bg-[#faf8f5]">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2d2d2d] mb-3">
          Things to know
        </h2>
        <p className="font-[family-name:var(--font-body)] text-[#2d2d2d]/50 text-sm">
          A few details to help you feel at ease on the big day
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
        {cards.map((c) => (
          <div key={c.title} className="info-card bg-[#f5efe6] rounded-2xl p-6 border border-[#c9a96e]/15 text-center">
            <div className="text-3xl mb-3">{c.emoji}</div>
            <h3 className="font-[family-name:var(--font-body)] font-semibold text-[#2d2d2d] text-sm mb-1">{c.title}</h3>
            <p className="font-[family-name:var(--font-body)] text-xs text-[#2d2d2d]/50 leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
