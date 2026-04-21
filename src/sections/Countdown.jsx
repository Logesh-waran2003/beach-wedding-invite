import { useState, useEffect } from 'react'

const TARGET = new Date('2026-12-09T18:00:00').getTime()

function getTimeLeft() {
  const diff = Math.max(0, TARGET - Date.now())
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ]

  return (
    <section className="bg-[#2d2d2d] py-24 px-6 text-center">
      <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-[#c9a96e] mb-3">
        Abhishek &amp; Kanika
      </h2>
      <p className="font-[family-name:var(--font-body)] text-white/50 text-sm tracking-widest uppercase mb-12">
        The countdown begins
      </p>

      <div className="flex justify-center items-center gap-3 md:gap-5 mb-14">
        {units.map((u, i) => (
          <div key={u.label} className="flex items-center gap-3 md:gap-5">
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4 md:px-7 md:py-5 min-w-[72px]">
              <div className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-white font-light">
                {String(u.value).padStart(2, '0')}
              </div>
              <div className="font-[family-name:var(--font-body)] text-[10px] text-white/40 mt-2 uppercase tracking-widest">
                {u.label}
              </div>
            </div>
            {i < 3 && <span className="text-[#c9a96e]/50 text-2xl font-light">:</span>}
          </div>
        ))}
      </div>

      <p className="font-[family-name:var(--font-body)] text-white/40 text-sm max-w-md mx-auto mb-16 leading-relaxed">
        Our families are excited to welcome you to this joyous celebration of love.
      </p>
      <p className="font-[family-name:var(--font-body)] text-white/20 text-xs">
        &copy; 2026 · Crafted with love
      </p>
    </section>
  )
}
