"use client";

import { useEffect, useState } from "react";

/* ──────────────────────────────────────────────
   DATA
   ────────────────────────────────────────────── */

const features = [
  {
    title: "Gigabit Game Caching",
    description:
      "Cache Steam & Blizzard files locally. Download once, play everywhere at LAN speed.",
  },
  {
    title: "Zero Lag, Wired Only",
    description:
      "USB-C and Ethernet eliminate Wi-Fi completely. Every millisecond counts.",
  },
  {
    title: "Offline by Design",
    description:
      "No internet needed for multiplayer. The entire party runs locally.",
  },
];

const steps = [
  {
    number: "01",
    title: "Power Up",
    description:
      "Plug in the PartyLAN hub. The Raspberry Pi 5 boots and initializes the caching server and network switch.",
  },
  {
    number: "02",
    title: "Connect Devices",
    description:
      "Plug USB-C to Ethernet adapters into your laptops. The 5-port switch handles up to 4 clients simultaneously.",
  },
  {
    number: "03",
    title: "Cache & Play",
    description:
      "Games are cached on the 1TB NVMe SSD. Download once, share across all connected devices at gigabit speeds.",
  },
];

const specs = [
  { label: "Processor", value: "Raspberry Pi 5" },
  { label: "Storage", value: "1TB NVMe SSD" },
  { label: "Network", value: "5-Port Gigabit Ethernet" },
  { label: "Adapters", value: "3× USB-C to Ethernet" },
  { label: "Enclosure", value: "Custom 3D-printed (PLA)" },
  { label: "Software", value: "Lancache (open-source)" },
  { label: "Target Speed", value: "1 Gbps+ LAN" },
  { label: "Prototype Cost", value: "$239" },
];

const bom = [
  { item: "Raspberry Pi 5", cost: "$99" },
  { item: "1TB NVMe SSD", cost: "$82" },
  { item: "5-Port Switch", cost: "$16" },
  { item: "USB-C Adapters (×3)", cost: "$30" },
  { item: "Ethernet Cables (×2)", cost: "$7" },
  { item: "Ethernet Extender", cost: "$5" },
];

const team = [
  {
    name: "Jayeesh Tarachandani",
    initials: "JT",
    role: "Project Manager",
    details:
      "Project coordination, LAN caching research, software configuration",
  },
  {
    name: "Rishabh Jinesh",
    initials: "RJ",
    role: "Design Engineer",
    details:
      "CAD modeling, enclosure design, hardware procurement, BOM management",
  },
  {
    name: "Jinwoo Ahn",
    initials: "JA",
    role: "Team Member",
    details:
      "Hardware compatibility testing, slide preparation, prototype assembly",
  },
];

const milestones = [
  { date: "Oct 2025", title: "Research & component selection" },
  { date: "Nov 2025", title: "CAD design & BOM finalized" },
  { date: "Jan 2026", title: "3D printing & assembly" },
  { date: "Feb 2026", title: "Software integration" },
  { date: "Mar 2026", title: "Testing & documentation" },
  { date: "May 2026", title: "Final demo" },
];

const faqs = [
  {
    question: "Do I need an internet connection?",
    answer:
      "No. PartyLAN works entirely over local wired network. Internet is only needed once to initially cache game files.",
  },
  {
    question: "How many devices can connect?",
    answer:
      "The built-in 5-port switch supports up to 4 client devices plus the Raspberry Pi server. Daisy-chain switches for more.",
  },
  {
    question: "What games are supported?",
    answer:
      "Any game available through Steam, Blizzard, or other platforms with cacheable downloads. The local caching system intercepts and stores game files.",
  },
  {
    question: "Is this a commercial product?",
    answer:
      "PartyLAN is a senior capstone project at San José State University. The design is open-source and built for under $240.",
  },
  {
    question: "What's in the box?",
    answer:
      "Raspberry Pi 5, 1TB NVMe SSD, 5-port network switch, 3 USB-C to Ethernet adapters, Ethernet cables, extender, and a custom 3D-printed enclosure.",
  },
];

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Architecture", href: "#architecture" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Specs", href: "#specs" },
  { label: "Team", href: "#team" },
  { label: "Timeline", href: "#timeline" },
  { label: "FAQ", href: "#faq" },
];

