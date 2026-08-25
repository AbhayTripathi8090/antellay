import Image from "next/image";
import { Eye, Cpu, Brain } from "lucide-react";
import { siteImages } from "../../lib/antellay";

export function Vision() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden border-b border-white/8 bg-[#101118] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1480px] px-6 sm:px-10 lg:px-18">
        {/* Sub-section 1: Vision Hero Title */}
        <div className="grid min-h-[500px] items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="flex items-center gap-4 font-mono text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#c9c6ce]">
              <span className="h-px w-8 bg-[#126fff]" />
              02 &mdash; VISION
            </p>
            <h2 className="mt-8 max-w-[900px] text-[clamp(3.5rem,7vw,6.2rem)] font-black uppercase leading-[1.04] tracking-tight text-[#ededf7]">
              BUILDING THE MACHINES OF TOMORROW.
            </h2>
            <p className="mt-8 max-w-[760px] text-lg sm:text-xl font-medium leading-8 text-[#c9c6ce]">
              We are architecting the foundational systems for autonomous physical
              intelligence. Our approach combines state-of-the-art perception
              networks with robust mechanical design to solve complex real-world
              operations.
            </p>
          </div>
          <div className="hidden justify-center lg:flex">
            <span className="vision-x font-mono text-[18rem] font-black leading-none text-white/15 select-none">
              X
            </span>
          </div>
        </div>

        {/* Sub-section 2: Perception */}
        <div className="mt-28 sm:mt-36 border-t border-white/8 pt-24 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#ededf7]">
              PERCEPTION
            </h3>
            <p className="mt-8 text-base sm:text-lg leading-8 text-[#c9c6ce]">
              Sensory ingestion architectures designed to parse complex, unstructured
              environments in real-time. High-fidelity visual and spatial data
              processing capabilities enable our systems to understand geometry and
              context with sub-millimeter precision.
            </p>

            {/* Feature Bullets */}
            <div className="mt-10 space-y-4 font-mono text-xs sm:text-sm font-black uppercase tracking-[0.18em] text-[#c9c6ce]">
              <div className="flex items-center gap-3.5 border border-white/8 bg-[#14151c]/60 p-4">
                <Eye className="h-4 w-4 text-[#126fff]" />
                <span>Lidar-Vision Fusion</span>
              </div>
              <div className="flex items-center gap-3.5 border border-white/8 bg-[#14151c]/60 p-4">
                <Cpu className="h-4 w-4 text-[#126fff]" />
                <span>Edge-Compute Acceleration</span>
              </div>
              <div className="flex items-center gap-3.5 border border-white/8 bg-[#14151c]/60 p-4">
                <Brain className="h-4 w-4 text-[#126fff]" />
                <span>Neural Depth Estimation</span>
              </div>
            </div>
          </div>

          {/* Perception Optical Sensor Image Box */}
          <div className="tech-frame relative h-[420px] sm:h-[540px] overflow-hidden border-[#126fff]/30 bg-[#0c0d12]">
            <Image
              src={siteImages.perceptionSensor}
              alt="High-resolution optical perception sensor assembly lens"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover opacity-85 grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12]/80 via-transparent to-[#0c0d12]/30" />
            <div className="absolute bottom-6 left-6 border border-white/15 bg-black/80 px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-[#ededf7] backdrop-blur-md">
              SYS.PERCEPTION_V3.4
            </div>
          </div>
        </div>

        {/* Sub-section 3: Intelligence (Alternating Grid) */}
        <div className="mt-28 sm:mt-36 border-t border-white/8 pt-24 grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Intelligence Schematic Image Box (Left) */}
          <div className="tech-frame relative h-[420px] sm:h-[540px] overflow-hidden border-[#126fff]/30 bg-[#0c0d12] order-2 lg:order-1">
            <Image
              src={siteImages.cognitionCore}
              alt="Cognitive unit diagnostics network topology blueprint"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover opacity-85 grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12]/80 via-transparent to-[#0c0d12]/30" />

            {/* HUD Top Status Overlay */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between font-mono text-[10px] font-bold uppercase tracking-widest text-white/50">
              <span>COGNITIVE CORE: CORTEX-7</span>
              <span>DATA FLOW: 4.8 PB/s</span>
            </div>

            <div className="absolute bottom-6 left-6 border border-white/15 bg-black/80 px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-[#ededf7] backdrop-blur-md">
              SYS.COGNITION_CORE
            </div>
          </div>

          {/* Intelligence Text Content (Right) */}
          <div className="order-1 lg:order-2">
            <h3 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#ededf7]">
              INTELLIGENCE
            </h3>
            <p className="mt-8 text-base sm:text-lg leading-8 text-[#c9c6ce]">
              Cognitive frameworks built on advanced foundational models tailored for
              physical interaction. These systems translate sensory input into
              predictive reasoning, allowing machines to anticipate variables and
              adapt strategies dynamically.
            </p>
          </div>
        </div>

        {/* Sub-section 4: Real-World Operations Banner */}
        <div className="mt-28 sm:mt-36 border-t border-white/8 pt-24">
          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#ededf7] text-center mb-12">
            REAL-WORLD OPERATIONS
          </h3>

          <div className="relative h-[380px] sm:h-[540px] border border-white/10 bg-[#0d0e14] overflow-hidden group">
            <Image
              src={siteImages.realWorldOps}
              alt="Autonomous industrial robot operating at factory control panel"
              fill
              sizes="100vw"
              className="object-cover opacity-60 grayscale transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e14] via-transparent to-[#0d0e14]/50" />
            
            {/* Center Focus Box Blueprint Frame */}
            <div className="absolute inset-10 sm:inset-16 border border-[#126fff]/30 pointer-events-none flex items-start justify-between p-4 font-mono text-[10px] font-bold uppercase tracking-widest text-[#126fff]">
              <span>[ AUTONOMOUS FIELD UNIT AX-9 ]</span>
              <span>LIVE TELEMETRY FEED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
