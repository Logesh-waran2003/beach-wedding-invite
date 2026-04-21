import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const images = [
  { src: '/images/couple-1.jpg', caption: 'The first glance' },
  { src: '/images/couple-2-new.jpg', caption: 'A promise forever' },
  { src: '/images/couple-3.jpg', caption: 'Celebrating us' },
]

export default function Gallery() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-img', {
        y: 40,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 90%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-24 px-6 bg-[#faf8f5]">
      <p className="font-[family-name:var(--font-body)] text-[#8a9a7b] uppercase tracking-[0.3em] text-xs text-center">
        Captured in time
      </p>
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2d2d2d] text-center mt-2 mb-4">
        Our Moments
      </h2>
      <p className="font-[family-name:var(--font-body)] text-[#2d2d2d]/40 text-sm text-center max-w-md mx-auto mb-14">
        A glimpse into the love, laughter, and little moments that brought us here.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {images.map((img, i) => (
          <div key={img.src} className={`gallery-img relative overflow-hidden rounded-2xl group ${i === 1 ? 'md:-mt-6' : ''}`}>
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Soft gradient fade at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
            {/* Caption */}
            <p className="absolute bottom-4 left-0 right-0 text-center font-[family-name:var(--font-display)] text-white/90 text-sm italic tracking-wide">
              {img.caption}
            </p>
          </div>
        ))}
      </div>
      <p className="font-[family-name:var(--font-display)] text-[#c9a96e]/50 text-center text-lg italic mt-10">
        Every picture tells a story of us.
      </p>
    </section>
  )
}
