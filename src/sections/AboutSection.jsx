import FadeUp from '../components/ui/FadeUp'
import SectionLabel from '../components/ui/SectionLabel'
import SectionHeading from '../components/ui/SectionHeading'
import { STATS } from '../data/portfolio'
import Me from "../assets/me.png"
import { Image } from 'lucide-react'
function StatCard({ num, label }) {
  return (
    <div className="bg-surface-1 border border-white/[0.07] hover:border-white/[0.13] hover:bg-surface-2 rounded-[10px] px-5 py-[18px] transition-all duration-200 cursor-default">
      <div className="text-[28px] font-bold tracking-[-1px] text-text-1">{num}</div>
      <div className="text-[13px] text-text-3 mt-0.5">{label}</div>
    </div>
  )
}

function ImagePlaceholder() {
  return (
    <div className="relative bg-surface-1 border border-white/[0.13] rounded-[14px] overflow-hidden aspect-[4/5] max-w-[300px] mx-auto lg:mx-0 flex items-center justify-center">
      {/* Blue radial glow */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(circle at 40% 30%, rgba(59,130,246,0.15), transparent 70%)' }}
        
      />
          <img src={Me} alt="" className='h-full w-full object-cover'/>
      {/* <span className="font-mono text-[64px] text-text-3 relative z-10 select-none">
        
      </span> */}
    </div>
  )
}

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-28 px-6 md:px-10 border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto">

        <FadeUp>
          <SectionLabel>About</SectionLabel>
          <SectionHeading title="Engineer. Builder.<br>Product thinker." />
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 mt-14 items-start">

          {/* Profile image */}
          <FadeUp delay={0.1}>
            <ImagePlaceholder />
          </FadeUp>

          {/* Bio + stats */}
          <div>
            <FadeUp delay={0.15}>
              <div className="text-text-2 text-base leading-[1.8] space-y-4">
                <p>
                  I'm a Full Stack Engineer with a deep focus on backend systems, APIs, and building
                  products that scale. I don't just write code — I architect systems with production
                  constraints in mind from day one.
                </p>
                <p>
                  My work spans from crafting responsive React frontends to designing FastAPI
                  microservices and PostgreSQL schemas that handle real-world load. I understand
                  security at the application layer — OWASP principles, secure auth flows, and
                  hardened API design are part of how I build by default.
                </p>
                <p>
                  Alongside engineering, I'm on a startup path — building Vicina, exploring SaaS
                  opportunities, and constantly shipping. I care about the full loop: design,
                  build, deploy, iterate.
                </p>
              </div>
            </FadeUp>

            <div className="grid grid-cols-2 gap-3 mt-8">
              {STATS.map((s, i) => (
                <FadeUp key={s.label} delay={0.2 + i * 0.05}>
                  <StatCard {...s} />
                </FadeUp>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
