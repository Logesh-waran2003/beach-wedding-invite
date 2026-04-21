import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from './sections/Hero.jsx'
import Invitation from './sections/Invitation.jsx'
import Events from './sections/Events.jsx'
import Couple from './sections/Couple.jsx'
import Gallery from './sections/Gallery.jsx'
import Message from './sections/Message.jsx'
import RSVP from './sections/RSVP.jsx'
import ThingsToKnow from './sections/ThingsToKnow.jsx'
import Countdown from './sections/Countdown.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.fade-section').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      <div className="grain-overlay" />
      <Hero />
      <Invitation />
      <Events />
      <Couple />
      <Gallery />
      <Message />
      <RSVP />
      <ThingsToKnow />
      <Countdown />
    </>
  )
}
