import Image from "next/image";
import { humanoidSpecs, roboticsCards, siteImages } from "../../lib/antellay";

export function Robotics() {
  return (
    <section
      id="robotics"
      className="relative overflow-hidden border-b border-white/8 bg-[#101118]"
    >
      <div className="robotics-lines mx-auto min-h-screen max-w-[1480px] px-6 py-28 sm:px-10 sm:py-36 lg:px-18">
        <div className="max-w-[900px] pt-12">
          <p className="flex items-center gap-5 font-mono text-sm font-black uppercase tracking-[0.22em] text-[#c9c6ce]">
            <span className="h-px w-16 bg-[#d8d8df]" />
            03 - Robotics
          </p>
          <h2 className="mt-10 max-w-[980px] text-[clamp(4rem,7vw,6rem)] font-black uppercase leading-[1.08] text-[#ededf7]">
            Intelligence in Motion.
          </h2>
          <p className="mt-11 max-w-[860px] text-xl leading-8 text-[#d0cccf]">
            Advanced biomechanical engineering meets edge-computed autonomy. Our
            robotic platforms are designed for precision, resilience, and
            seamless integration into complex environments.
          </p>
        </div>

        <div className="mt-28 grid gap-8 lg:grid-cols-2">
          {roboticsCards.map((card) => (
            <article
              key={card.title}
              className="group relative min-h-[348px] overflow-hidden border border-white/10 bg-[#17181e]"
            >
              <Image
                src={card.image}
                alt={`${card.title} robotics platform`}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover grayscale transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,16,0.38),rgba(10,11,16,0.9)),linear-gradient(90deg,rgba(10,11,16,0.18),transparent)]" />
              <div className="relative flex h-full min-h-[348px] flex-col justify-end p-8">
                <h3 className="text-4xl font-black uppercase leading-none text-[#ededf7]">
                  {card.title}
                </h3>
                <p className="mt-4 font-mono text-sm font-black uppercase tracking-[0.18em] text-[#c9c6ce]">
                  {card.series}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="relative mt-16 overflow-hidden border border-white/10 bg-[#191b22] px-8 py-14 sm:px-16 lg:px-18">
          <p className="pointer-events-none absolute right-12 top-4 font-mono text-[7rem] font-black leading-none text-white/[0.025] sm:text-[10rem]">
            AX-H
          </p>
          <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center">
            <div>
              <p className="mb-7 flex items-center gap-3 font-mono text-sm font-black uppercase tracking-[0.22em] text-[#126fff]">
                <span className="h-2 w-2 bg-[#126fff]" />
                System Online
              </p>
              <h3 className="max-w-[560px] text-[clamp(3rem,4.4vw,4.4rem)] font-black uppercase leading-[1.14] text-[#ededf7]">
                Humanoid Platform
              </h3>
              <p className="mt-8 max-w-[620px] text-lg leading-8 text-[#d0cccf]">
                The AX-H series represents the pinnacle of autonomous kinematic
                design. Engineered for complex environment navigation, it
                utilizes our proprietary neural-mesh control system for
                real-time spatial mapping and adaptive manipulation.
              </p>
              <div className="mt-12 grid max-w-[640px] grid-cols-2 border border-white/8 bg-[#111217]">
                {humanoidSpecs.map(([label, value]) => (
                  <div key={label} className="border border-white/8 p-6">
                    <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-[#bbb8bf]">
                      {label}
                    </p>
                    <p className="mt-3 text-4xl font-black uppercase text-[#ededf7]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="tech-frame dotted-panel relative min-h-[460px] overflow-hidden border-[#126fff]/40 bg-[#111217]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_52%,rgba(18,111,255,0.16),transparent_33%)]" />
              <div className="absolute inset-x-0 top-8 h-px bg-[#126fff]/50" />
              <div className="absolute inset-y-0 left-1/2 w-px bg-[#126fff]/50" />
              <div className="absolute inset-10 border border-[#126fff]/28" />
              <Image
                src={siteImages.hero}
                alt="Diagnostic HUD wireframe of a humanoid platform"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover opacity-40 grayscale mix-blend-screen"
              />
              <div className="absolute inset-0 bg-[#07111c]/50" />
              <div className="relative flex min-h-[460px] items-center justify-center">
                <span className="font-mono text-[12rem] font-black leading-none text-[#126fff]/45 sm:text-[16rem]">
                  AX
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex min-h-[580px] flex-col items-center justify-center text-center">
          <h2 className="text-[clamp(3.4rem,6vw,5.2rem)] font-black uppercase leading-none text-[#ededf7]">
            Witness the Future.
          </h2>
          <a
            href="#autonomy"
            className="mt-16 bg-[#c9c9cc] px-14 py-6 font-mono text-sm font-black uppercase tracking-[0.22em] text-[#111217] transition hover:bg-[#126fff] hover:text-white"
          >
            See The Autonomy
          </a>
        </div>
      </div>
    </section>
  );
}
