import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteImages } from "../../lib/antellay";

export function Capabilities() {
  return (
    <section className="grid-bg relative overflow-hidden border-b border-white/8 py-24 sm:py-32">
      <div className="mx-auto max-w-[1480px] px-6 sm:px-10 lg:px-18">
        {/* Section Header */}
        <div>
          <p className="font-mono text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#126fff]">
            {"// CAPABILITIES"}
          </p>
          <h2 className="mt-4 text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#ededf7]">
            WHAT WE BUILD
          </h2>
        </div>

        {/* 2-Card Grid */}
        <div className="mt-12 sm:mt-16 grid gap-8 lg:grid-cols-2">
          {/* Card 1: ROBOTICS (01 - HARDWARE) */}
          <div className="relative min-h-[380px] sm:min-h-[480px] overflow-hidden border border-white/10 bg-[#14151c]/90 p-8 sm:p-12 flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
            <Image
              src={siteImages.hardwareJoint}
              alt="High precision mechanical robotics actuator joint"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover opacity-35 group-hover:scale-105 transition-transform duration-500 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14151c] via-[#14151c]/60 to-transparent" />

            <div className="relative z-10">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#126fff]">
                01 &mdash; HARDWARE
              </span>
            </div>

            <div className="relative z-10 mt-auto pt-16">
              <h3 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#ededf7]">
                ROBOTICS
              </h3>
              <a
                href="#robotics"
                className="mt-6 inline-flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ededf7] hover:text-[#126fff] transition"
              >
                <span>VIEW SPECS</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Card 2: AUTONOMY (02 - COGNITION) */}
          <div className="dotted-panel relative min-h-[380px] sm:min-h-[480px] overflow-hidden border border-white/10 bg-[#14151c]/90 p-8 sm:p-12 flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
            <Image
              src={siteImages.neuralTopology}
              alt="Neural network mesh background graphic"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover opacity-25 group-hover:scale-105 transition-transform duration-500 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14151c] via-[#14151c]/60 to-transparent" />

            <div className="relative z-10">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#126fff]">
                02 &mdash; COGNITION
              </span>
            </div>

            <div className="relative z-10 mt-auto pt-16">
              <h3 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#ededf7]">
                AUTONOMY
              </h3>
              <a
                href="#autonomy"
                className="mt-6 inline-flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ededf7] hover:text-[#126fff] transition"
              >
                <span>EXPLORE AI</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