/* ──────────────────────────────────────────────
   SIMPLE SVG ICONS (inline, no library)
   ────────────────────────────────────────────── */

function IconServer({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <circle cx="6" cy="6" r="1" fill="currentColor" />
      <circle cx="6" cy="18" r="1" fill="currentColor" />
    </svg>
  );
}

function IconStorage({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3" />
      <polyline points="14 2 14 8 20 8" />
      <rect x="2" y="10" width="10" height="5" rx="1" />
    </svg>
  );
}

function IconSwitch({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="6" width="22" height="12" rx="2" />
      <line x1="6" y1="10" x2="6" y2="14" />
      <line x1="10" y1="10" x2="10" y2="14" />
      <line x1="14" y1="10" x2="14" y2="14" />
      <line x1="18" y1="10" x2="18" y2="14" />
    </svg>
  );
}

function IconLaptop({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M2 20h20" />
    </svg>
  );
}

function IconGlobe({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
    </svg>
  );
}

function IconCable({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect x="5" y="6" width="14" height="6" rx="2" />
      <path d="M12 12v4" />
      <rect x="8" y="16" width="8" height="4" rx="1" />
    </svg>
  );
}

function IconChevronDown({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

/* ──────────────────────────────────────────────
   PAGE COMPONENT
   ────────────────────────────────────────────── */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Skip link */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      {/* ───── FIXED NAV ───── */}
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-2xl border-b border-[#1e1e1e]/60"
            : "pointer-events-none opacity-0 -translate-y-1"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#hero"
            className="font-headline text-lg font-bold tracking-tight text-[#f0f0f0]"
          >
            Party
            <span className="text-[#00f0ff]">LAN</span>
          </a>
          <nav aria-label="Primary" className="hidden gap-6 text-sm text-[#888] sm:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 hover:text-[#f0f0f0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00f0ff]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main">
        {/* ───── HERO ───── */}
        <section
          id="hero"
          className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
        >
          {/* Animated orb */}
          <div className="hero-orb" aria-hidden="true" />

          {/* Headline */}
          <h1
            className="font-headline relative z-10 text-[clamp(4rem,12vw,10rem)] font-extrabold leading-[0.9] tracking-[-0.04em]"
            style={{
              backgroundImage: "linear-gradient(135deg, #00f0ff 0%, #ffffff 60%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            PartyLAN
          </h1>

          {/* Subheadline */}
          <p className="font-headline relative z-10 mt-6 text-xl font-medium tracking-wide text-[#888] sm:text-2xl">
            The Portable LAN Gaming Hub
          </p>

          {/* One-liner */}
          <p className="relative z-10 mt-4 max-w-md text-base text-[#555] sm:text-lg">
            Plug in. Cache games. Play instantly. No internet required.
          </p>

          {/* CTAs */}
          <div className="relative z-10 mt-12 flex flex-col gap-4 sm:flex-row">
            <a href="#how-it-works" className="btn-primary">
              How It Works
            </a>
            <a href="#specs" className="btn-outline">
              View Specs
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="scroll-indicator absolute bottom-10 z-10" aria-hidden="true">
            <IconChevronDown className="w-6 h-6 text-[#555]" />
          </div>
        </section>

        {/* ───── FEATURES ───── */}
        <section id="features" className="reveal px-6 py-[120px]">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-[#f0f0f0] sm:text-5xl">
              Built for LAN Parties
            </h2>
            <p className="mt-4 max-w-lg text-[#555]">
              Three things that make PartyLAN different from everything else.
            </p>

            <div className="mt-16 grid gap-6 sm:grid-cols-3">
              {features.map((f) => (
                <div key={f.title} className="glass-card p-8">
                  <h3 className="font-headline text-lg font-semibold text-[#f0f0f0]">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#888]">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── ARCHITECTURE ───── */}
        <section id="architecture" className="reveal bg-[#080808] px-6 py-[120px]">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-headline text-center text-3xl font-bold tracking-tight text-[#f0f0f0] sm:text-4xl">
              System Architecture
            </h2>
            <p className="mx-auto mt-4 max-w-md text-center text-[#555]">
              How the components connect
            </p>

            {/* Diagram */}
            <div className="mt-16 flex flex-col items-center">
              {/* WAN */}
              <div className="arch-node" style={{ opacity: 0.55 }}>
                <IconGlobe className="w-6 h-6 text-[#555]" />
                <span className="arch-node__label">Internet</span>
                <span className="arch-node__sub">Initial cache only</span>
              </div>
              <div className="arch-line-dashed" />

              {/* Extender */}
              <div className="arch-node">
                <IconCable className="w-6 h-6 text-[#888]" />
                <span className="arch-node__label">Ethernet Extender</span>
                <span className="arch-node__sub">Cat6</span>
              </div>
              <div className="arch-line-v" />

              {/* Core row: SSD + RPi */}
              <div className="arch-row-h flex items-center justify-center gap-0 w-full">
                <div className="arch-node">
                  <IconStorage className="w-6 h-6 text-[#888]" />
                  <span className="arch-node__label">1TB NVMe SSD</span>
                  <span className="arch-node__sub">Game cache</span>
                </div>
                <div className="arch-line-h" />
                <div className="arch-node arch-node--server" style={{ minWidth: 160 }}>
                  <IconServer className="w-8 h-8 text-[#00f0ff]" />
                  <span className="arch-node__label text-base">Raspberry Pi 5</span>
                  <span className="arch-node__sub">Lancache Server</span>
                </div>
              </div>
              <div className="arch-line-v" />

              {/* Switch */}
              <div className="arch-node">
                <IconSwitch className="w-6 h-6 text-[#888]" />
                <span className="arch-node__label">5-Port Gigabit Switch</span>
                <span className="arch-node__sub">1 Gbps+</span>
              </div>
              <div className="arch-line-v" />

              <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-[#555]">
                USB-C to Ethernet
              </p>

              {/* Clients */}
              <div className="arch-row-h flex flex-wrap justify-center gap-3">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="arch-node" style={{ minWidth: 90 }}>
                    <IconLaptop className="w-5 h-5 text-[#888]" />
                    <span className="arch-node__label">Client {n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───── HOW IT WORKS ───── */}
        <section id="how-it-works" className="reveal px-6 py-[120px]">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-[#f0f0f0] sm:text-5xl">
              How It Works
            </h2>
            <p className="mt-4 max-w-lg text-[#555]">
              Three steps to get the party started.
            </p>

            <div className="relative mt-16 flex flex-col gap-16">
              {/* Vertical connecting line */}
              <div className="step-line" aria-hidden="true" />

              {steps.map((step) => (
                <div key={step.number} className="relative flex items-start gap-8">
                  {/* Number */}
                  <span className="font-headline flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#1e1e1e] bg-[#111] text-xl font-bold text-[#00f0ff]">
                    {step.number}
                  </span>
                  {/* Content */}
                  <div>
                    <h3 className="font-headline text-xl font-semibold text-[#f0f0f0]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[#888] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── SPECS ───── */}
        <section id="specs" className="reveal px-6 py-[120px]">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-[#f0f0f0] sm:text-5xl">
              Tech Specs
            </h2>
            <p className="mt-4 max-w-lg text-[#555]">
              Everything inside the box.
            </p>

            {/* Specs grid */}
            <div className="mt-16 grid gap-x-16 gap-y-6 sm:grid-cols-2">
              {specs.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between border-b border-[#1e1e1e] py-4"
                >
                  <span className="text-sm text-[#555]">{s.label}</span>
                  <span className="font-semibold text-[#f0f0f0]">{s.value}</span>
                </div>
              ))}
            </div>

            {/* BOM */}
            <div className="mt-24">
              <h3 className="font-headline text-xl font-semibold text-[#f0f0f0] sm:text-2xl">
                Bill of Materials
              </h3>
              <div className="mt-8 overflow-hidden rounded-xl border border-[#1e1e1e]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#1e1e1e] bg-[#111]">
                      <th className="px-6 py-4 text-left font-medium text-[#555]">
                        Component
                      </th>
                      <th className="px-6 py-4 text-right font-medium text-[#555]">
                        Cost
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {bom.map((row) => (
                      <tr
                        key={row.item}
                        className="border-b border-[#1e1e1e]/50 transition-colors hover:bg-[#111]"
                      >
                        <td className="px-6 py-4 text-[#888]">{row.item}</td>
                        <td className="px-6 py-4 text-right text-[#f0f0f0]">
                          {row.cost}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-[#111]">
                      <td className="px-6 py-4 font-semibold text-[#f0f0f0]">
                        Total
                      </td>
                      <td className="px-6 py-4 text-right font-bold text-[#00f0ff]">
                        $239
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ───── TEAM ───── */}
        <section id="team" className="reveal px-6 py-[120px]">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-headline text-center text-3xl font-bold tracking-tight text-[#f0f0f0] sm:text-4xl">
              Meet the Team
            </h2>
            <p className="mx-auto mt-4 max-w-md text-center text-[#555]">
              The people behind PartyLAN.
            </p>

            <div className="mt-16 grid gap-6 sm:grid-cols-3">
              {team.map((member) => (
                <div key={member.name} className="glass-card flex flex-col items-center px-6 py-10 text-center">
                  {/* Avatar */}
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#00f0ff]/30 bg-[#0a0a0a]">
                    <span className="font-headline text-xl font-bold text-[#00f0ff]">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="font-headline mt-6 text-lg font-semibold text-[#f0f0f0]">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#00f0ff]">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#888]">
                    {member.details}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-12 text-center text-sm text-[#555]">
              Advised by{" "}
              <span className="font-medium text-[#888]">Dr. Nik Tehrani</span>
              {" "}— Department of Engineering Technology, San Jos&eacute; State
              University
            </p>
          </div>
        </section>

        {/* ───── TIMELINE ───── */}
        <section id="timeline" className="reveal px-6 py-[120px]">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-headline text-center text-3xl font-bold tracking-tight text-[#f0f0f0] sm:text-4xl">
              Project Timeline
            </h2>
            <p className="mx-auto mt-4 max-w-md text-center text-[#555]">
              Key milestones from concept to demo.
            </p>

            <div className="relative mt-16">
              {/* Horizontal track (desktop) */}
              <div className="timeline-track hidden sm:block" aria-hidden="true" />

              <div className="grid gap-10 sm:grid-cols-6 sm:gap-4">
                {milestones.map((m, i) => (
                  <div
                    key={m.date}
                    className="relative flex flex-col items-center text-center"
                  >
                    <div className="timeline-dot-ring">
                      <div className="timeline-dot" />
                    </div>
                    {/* Vertical connector mobile */}
                    {i < milestones.length - 1 && (
                      <div
                        className="h-10 w-[1px] bg-gradient-to-b from-[#00f0ff]/20 to-transparent sm:hidden"
                        aria-hidden="true"
                      />
                    )}
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#00f0ff]">
                      {m.date}
                    </p>
                    <p className="mt-1 text-sm leading-snug text-[#888]">
                      {m.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───── FAQ ───── */}
        <section id="faq" className="reveal px-6 py-[120px]">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-[#f0f0f0] sm:text-5xl">
              FAQ
            </h2>
            <p className="mt-4 text-[#555]">
              Common questions, answered.
            </p>

            <div className="mt-12">
              {faqs.map((faq) => (
                <details key={faq.question} className="faq-item">
                  <summary>
                    {faq.question}
                    <span className="faq-toggle" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="pb-6 text-[#888] leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ───── FOOTER ───── */}
      <footer role="contentinfo" className="border-t border-[#1e1e1e] px-6 py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8">
          <nav
            aria-label="Footer"
            className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-[#555]"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-[#888] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00f0ff]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/Jayeesh27/partylan"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#888] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00f0ff]"
            >
              GitHub
            </a>
          </nav>
          <p className="text-sm text-[#333]">
            &copy; 2026 PartyLAN — SJSU Senior Capstone Project
          </p>
        </div>
      </footer>
    </>
  );
}
