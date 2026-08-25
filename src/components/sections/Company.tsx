import Image from "next/image";
import { Cpu, Bot, ArrowRight } from "lucide-react";
import { siteImages } from "../../lib/antellay";

export function Company() {
  return (
    <section
      id="company"
      className="grid-bg relative overflow-hidden border-b border-white/8 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1480px] px-6 sm:px-10 lg:px-18">
        {/* Section 1: Hero Banner (About Antellay-X) */}
        <div className="relative overflow-hidden border border-white/10 bg-[#12131a]/85 p-8 sm:p-14 lg:p-18 backdrop-blur-md">
          {/* Background Industrial Image Overlay */}
          <div className="pointer-events-none absolute inset-0">
            <Image
              src={siteImages.companyHero}
              alt="Industrial robotics assembly automation background"
              fill
              sizes="(min-width: 1024px) 90vw, 100vw"
              className="object-cover opacity-15 grayscale mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#101118] via-[#101118]/80 to-transparent" />
          </div>

          <div className="relative z-10">
            <p className="flex items-center gap-4 font-mono text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#c9c6ce]">
              <span className="h-px w-8 bg-[#126fff]" />
              05 &mdash; COMPANY
            </p>
            <h2 className="mt-8 max-w-[920px] text-[clamp(3.5rem,7vw,6.2rem)] font-black uppercase leading-[1.04] tracking-tight text-[#ededf7]">
              ABOUT ANTELLAY-X.
            </h2>
            <p className="mt-8 max-w-[660px] text-lg sm:text-xl font-medium leading-8 text-[#c9c6ce]">
              Pioneering the intersection of artificial intelligence and physical
              autonomy. We construct the synthetic nervous systems of tomorrow.
            </p>
          </div>

          {/* Bottom Right Telemetry Badge */}
          <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-10 border border-white/10 bg-[#0e0f14]/90 px-5 py-2.5 font-mono text-xs font-black uppercase tracking-[0.2em] text-[#ededf7] backdrop-blur-sm">
            SYS.INIT // OVR.ON
          </div>
        </div>

        {/* Section 2: Our Vision */}
        <div className="mt-24 sm:mt-36 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#ededf7]">
              OUR VISION
            </h2>
            <div className="mt-8 space-y-6 text-base sm:text-lg leading-8 text-[#c9c6ce]">
              <p>
                We envision a paradigm where robotics seamlessly augment human
                potential in the most challenging environments. Antellay-X is
                dedicated to solving the complex physics of real-world autonomy.
              </p>
              <p>
                Our approach synthesizes deep reinforcement learning with highly
                compliant, robust hardware architectures, creating machines that
                learn, adapt, and execute with unprecedented precision.
              </p>
            </div>

            {/* Core Directive Callout Box */}
            <div className="mt-10 border border-white/10 bg-[#14151c]/90 p-6 sm:p-8 relative">
              <span className="mb-3 block font-mono text-xs font-black uppercase tracking-[0.22em] text-[#126fff]">
                CORE DIRECTIVE
              </span>
              <p className="text-base sm:text-lg font-bold text-[#ededf7] leading-snug">
                Accelerate human progress through autonomous physical intelligence.
              </p>
            </div>
          </div>

          {/* Vision Cybernetic Hand Image Box */}
          <div className="tech-frame relative h-[420px] sm:h-[560px] overflow-hidden border-white/10 bg-[#0c0d12]">
            <Image
              src={siteImages.companyVision}
              alt="Cybernetic robotic hand holding a delicate synthetic flower"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover opacity-85 grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12]/80 via-transparent to-[#0c0d12]/30" />
            <div className="absolute bottom-6 right-6 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
              AX-RH047 // KINEMATIC MODEL
            </div>
          </div>
        </div>

        {/* Section 3: Technology Direction Grid */}
        <div className="mt-28 sm:mt-36">
          <div className="flex items-center justify-between border-b border-white/8 pb-6">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#ededf7]">
              TECHNOLOGY DIRECTION
            </h2>
            <span className="hidden font-mono text-xs font-black uppercase tracking-[0.24em] text-[#8e8c95] sm:inline-block">
              ARCHITECTURE OVERVIEW
            </span>
          </div>

          {/* Bento 4-Card Grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Card 1: Neural Architecture Search (NAS) */}
            <div className="relative min-h-[320px] overflow-hidden border border-white/10 bg-[#14151c]/90 p-8 sm:p-10 flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
              <Image
                src={siteImages.neuralTopology}
                alt="Neural network topology graph"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover opacity-25 grayscale group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14151c] via-[#14151c]/80 to-transparent" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-[#126fff] uppercase">
                  ANTELLAY-X
                </span>
                <span className="border border-white/15 bg-black/60 px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-[#8e8c95]">
                  NODE 01
                </span>
              </div>

              <div className="relative z-10 mt-12">
                <h3 className="text-2xl sm:text-3xl font-black text-[#ededf7]">
                  Neural Architecture Search (NAS)
                </h3>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#b8b5be]">
                  Automated design of highly optimized neural networks specifically
                  tailored for edge-compute robotics.
                </p>
              </div>
            </div>

            {/* Card 2: Edge Inference */}
            <div className="border border-white/10 bg-[#14151c]/90 p-8 sm:p-10 flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
              <div>
                <div className="flex h-14 w-14 items-center justify-center border border-white/10 bg-white/5 text-white mb-8">
                  <Cpu className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#ededf7]">
                  Edge Inference
                </h3>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#b8b5be]">
                  Real-time processing with sub-millisecond latency.
                </p>
              </div>
              <div className="mt-12 font-mono text-[10px] font-bold uppercase tracking-widest text-[#8e8c95]">
                ZERO-CLOUD DEPENDENCY
              </div>
            </div>

            {/* Card 3: Compliant Actuation */}
            <div className="border border-white/10 bg-[#14151c]/90 p-8 sm:p-10 flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
              <div>
                <div className="flex h-14 w-14 items-center justify-center border border-white/10 bg-white/5 text-white mb-8">
                  <Bot className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#ededf7]">
                  Compliant Actuation
                </h3>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#b8b5be]">
                  Force-feedback mechanisms mirroring biological muscles.
                </p>
              </div>
              <div className="mt-12 font-mono text-[10px] font-bold uppercase tracking-widest text-[#8e8c95]">
                DYNAMIC FEEDBACK LOOP
              </div>
            </div>

            {/* Card 4: Simulation-to-Reality Transfer */}
            <div className="relative min-h-[320px] overflow-hidden border border-white/10 bg-[#14151c]/90 p-8 sm:p-10 flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
              <Image
                src={siteImages.simToReal}
                alt="Biomechanical robotics simulation feed"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover opacity-25 grayscale group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14151c] via-[#14151c]/80 to-transparent" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-[#126fff] uppercase">
                  ANTELLAY-X // DYNAMICS SIMULATION
                </span>
                <span className="border border-white/15 bg-black/60 px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-[#8e8c95]">
                  NODE 02
                </span>
              </div>

              <div className="relative z-10 mt-12">
                <h3 className="text-2xl sm:text-3xl font-black text-[#ededf7]">
                  Simulation-to-Reality Transfer
                </h3>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#b8b5be]">
                  Bridging the gap between physics simulators and the physical world
                  through advanced domain randomization techniques.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: The Future Banner */}
        <div className="mt-28 sm:mt-36 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#ededf7]">
              THE FUTURE
            </h2>
            <p className="mt-6 max-w-[520px] text-base sm:text-lg leading-8 text-[#c9c6ce]">
              We are building the foundational infrastructure for a fully autonomous
              society. Join us in architecting the next epoch of intelligent
              machines.
            </p>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-3 border border-white/20 px-8 py-4 font-mono text-sm font-black uppercase tracking-[0.2em] text-[#ededf7] transition hover:border-white hover:bg-white hover:text-[#0d0e14]"
            >
              <span>CONTACT US</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right Side Facility Image Container with System Status Overlay */}
          <div className="relative h-[340px] sm:h-[420px] overflow-hidden border border-white/10 bg-[#0d0e14] group">
            <Image
              src={siteImages.facilityOnline}
              alt="Autonomous industrial facility server room floor"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover opacity-50 grayscale transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e14] via-transparent to-[#0d0e14]/40" />

            {/* Centered System Status Badge */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="border border-white/20 bg-[#0c0d12]/90 px-7 py-4 font-mono text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#ededf7] shadow-2xl backdrop-blur-md">
                SYSTEM STATUS: ONLINE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
