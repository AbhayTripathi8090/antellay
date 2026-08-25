"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Building2, Handshake, Briefcase, Mail, Send, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  subject: z.string().min(1, { message: "Please select a subject." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate async submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Transmission payload:", data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-white/8 bg-[#101118] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1480px] px-6 sm:px-10 lg:px-18">
        {/* Section Header */}
        <div className="max-w-[960px]">
          <h2 className="text-[clamp(3.2rem,6vw,5.5rem)] font-black uppercase leading-[1.06] tracking-tight text-[#ededf7]">
            SYSTEM CONTACT
          </h2>
          <p className="mt-6 font-mono text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-[#a5a3ab] leading-relaxed">
            INITIATE SECURE COMMUNICATION PROTOCOL. SELECT DEPARTMENT OR SUBMIT GENERAL INQUIRY BELOW.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-14 sm:mt-20 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left Column: Contact Form */}
          <div className="border border-white/10 bg-[#14151c]/90 p-8 sm:p-12 relative overflow-hidden backdrop-blur-md">
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-[#ededf7] mb-8">
              TRANSMIT MESSAGE
            </h3>

            {isSubmitted ? (
              <div className="my-12 border border-[#126fff]/40 bg-[#126fff]/10 p-8 text-center backdrop-blur-md">
                <CheckCircle2 className="mx-auto h-12 w-12 text-[#126fff] mb-4" />
                <h4 className="font-mono text-base font-black uppercase tracking-[0.2em] text-[#ededf7]">
                  COMMUNICATION TRANSMITTED
                </h4>
                <p className="mt-3 font-mono text-xs text-[#c9c6ce] tracking-wider">
                  TELEMETRY ACKNOWLEDGED // RESPONSE PENDING FROM ANTELLAY-X DISPATCH.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 border border-white/20 bg-white/5 px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition"
                >
                  TRANSMIT ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label className="block font-mono text-xs font-black uppercase tracking-[0.18em] text-[#a5a3ab] mb-2">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter full name"
                      {...register("fullName")}
                      className={`w-full border bg-[#0d0e14] px-4 py-3.5 font-sans text-sm text-[#ededf7] placeholder-[#6b6975] focus:outline-none transition ${
                        errors.fullName
                          ? "border-red-500/80 focus:border-red-500"
                          : "border-white/12 focus:border-[#126fff]"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 font-mono text-[11px] text-red-400">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block font-mono text-xs font-black uppercase tracking-[0.18em] text-[#a5a3ab] mb-2">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      {...register("email")}
                      className={`w-full border bg-[#0d0e14] px-4 py-3.5 font-sans text-sm text-[#ededf7] placeholder-[#6b6975] focus:outline-none transition ${
                        errors.email
                          ? "border-red-500/80 focus:border-red-500"
                          : "border-white/12 focus:border-[#126fff]"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 font-mono text-[11px] text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Company / Organization */}
                  <div>
                    <label className="block font-mono text-xs font-black uppercase tracking-[0.18em] text-[#a5a3ab] mb-2">
                      COMPANY / ORGANIZATION
                    </label>
                    <input
                      type="text"
                      placeholder="Optional"
                      {...register("company")}
                      className="w-full border border-white/12 bg-[#0d0e14] px-4 py-3.5 font-sans text-sm text-[#ededf7] placeholder-[#6b6975] focus:border-[#126fff] focus:outline-none transition"
                    />
                  </div>

                  {/* Subject Dropdown */}
                  <div>
                    <label className="block font-mono text-xs font-black uppercase tracking-[0.18em] text-[#a5a3ab] mb-2">
                      SUBJECT *
                    </label>
                    <select
                      {...register("subject")}
                      className={`w-full border bg-[#0d0e14] px-4 py-3.5 font-sans text-sm text-[#ededf7] focus:outline-none transition ${
                        errors.subject
                          ? "border-red-500/80 focus:border-red-500"
                          : "border-white/12 focus:border-[#126fff]"
                      }`}
                    >
                      <option value="" disabled className="bg-[#101118] text-[#8e8c95]">
                        Select subject...
                      </option>
                      <option value="General Inquiry" className="bg-[#101118]">
                        General Inquiry
                      </option>
                      <option value="Partnerships" className="bg-[#101118]">
                        Partnerships & Alliances
                      </option>
                      <option value="Careers" className="bg-[#101118]">
                        Careers & Dossiers
                      </option>
                      <option value="Technical Support" className="bg-[#101118]">
                        Hardware / Compute Support
                      </option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1.5 font-mono text-[11px] text-red-400">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-mono text-xs font-black uppercase tracking-[0.18em] text-[#a5a3ab] mb-2">
                    MESSAGE *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Enter your message..."
                    {...register("message")}
                    className={`w-full border bg-[#0d0e14] p-4 font-sans text-sm text-[#ededf7] placeholder-[#6b6975] focus:outline-none transition ${
                      errors.message
                        ? "border-red-500/80 focus:border-red-500"
                        : "border-white/12 focus:border-[#126fff]"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 font-mono text-[11px] text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-3 bg-[#ededf7] px-9 py-4 font-mono text-sm font-black uppercase tracking-[0.2em] text-[#0d0e14] transition hover:bg-[#126fff] hover:text-white disabled:opacity-50"
                  >
                    <span>{isSubmitting ? "TRANSMITTING..." : "TRANSMIT"}</span>
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Info Cards */}
          <div className="space-y-6">
            {/* Headquarters Card */}
            <div className="border border-white/10 bg-[#14151c]/90 p-8 relative overflow-hidden group hover:border-white/20 transition duration-300">
              <div className="flex items-center gap-3 font-mono text-xs font-black uppercase tracking-[0.22em] text-[#a5a3ab] mb-6">
                <Building2 className="h-4 w-4 text-[#126fff]" />
                HEADQUARTERS
              </div>
              <div className="space-y-1 text-base text-[#c9c6ce] leading-relaxed">
                <p>1001 Innovation Drive</p>
                <p>Sector 7G, Tech District</p>
                <p>San Francisco, CA 94105</p>
              </div>
              <a
                href="mailto:contact@antellay-x.com"
                className="mt-6 inline-flex items-center gap-2 font-mono text-sm font-bold text-[#126fff] hover:underline"
              >
                <Mail className="h-3.5 w-3.5" />
                contact@antellay-x.com
              </a>
            </div>

            {/* Partnerships Card */}
            <div className="border border-white/10 bg-[#14151c]/90 p-8 relative overflow-hidden group hover:border-white/20 transition duration-300">
              <div className="flex items-center gap-3 font-mono text-xs font-black uppercase tracking-[0.22em] text-[#a5a3ab] mb-6">
                <Handshake className="h-4 w-4 text-[#126fff]" />
                PARTNERSHIPS
              </div>
              <p className="text-base text-[#c9c6ce] leading-relaxed">
                For strategic alliances, supplier integrations, or academic collaborations,
                route inquiries to our partnership division.
              </p>
              <a
                href="mailto:partners@antellay-x.com"
                className="mt-6 inline-flex items-center gap-2 font-mono text-sm font-bold text-[#126fff] hover:underline"
              >
                <Mail className="h-3.5 w-3.5" />
                partners@antellay-x.com
              </a>
            </div>

            {/* Careers Card */}
            <div className="border border-white/10 bg-[#14151c]/90 p-8 relative overflow-hidden group hover:border-white/20 transition duration-300">
              <div className="flex items-center gap-3 font-mono text-xs font-black uppercase tracking-[0.22em] text-[#a5a3ab] mb-6">
                <Briefcase className="h-4 w-4 text-[#126fff]" />
                CAREERS
              </div>
              <p className="text-base text-[#c9c6ce] leading-relaxed">
                Join the vanguard of robotics. View open positions or submit your dossier
                for future consideration.
              </p>
              <a
                href="#careers"
                className="mt-6 inline-block font-mono text-sm font-bold tracking-widest text-[#126fff] hover:underline uppercase"
              >
                VIEW PORTAL &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
