import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useWedding } from '../config/index.jsx'

function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 my-6">
      <div className="w-12 h-px bg-[#c9a96e]" />
      <div className="w-1.5 h-1.5 rotate-45 bg-[#c9a96e]" />
      <div className="w-12 h-px bg-[#c9a96e]" />
    </div>
  )
}

export default function Invitation() {
  const { couple, blessings } = useWedding()
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.invite-block').forEach(el => {
        gsap.from(el, { y: 40, opacity: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 85%' } })
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-[#f5efe6] py-32">
      <div className="max-w-lg mx-auto text-center px-6">
        <p className="invite-block font-[family-name:var(--font-display)] text-[#c9a96e] italic text-sm">{blessings.sanskrit}</p>
        <Divider />
        <p className="invite-block font-[family-name:var(--font-body)] text-[#2d2d2d]/60 text-sm">{blessings.line}</p>
        <div className="invite-block mt-6 space-y-3">
          {blessings.families.map((f, i) => (
            <div key={i}>
              <p className="font-[family-name:var(--font-display)] text-[#2d2d2d] text-lg">{f}</p>
              {i < blessings.families.length - 1 && <div className="w-10 h-px bg-[#c9a96e] mx-auto mt-3" />}
            </div>
          ))}
        </div>
        <Divider />
        <p className="invite-block font-[family-name:var(--font-body)] text-[#c9a96e] text-sm uppercase tracking-[0.5em]">Invite</p>
        <p className="invite-block font-[family-name:var(--font-body)] text-[#2d2d2d]/60 text-sm mt-3">You to join us in the wedding celebrations of</p>
        <Divider />
        <h2 className="invite-block font-[family-name:var(--font-display)] text-[#2d2d2d] text-5xl md:text-6xl font-light leading-tight">
          {couple.groom.name} & {couple.bride.name}
        </h2>
        <p className="invite-block font-[family-name:var(--font-body)] text-[#2d2d2d]/60 text-sm mt-4">{blessings.daughterOf}</p>
        <Divider />
      </div>
    </section>
  )
}
