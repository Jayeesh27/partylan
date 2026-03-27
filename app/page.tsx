// ─── PartyLAN Landing Page ───
// This is the only file you need to edit.
// It contains five sections: Hero, Features, How It Works, FAQ, and Footer.
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

/* ──────────────────────────────
   PAGE COMPONENT
   ────────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
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
      <section id="features" className="px-6 py-24">
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

      {/* ───── HOW IT WORKS SECTION ───── */}
      <section id="how-it-works" className="px-6 py-24">
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

      {/* ───── FAQ SECTION ───── */}
      <section id="faq" className="px-6 py-24">
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
              href="https://github.com"
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
