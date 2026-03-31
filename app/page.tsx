"use client";

import { useEffect, useState } from "react";

// ─── PartyLAN Landing Page ───
// Built with Tailwind CSS utility classes — no extra packages required.

/* ──────────────────────────────────────────────
   DATA — edit the arrays below to update content
   ────────────────────────────────────────────── */

const features = [
  {
    icon: "💾",
    title: "Local Game Caching",
    description:
      "Cache Steam, Blizzard, and other game files locally. Multiple users download simultaneously at LAN speed.",
  },
  {
    icon: "⚡",
    title: "Zero Latency",
    description:
      "Wired USB-C and Ethernet connections eliminate Wi-Fi lag. Feel every move in real time.",
  },
  {
    icon: "🔌",
    title: "No Internet Needed",
    description:
      "PartyLAN runs entirely on local network. No external connectivity required for multiplayer.",
  },
  {
    icon: "🕹️",
    title: "Plug & Play Setup",
    description:
      "Connect the hub, plug in your devices, and start gaming. No networking knowledge required.",
  },
  {
    icon: "📦",
    title: "Portable Design",
    description:
      "Custom 3D-printed enclosure with internal power management and organized cable routing. Take it anywhere.",
  },
  {
    icon: "💰",
    title: "Cost Effective",
    description:
      "Full prototype under $240. Open-source software stack with zero licensing fees.",
  },
];

