const footerLinks = [
  ["Exploration", "Company"],
  ["Social", "X"],
  ["Legal", "Privacy"],
];

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#101118] py-24">
      <div className="mx-auto grid max-w-[1480px] gap-12 px-6 sm:px-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-18">
        <div>
          <p className="font-mono text-4xl font-black tracking-[0.02em] text-[#ededf7]">
            ANTELLAY-X
          </p>
          <p className="mt-28 font-mono text-xs font-black uppercase tracking-[0.2em] text-[#ededf7]">
            (c) 2024 Antellay-X. All Rights Reserved.
          </p>
        </div>
        {footerLinks.map(([heading, link]) => (
          <div key={heading}>
            <p className="font-mono text-sm font-black uppercase tracking-[0.22em] text-[#ededf7]">
              {heading}
            </p>
            <a
              href="#top"
              className="mt-8 block font-mono text-sm font-black uppercase tracking-[0.18em] text-[#ededf7]"
            >
              {link}
            </a>
          </div>
        ))}
      </div>
      <p className="pointer-events-none absolute bottom-20 left-1/2 -translate-x-1/2 font-mono text-[8rem] font-black leading-none text-white/[0.025] sm:text-[11rem]">
        ANTELLAY-X
      </p>
    </footer>
  );
}
