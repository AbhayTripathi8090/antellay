"use client";

import { Cpu, Activity } from "lucide-react";
import { motion } from "motion/react";

interface NodeItem {
  id: string;
  label: string;
}

const pathwayNodes: NodeItem[] = [
  { id: "sensors", label: "SENSORS" },
  { id: "perception", label: "PERCEPTION" },
  { id: "ai-core", label: "AI CORE" },
  { id: "decision", label: "DECISION" },
  { id: "action", label: "ACTION" },
];

const PATHWAY_DURATION = 7.25;
const PATHWAY_STEP = PATHWAY_DURATION / pathwayNodes.length;
const PATHWAY_ACTIVE = 0.78;

function pathwayTimes(index: number, offset = 0) {
  const start = Math.min((index * PATHWAY_STEP + offset) / PATHWAY_DURATION, 0.98);
  const end = Math.min((index * PATHWAY_STEP + PATHWAY_ACTIVE + offset) / PATHWAY_DURATION, 1);

  return [0, start, start + 0.001, end, end + 0.001, 1].map((time) =>
    Math.min(time, 1),
  );
}

const pathwayTransition = {
  duration: PATHWAY_DURATION,
  repeat: Infinity,
  ease: "linear",
} as const;

export function Autonomy() {
  return (
    <section
      id="autonomy"
      className="relative overflow-hidden border-b border-white/8 bg-[#101118] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1480px] px-6 sm:px-10 lg:px-18">
        {/* Section Header */}
        <div className="max-w-[960px]">
          <h2 className="text-[clamp(3.5rem,7vw,6rem)] font-black uppercase leading-[1.05] tracking-tight text-[#ededf7]">
            AUTONOMY. REDEFINED.
          </h2>
          <p className="mt-8 max-w-[860px] text-lg sm:text-xl leading-8 text-[#c9c6ce]">
            The synthesis of raw sensor data and advanced neural networks. Our
            autonomous systems don&apos;t just react; they anticipate, reason,
            and execute with sub-millisecond precision.
          </p>
        </div>

        {/* Neural Pathway Visualization Panel */}
        <div className="mt-16 sm:mt-24 border border-white/10 bg-[#14151c]/80 px-8 py-11 sm:px-12 sm:py-12 relative overflow-hidden backdrop-blur-md">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0,rgba(255,255,255,0.025)_50%,transparent_100%)] opacity-40" />
          <div className="relative">
            <p className="font-mono text-xs font-black uppercase tracking-[0.25em] text-[#a5a3ab]">
              NEURAL PATHWAY VISUALIZATION
            </p>
          </div>

          <div className="relative mt-12 overflow-x-auto pb-1">
            <div className="pathway-row min-w-[720px]">
              {pathwayNodes.map((node, index) => (
                <div
                  key={node.id}
                  className="pathway-step"
                >
                  <div className="pathway-dot-wrap" aria-hidden="true">
                    <span className="pathway-dot" />
                    <motion.span
                      className="pathway-halo"
                      animate={{
                        opacity: [0, 0, 1, 1, 0, 0],
                        scale: [0.8, 0.8, 1, 1, 0.85, 0.85],
                      }}
                      transition={{
                        ...pathwayTransition,
                        times: pathwayTimes(index),
                      }}
                    />
                    <motion.span
                      className="pathway-pulse"
                      animate={{
                        opacity: [0, 0, 1, 1, 0, 0],
                        scale: [1, 1, 1.18, 1.18, 1, 1],
                      }}
                      transition={{
                        ...pathwayTransition,
                        times: pathwayTimes(index),
                      }}
                    />
                  </div>
                  {index < pathwayNodes.length - 1 && (
                    <span className="pathway-segment" aria-hidden="true">
                      <motion.span
                        className="pathway-segment-glow"
                        animate={{
                          opacity: [0, 0, 1, 1, 0, 0],
                          scaleX: [0, 0, 1, 1, 0, 0],
                        }}
                        transition={{
                          ...pathwayTransition,
                          times: pathwayTimes(index, 0.14),
                        }}
                      />
                    </span>
                  )}
                  <span className="mt-3 block font-mono text-xs font-black uppercase tracking-[0.18em] text-[#a5a3ab]">
                    {node.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Cards (2 Columns) */}
        <div className="mt-12 sm:mt-16 grid gap-8 lg:grid-cols-2">
          {/* Card 1: Reasoning Engine */}
          <div className="border border-white/10 bg-[#14151c]/90 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-white/20 transition-all duration-300">
            <div>
              <div className="flex items-center gap-4">
                <Cpu className="h-7 w-7 text-[#ededf7]" />
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-[#ededf7]">
                  REASONING ENGINE
                </h3>
              </div>
              <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-[#b8b5be]">
                Powered by a proprietary localized neural mesh, the reasoning engine
                processes millions of spatial parameters per second. It evaluates
                probabilities, historical context, and immediate physical constraints
                without relying on cloud connectivity, ensuring zero-latency decision
                making in mission-critical environments.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-white/8">
              <div className="flex items-center justify-between font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#8e8c95] mb-3">
                <span>PROCESSING LOAD</span>
                <span>85% OPTIMIZED</span>
              </div>
              <div className="relative h-1.5 w-full bg-white/10 overflow-hidden">
                <div className="h-full w-[85%] bg-gradient-to-r from-[#126fff]/50 to-[#126fff] shadow-[0_0_12px_rgba(18,111,255,0.8)]" />
              </div>
            </div>
          </div>

          {/* Card 2: Motion Dynamics */}
          <div className="border border-white/10 bg-[#14151c]/90 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-white/20 transition-all duration-300">
            <div>
              <div className="flex items-center gap-4">
                <Activity className="h-7 w-7 text-[#ededf7]" />
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-[#ededf7]">
                  MOTION DYNAMICS
                </h3>
              </div>
              <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-[#b8b5be]">
                Actuation pathways translate abstract decisions into physical torque.
                Advanced inverse kinematics models calculate joint trajectories in
                real-time, accounting for payload shifts and terrain anomalies. The
                result is fluid, biological-like movement engineered for industrial
                durability.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-white/8">
              <div className="flex items-center justify-between font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#8e8c95] mb-3">
                <span>ACTUATOR RESPONSE</span>
                <span>92% EFFICIENCY</span>
              </div>
              <div className="relative h-1.5 w-full bg-white/10 overflow-hidden">
                <div className="h-full w-[92%] bg-gradient-to-r from-[#126fff]/50 to-[#126fff] shadow-[0_0_12px_rgba(18,111,255,0.8)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Industrial Automation Banner */}
        <div className="mt-16 sm:mt-24 border border-white/10 bg-[#14151c]/90 px-8 py-20 text-center sm:px-16 sm:py-28 relative overflow-hidden">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#ededf7] max-w-[1100px] mx-auto leading-tight">
            THE FUTURE OF INDUSTRIAL AUTOMATION
          </h2>
          <div className="mt-10">
            <a
              href="#company"
              className="inline-block bg-white px-10 py-5 font-mono text-sm font-black uppercase tracking-[0.2em] text-[#0d0e14] transition hover:bg-[#126fff] hover:text-white"
            >
              ABOUT THE COMPANY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
