import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const BASE = import.meta.env.BASE_URL

const events = [
  { name: 'Mehendi', img: `${BASE}images/mehndi.jpg`, date: 'Friday, March 9th 2026', venue: 'Taj Exotica Resort, Goa', time: '6:00 PM' },
  { name: 'Haldi', img: `${BASE}images/haldi.jpg`, date: 'Friday, March 9th 2026', venue: 'Taj Exotica Resort, Goa', time: '6:00 PM' },
  { name: 'Cocktail', img: `${BASE}images/beach-sunset.jpg`, date: 'Friday, March 9th 2026', venue: 'JW Marriott, Mussoorie', time: '6:00 PM' },
  { name: 'Shaadi', img: `${BASE}images/flowers.jpg`, date: 'Friday, March 9th 2026', venue: 'Taj Exotica Resort, Goa', time: '6:00 PM' },
  { name: 'Reception', img: `${BASE}images/venue.jpg`, date: 'Friday, March 9th 2026', venue: 'Taj Exotica Resort, Goa', time: '6:00 PM' },
]

export default function Events() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current
      const scrollAmount = track.scrollWidth - window.innerWidth * 0.85 * 0.7

      gsap.to(track, {
        x: -scrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 0.5,
          end: `+=${scrollAmount}`,
          invalidateOnRefresh: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="h-screen overflow-hidden bg-[#faf8f5] flex flex-col justify-center">
      <h2 className="font-[family-name:var(--font-display)] text-[#2d2d2d] text-3xl md:text-4xl text-center mb-12 px-6">
        On the following events
      </h2>
      <div ref={trackRef} className="flex gap-8 px-[10vw] will-change-transform">
        {events.map((e) => (
          <div key={e.name} className="w-[300px] shrink-0">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <img src={e.img} alt={e.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="font-[family-name:var(--font-display)] text-[#2d2d2d] text-2xl mt-5">{e.name}</h3>
            <p className="font-[family-name:var(--font-body)] text-[#2d2d2d]/50 text-xs mt-2 tracking-wide">{e.date}</p>
            <p className="font-[family-name:var(--font-body)] text-[#2d2d2d]/70 text-sm">{e.venue}</p>
            <p className="font-[family-name:var(--font-body)] text-[#2d2d2d]/50 text-xs">{e.time}</p>
            <a href="#" className="font-[family-name:var(--font-body)] text-[#c9a96e] text-sm mt-3 inline-block hover:underline">See the route →</a>
          </div>
        ))}
      </div>
    </section>
  )
}