const steps = [
  {
    number: "01",
    title: "Power Up the Hub",
    description:
      "Plug in the PartyLAN device. The Raspberry Pi 5 boots up and initializes the local caching server and network switch.",
  },
  {
    number: "02",
    title: "Connect Your Devices",
    description:
      "Plug USB-C to Ethernet adapters into your laptops/PCs. The 5-port switch handles up to 4 client devices simultaneously.",
  },
  {
    number: "03",
    title: "Cache & Play",
    description:
      "Games are cached locally on the 1TB NVMe SSD. Download once, share across all connected devices at gigabit speeds.",
  },
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

const specs = [
  { label: "Processor", value: "Raspberry Pi 5", icon: "🧠" },
  { label: "Storage", value: "1TB NVMe SSD", icon: "💾" },
  { label: "Network Switch", value: "5-Port Gigabit Ethernet", icon: "🔀" },
  { label: "Client Adapters", value: "3× USB-C to Ethernet", icon: "🔌" },
  { label: "Cabling", value: "Cat6 Ethernet (×2) + Extender", icon: "🔗" },
  { label: "Enclosure", value: "Custom 3D-printed (PLA)", icon: "📦" },
  { label: "Software", value: "Open-source caching stack (Lancache)", icon: "🖥️" },
  { label: "Target Speed", value: "1 Gbps+ LAN transfers", icon: "⚡" },
  { label: "Power", value: "Internal power management", icon: "🔋" },
  { label: "Prototype Cost", value: "$239", icon: "💰" },
];

const team = [
  {
    name: "Jayeesh Tarachandani",
    initials: "JT",
    role: "Project Manager",
    details:
      "Project coordination, LAN caching research, software configuration, schedule management",
  },
  {
    name: "Rishabh Jinesh",
    initials: "RJ",
    role: "Design Engineer",
    details:
      "CAD modeling (SolidWorks), enclosure design, hardware procurement, BOM management",
  },
  {
    name: "Jinwoo Ahn",
    initials: "JA",
    role: "Team Member",
    details:
      "Hardware compatibility testing, slide preparation, prototype assembly support",
  },
];

/* ──────────────────────────────
   PAGE COMPONENT
   ────────────────────────────── */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // ── Navbar scroll visibility ──
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });

    // ── Intersection Observer for fade-in-up ──
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".fade-in-section").forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* ───── FIXED NAVBAR ───── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-neutral-950/70 backdrop-blur-xl border-b border-neutral-800/60 shadow-lg shadow-black/20"
            : "pointer-events-none opacity-0 -translate-y-2"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#hero" className="text-lg font-bold tracking-tight">
            🎮 Party
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              LAN
            </span>
          </a>
          <nav className="hidden gap-5 text-sm text-neutral-400 sm:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#specs" className="transition hover:text-white">Specs</a>
            <a href="#how-it-works" className="transition hover:text-white">How It Works</a>
            <a href="#team" className="transition hover:text-white">Team</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </nav>
        </div>
      </header>
      {/* ───── HERO SECTION ───── */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center px-6 pt-32 pb-24 text-center overflow-hidden"
      >
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[480px] w-[480px] rounded-full bg-purple-600/20 blur-[120px]"
        />

        {/* Headline */}
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          The Portable{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            LAN Gaming
          </span>{" "}
          Hub
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-xl text-lg text-neutral-400 sm:text-xl">
          Plug in. Cache games. Play instantly. A compact, Raspberry Pi-powered
          hub that brings high-speed LAN gaming anywhere — no internet required.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#how-it-works"
            className="rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-3 font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:opacity-90"
          >
            See How It Works
          </a>
          <a
            href="#specs"
            className="rounded-full border border-neutral-700 px-8 py-3 font-semibold text-neutral-300 transition hover:border-neutral-500 hover:text-white"
          >
            View Specs
          </a>
        </div>
      </section>

      {/* ───── FEATURES SECTION ───── */}
      <section id="features" className="fade-in-section px-6 py-24">
        <div className="mx-auto max-w-6xl">
          {/* Section heading */}
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Why{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              PartyLAN
            </span>
            ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-400">
            Everything you need to host the perfect LAN party — in one compact device.
          </p>

          {/* Feature cards grid */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 transition hover:border-purple-500/40 hover:bg-neutral-900"
              >
                {/* Icon */}
                <span className="text-4xl">{feature.icon}</span>

                {/* Title */}
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── SYSTEM ARCHITECTURE SECTION ───── */}
      <section id="architecture" className="fade-in-section px-6 py-24">
        <div className="mx-auto max-w-4xl">
          {/* Section heading */}
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            System{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Architecture
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-neutral-400">
            How the components connect
          </p>

          {/* Diagram */}
          <div className="mt-16 flex flex-col items-center gap-0">
            {/* Row 1: Optional WAN */}
            <div className="arch-node" style={{ opacity: 0.6 }}>
              <span className="arch-node__icon">🌐</span>
              <span className="arch-node__label">Internet (WAN)</span>
              <span className="arch-node__sub">Initial cache download only</span>
            </div>
            <div className="arch-connector--v arch-connector--dashed" style={{ height: 32, background: "repeating-linear-gradient(to bottom, #a855f7 0px, #a855f7 6px, transparent 6px, transparent 12px)", opacity: 0.3 }} />

            {/* Row 2: Ethernet Extender */}
            <div className="arch-node">
              <span className="arch-node__icon">🔗</span>
              <span className="arch-node__label">Ethernet Extender</span>
              <span className="arch-node__sub">Cat6 cable</span>
            </div>
            <div className="arch-connector--v" />

            {/* Row 3: Core — SSD + RPi5 side by side */}
            <div className="arch-row flex items-center justify-center gap-0" style={{ width: "100%" }}>
              <div className="arch-node">
                <span className="arch-node__icon">💾</span>
                <span className="arch-node__label">1TB NVMe SSD</span>
                <span className="arch-node__sub">Game cache storage</span>
              </div>
              <div className="arch-connector--h" />
              <div className="arch-node arch-node--server" style={{ minWidth: 160 }}>
                <span className="arch-node__icon text-4xl">🖥️</span>
                <span className="arch-node__label text-base">Raspberry Pi 5</span>
                <span className="arch-node__sub">Lancache Server</span>
              </div>
            </div>
            <div className="arch-connector--v" />

            {/* Row 4: Switch */}
            <div className="arch-node">
              <span className="arch-node__icon">🔀</span>
              <span className="arch-node__label">5-Port Gigabit Switch</span>
              <span className="arch-node__sub">1 Gbps+ throughput</span>
            </div>
            <div className="arch-connector--v" />

            {/* Row 5: Clients label */}
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-neutral-500">
              USB-C → Ethernet Adapters
            </p>

            {/* Row 6: Client devices */}
            <div className="arch-row flex flex-wrap items-start justify-center gap-4">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="arch-node" style={{ minWidth: 100 }}>
                  <span className="arch-node__icon">💻</span>
                  <span className="arch-node__label">Client {n}</span>
                  <span className="arch-node__sub">Laptop / PC</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── HOW IT WORKS SECTION ───── */}
      <section id="how-it-works" className="fade-in-section px-6 py-24">
        <div className="mx-auto max-w-4xl">
          {/* Section heading */}
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-neutral-400">
            Three simple steps to get the party started.
          </p>

          {/* Steps */}
          <div className="mt-16 flex flex-col gap-12">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex items-start gap-6"
              >
                {/* Step number */}
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 text-xl font-bold">
                  {step.number}
                </span>

                {/* Step content */}
                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-neutral-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── TECH SPECS SECTION ───── */}
      <section id="specs" className="fade-in-section px-6 py-24">
        <div className="mx-auto max-w-5xl">
          {/* Section heading */}
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Tech{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Specs
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-neutral-400">
            Everything inside the box — engineered for speed, portability, and
            simplicity.
          </p>

          {/* Spec cards grid */}
          <div className="mt-16 grid gap-4 sm:grid-cols-2">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="group relative rounded-2xl p-[1px] transition-all duration-300 hover:shadow-[0_0_24px_rgba(168,85,247,0.15)]"
              >
                {/* Gradient border layer */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-800 transition-all duration-300 group-hover:from-purple-500/50 group-hover:to-cyan-500/50" />

                {/* Card content */}
                <div className="relative flex items-center gap-4 rounded-2xl bg-neutral-900/95 px-5 py-4">
                  <span className="text-2xl">{spec.icon}</span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                      {spec.label}
                    </p>
                    <p className="text-base font-semibold text-neutral-100">
                      {spec.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── MEET THE TEAM SECTION ───── */}
      <section id="team" className="fade-in-section px-6 py-24">
        <div className="mx-auto max-w-5xl">
          {/* Section heading */}
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Meet the{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-neutral-400">
            The people behind PartyLAN.
          </p>

          {/* Team cards */}
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="group relative rounded-2xl p-[1px] transition-all duration-300 hover:shadow-[0_0_24px_rgba(168,85,247,0.15)]"
              >
                {/* Gradient border layer */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-800 transition-all duration-300 group-hover:from-purple-500/50 group-hover:to-cyan-500/50" />

                {/* Card content */}
                <div className="relative flex flex-col items-center rounded-2xl bg-neutral-900/95 px-6 py-8 text-center">
                  {/* Avatar circle with initials */}
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-cyan-500">
                    <span className="text-2xl font-bold text-white">
                      {member.initials}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                    {member.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Advisor credit */}
          <p className="mt-12 text-center text-sm text-neutral-500">
            Advised by{" "}
            <span className="font-medium text-neutral-300">
              Dr. Nik Tehrani
            </span>{" "}
            — Department of Engineering Technology, San Jos&eacute; State
            University
          </p>
        </div>
      </section>

      {/* ───── FAQ SECTION ───── */}
      <section id="faq" className="fade-in-section px-6 py-24">
        <div className="mx-auto max-w-3xl">
          {/* Section heading */}
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-neutral-400">
            Got questions? We&apos;ve got answers.
          </p>

          {/* Accordion — uses native HTML <details> so no JS is needed */}
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-neutral-800 bg-neutral-900/60 px-6 py-4 transition-colors open:border-purple-500/40 open:bg-neutral-900"
              >
                <summary className="flex cursor-pointer items-center justify-between text-lg font-medium marker:[content:'']">
                  {faq.question}

                  {/* Chevron that rotates when open */}
                  <span className="ml-4 shrink-0 text-neutral-500 transition-transform group-open:rotate-45">
                    ＋
                  </span>
                </summary>

                <p className="mt-4 text-neutral-400 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FOOTER ───── */}
      <footer className="border-t border-neutral-800 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo / Brand */}
          <span className="text-lg font-bold tracking-tight">
            🎮 Party
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              LAN
            </span>
          </span>

          {/* Links */}
          <nav className="flex gap-6 text-sm text-neutral-400">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#how-it-works" className="transition hover:text-white">
              How It Works
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
            <a
              href="https://github.com/Jayeesh27/partylan"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-neutral-500">
            &copy; 2026 PartyLAN — SJSU Senior Capstone Project
          </p>
        </div>
      </footer>
    </div>
  );
}
