import Image from "next/image";
import { Gauge, ShieldCheck } from "lucide-react";
import { siteImages } from "../../lib/antellay";

export function Symbiosis() {
  return (
    <section id="symbiosis" className="grid-bg relative overflow-hidden border-b border-white/8 py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1480px] items-center gap-12 px-6 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-18">
        <div>
          <p className="mb-6 flex items-center gap-2 font-mono text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#126fff]">
            <span>&#9889;</span>
            <span>SYMBIOSIS</span>
          </p>
          <h2 className="max-w-[560px] text-[clamp(3.5rem,6vw,5.2rem)] font-black uppercase leading-[1.05] tracking-tight text-[#ededf7]">
            HUMAN +
            <br />
            MACHINE
          </h2>
          <p className="mt-8 max-w-[650px] text-base sm:text-lg leading-8 text-[#c9c6ce]">
            We don&apos;t build replacements. We build extensions. Our robotic
            systems are designed to interface seamlessly with human operators,
            augmenting capabilities and venturing where biological fragility
            prevents exploration.
          </p>

          <div className="mt-10 space-y-4">
            {/* Latency Metric Box */}
            <div className="flex items-center gap-5 border border-white/10 bg-[#14151c]/90 p-5 backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5 text-[#126fff]">
                <Gauge className="h-6 w-6" />
              </div>
              <div>
                <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-[#ededf7]">
                  LATENCY
                </p>
                <p className="mt-1 font-sans text-sm sm:text-base text-[#c9c6ce]">
                  &lt; 12ms Response Time
                </p>
              </div>
            </div>

            {/* Failsafe Metric Box */}
            <div className="flex items-center gap-5 border border-white/10 bg-[#14151c]/90 p-5 backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5 text-[#126fff]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-[#ededf7]">
                  FAILSAFE
                </p>
                <p className="mt-1 font-sans text-sm sm:text-base text-[#c9c6ce]">
                  Redundant Override Systems
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Visual with Sync Telemetry Overlay */}
        <div className="tech-frame relative h-[420px] sm:h-[580px] overflow-hidden border-white/10 bg-[#0c0d12] group">
          <Image
            src={siteImages.symbiosis}
            alt="Human operator coordinating with quadruped robot dog"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover opacity-80 grayscale contrast-125 transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12]/80 via-transparent to-[#0c0d12]/30" />

          {/* Sync Status Badge Overlay */}
          <div className="absolute bottom-8 right-8 border border-white/15 bg-[#0e0f14]/90 p-4 font-mono text-xs backdrop-blur-md">
            <p className="font-black uppercase tracking-[0.2em] text-[#ededf7]">
              SYNC STATUS
            </p>
            <div className="mt-3 h-1.5 w-36 bg-white/15 overflow-hidden">
              <div className="h-full w-[74%] bg-gradient-to-r from-[#126fff]/60 to-[#126fff] shadow-[0_0_10px_#126fff]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
