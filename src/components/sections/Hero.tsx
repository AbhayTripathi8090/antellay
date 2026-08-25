import Image from "next/image";
import { siteImages } from "../../lib/antellay";

export function Hero() {
  return (
    <section
      id="top"
      className="grid-bg relative overflow-hidden border-b border-white/8"
    >
      <div className="mx-auto grid min-h-[828px] w-full max-w-[1640px] items-center gap-12 px-6 py-12 sm:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-18">
        <div className="max-w-[700px]">
          <p className="mb-8 flex items-center gap-3 font-mono text-sm font-black uppercase tracking-[0.25em] text-[#126fff]">
            <span className="h-2.5 w-2.5 bg-[#126fff]" />
            SYSTEM ONLINE // V.9.4
          </p>
          <h1 className="max-w-[680px] text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1.05] tracking-tight text-[#ededf7]">
            ANTELLAY-X:
            <br />
            INTELLIGENT
            <br />
            MACHINES.
          </h1>
          <p className="mt-9 max-w-[560px] text-[1.35rem] leading-8 text-[#c9c6ce]">
            Pioneering the synthesis of advanced robotics and autonomous neural
            architectures. Redefining the boundary between hardware and
            cognition.
          </p>
          <a
            href="#vision"
            className="mt-11 inline-flex bg-[#f4f4f6] px-10 py-5 font-mono text-sm font-black uppercase tracking-[0.22em] text-[#111217] transition hover:bg-[#126fff] hover:text-white"
          >
            Explore The Vision
          </a>
        </div>

        <div className="tech-frame relative aspect-[1.08] min-h-[420px] overflow-hidden bg-black lg:min-h-[720px] animate-subtle-zoom">
          <Image
            src={siteImages.hero}
            alt="Humanoid robotic head with illuminated blue telemetry"
            fill
            priority
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover opacity-90 saturate-[0.75]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_22%,rgba(93,178,255,0.28),transparent_28%),linear-gradient(90deg,rgba(0,0,0,0.42),transparent_38%,rgba(0,0,0,0.56))]" />
          <div className="absolute left-10 top-14 font-mono text-xs font-black uppercase leading-8 tracking-[0.12em] text-[#126fff]">
            <p>TRK // 84.992.1</p>
            <p>SYS // NOMINAL</p>
          </div>
          <div className="absolute bottom-14 right-12 text-right font-mono text-xs font-black uppercase leading-8 tracking-[0.08em] text-[#d7d7de]">
            <p>OP-MODE: AUTONOMOUS</p>
            <p>CORE_TEMP: 32C</p>
          </div>
        </div>
      </div>
    </section>
  );
}
