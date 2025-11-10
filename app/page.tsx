'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Background from '@/components/Background';
import Particles from '@/components/Particles'; // keep your existing particles

// client-side Map
const Map = dynamic(() => import('@/components/Map'), { ssr: false });

/* ---------- small helpers ---------- */
const Logo = () => (
    <div className="flex items-center gap-2">
        <span className="h-8 w-8 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-600 shadow-md" />
        <span className="font-bold tracking-wide">LYTHOS</span>
    </div>
);

const Nav = () => (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
            <Logo />
            <nav className="hidden items-center gap-6 text-sm md:flex">
                <a href="#home" className="hover:text-emerald-400">Home</a>
                <a href="#datasources" className="hover:text-emerald-400">Space Data</a>
                <a href="#regions" className="hover:text-emerald-400">Regions (A + B)</a>
                <a href="#policy" className="hover:text-emerald-400">Policy & Justice</a>
                {/* NEW: Know Your Carbon link */}
                <a href="#carbon" className="hover:text-emerald-400">Know Your Carbon</a>
                <a href="#roadmap" className="hover:text-emerald-400">Roadmap</a>
                <a href="#resources" className="hover:text-emerald-400">Resources</a>
                <a href="/team" className="hover:text-emerald-400">Team</a>
                <a
                    href="#contact"
                    className="rounded-lg bg-emerald-600 px-3 py-1.5 font-medium text-white shadow hover:bg-emerald-700"
                >
                    Try Demo
                </a>
            </nav>
        </div>
    </header>
);

const Section = ({
    id,
    eyebrow,
    title,
    subtitle,
    children,
}: {
    id?: string;
    eyebrow?: React.ReactNode;
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    children?: React.ReactNode;
}) => (
    <section id={id} className="relative scroll-mt-24 py-20">
        {/* soft glow */}
        <div className="absolute inset-0 -z-10 opacity-30 [mask-image:radial-gradient(50%_50%_at_50%_0%,black,transparent)]">
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-r from-emerald-900/40 via-cyan-900/40 to-sky-900/40 blur-2xl" />
        </div>
        <div className="mx-auto max-w-6xl px-4">
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                {eyebrow && (
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                        {eyebrow}
                    </p>
                )}
                {title && <h2 className="text-2xl font-semibold leading-tight md:text-3xl">{title}</h2>}
                {subtitle && <p className="mt-3 max-w-3xl text-sm text-neutral-300 md:text-base">{subtitle}</p>}
            </motion.div>
            {children}
        </div>
    </section>
);

const Card = ({ children }: { children: React.ReactNode }) => (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-4 shadow-sm transition hover:shadow-md">
        {children}
    </div>
);

const DSBadge = ({ children }: { children: React.ReactNode }) => (
    <span className="rounded-full border border-emerald-700 bg-emerald-900/40 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">
        {children}
    </span>
);

const SourceLine = ({ children }: { children: React.ReactNode }) => (
    <p className="mt-2 text-[11px] leading-snug text-neutral-400">{children}</p>
);

/* =========================================================
   “Know your carbon” hero (with particles) — goes AFTER Policy
   ========================================================= */
const CarbonHero = () => (
    <section id="carbon" className="relative border-b" aria-label="Know your carbon">
        {/* background */}
        <div className="absolute inset-0 -z-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.06)_0%,transparent_45%)]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/65 to-black" />
            <Particles className="h-full w-full" />
        </div>

        {/* foreground */}
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
            <span className="mb-4 inline-flex items-center rounded-full border border-yellow-300/40 bg-yellow-400/10 px-3 py-1 text-xs text-yellow-200">
                Climate Rules for Businesses
            </span>

            <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-yellow-300 sm:text-5xl">
                Know your carbon
            </h1>

            <p className="mb-6 max-w-3xl text-base text-neutral-300 sm:text-lg">
                We turn your business data into verified carbon insights, connect you with
                trusted credits, and give you a clear plan to cut emissions and report confidently.
            </p>

            <div className="mb-6 flex flex-wrap gap-3">
                <Link
                    href="/app"
                    className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-emerald-700"
                >
                    Estimate my footprint
                </Link>
                <a
                    href="#how"
                    className="rounded-lg border border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-200 hover:bg-neutral-900"
                >
                    See how it works
                </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-neutral-400">
                <span>GHG Protocol aligned</span>
                <span>Country-aware factors</span>
                <span>Audit-ready exports</span>
            </div>
        </div>
    </section>
);

/* =========================================================
   “How it works” (matches your screenshot)
   ========================================================= */
const HowItWorks = () => (
    <Section id="how" eyebrow="How it works" title="How it works">
        <ol className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
                {
                    step: 'Connect data',
                    copy:
                        'Upload CSVs or connect ERP/procurement. We normalize to GHG Protocol categories.',
                },
                {
                    step: 'Get your footprint',
                    copy:
                        'Automatic Scope 1, 2 (market/location), and 3 breakdowns plus intensity metrics.',
                },
                {
                    step: 'Unlock credits',
                    copy:
                        'Match to government-recognized credit types and get a reduction roadmap.',
                },
            ].map((s, i) => (
                <li key={s.step} className="rounded-xl border border-neutral-800 p-6">
                    <div className="flex size-8 items-center justify-center rounded-full border text-sm">
                        {i + 1}
                    </div>
                    <p className="mt-4 font-medium">{s.step}</p>
                    <p className="mt-2 text-sm text-neutral-400">{s.copy}</p>
                </li>
            ))}
        </ol>
    </Section>
);

/* ---------- Home hero with image rows exactly as requested ---------- */
const HomeHero = () => (
    <>
        {/* Top row: sat, map, airock */}
        <div className="mx-auto mt-6 max-w-5xl px-6">
            <div className="grid grid-cols-3 gap-3">
                {[
                    { src: '/homepagepics/sat.png', alt: 'Satellite view' },
                    { src: '/homepagepics/map.png', alt: 'Map tiles' },
                    { src: '/homepagepics/airock.png', alt: 'Rock / minerals' },
                ].map((img) => (
                    <div
                        key={img.src}
                        className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900"
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="h-28 w-full object-cover md:h-32 lg:h-36"
                        />
                    </div>
                ))}
            </div>
        </div>

        {/* Brand hero */}
        <section id="home" className="px-6 pb-4 pt-10 text-center">
            <h1 className="mb-2 text-7xl font-extrabold tracking-tight text-emerald-400">
                LYTHOS
            </h1>
            <p className="text-2xl font-medium text-neutral-200">
                Measure • Reduce • Protect — Powered by Satellites + AI.
            </p>
        </section>

        {/* Bottom row: animal, deer, forestry */}
        <div className="mx-auto mb-6 max-w-5xl px-6">
            <div className="grid grid-cols-3 gap-3">
                {[
                    { src: '/homepagepics/animal.png', alt: 'Wildlife' },
                    { src: '/homepagepics/deer.png', alt: 'Deer habitat' },
                    { src: '/homepagepics/forestry.jpg', alt: 'Forestry / canopy' },
                ].map((img) => (
                    <div
                        key={img.src}
                        className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900"
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="h-28 w-full object-cover md:h-32 lg:h-36"
                        />
                    </div>
                ))}
            </div>
        </div>

        {/* Landing block */}
        <Section
            id="home-landing"
            eyebrow="Landing"
            title={<>Space data + AI to protect land, water, and communities</>}
            subtitle="LYTHOS helps Canada locate critical minerals for the clean energy transition while minimizing environmental harm — with Indigenous rights, water, and biodiversity at the center."
        >
            <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                        <DSBadge>Sentinel-2 Spectral Mineral Cues</DSBadge>
                        <DSBadge>GEDI Forest Structure</DSBadge>
                        <DSBadge>GRACE-FO Groundwater Stress</DSBadge>
                        <DSBadge>Ethical Siting</DSBadge>
                    </div>
                    <p className="text-neutral-300">
                        We identify <strong>low-impact</strong> exploration zones and highlight{' '}
                        <strong>red-flag</strong> areas where mining should not proceed — before
                        damage happens. This shifts exploration from extraction-first to{' '}
                        <strong>protection-first</strong>.
                    </p>
                    <div className="flex gap-3">
                        <a
                            href="#regions"
                            className="rounded-xl bg-emerald-600 px-4 py-2 text-white shadow hover:bg-emerald-700"
                        >
                            Open Demo
                        </a>
                        <a
                            href="#policy"
                            className="rounded-xl border border-emerald-900 px-4 py-2 text-emerald-300 hover:bg-emerald-950/40"
                        >
                            Read Policy & Justice
                        </a>
                    </div>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-300">
                        <li>Protect land & water before disturbance</li>
                        <li>Support a just, community-first energy transition</li>
                        <li>Cut wasted exploration spend with smarter siting</li>
                    </ul>
                </div>

                <div className="relative">
                    <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl border border-neutral-800">
                        {/* Ontario default */}
                        <Map center={[46.49, -81.01]} zoom={6} />
                    </div>
                </div>
            </div>
        </Section>
    </>
);

/* ---------- Space data, Regions, Policy, Roadmap, Resources ---------- */

const DataSources = () => (
    <Section
        id="datasources"
        eyebrow="Space Data"
        title="Space capabilities powering LYTHOS"
        subtitle="All three sources are satellite-derived and publicly documented. We combine them into a siting intelligence stack that centers ecological protection and community resilience."
    >
        <div className="grid gap-4 md:grid-cols-3">
            <Card>
                <h3 className="text-lg font-semibold">Sentinel-2</h3>
                <p className="mt-1 text-sm text-neutral-300">
                    Multispectral imagery supports spectral indices that hint at mineralization patterns and land surface condition.
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-300">
                    <li>10–20m resolution</li>
                    <li>Vegetation & surface reflectance cues</li>
                    <li>Change detection for disturbance</li>
                </ul>
            </Card>
            <Card>
                <h3 className="text-lg font-semibold">GEDI</h3>
                <p className="mt-1 text-sm text-neutral-300">
                    Spaceborne LiDAR estimating forest structure and canopy height to assess biodiversity sensitivity and fragmentation risk.
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-300">
                    <li>Canopy height & biomass proxies</li>
                    <li>Habitat integrity overlays</li>
                    <li>Seasonal sensitivity windows</li>
                </ul>
            </Card>
            <Card>
                <h3 className="text-lg font-semibold">GRACE-FO</h3>
                <p className="mt-1 text-sm text-neutral-300">
                    Gravity missions indicate groundwater storage anomalies to avoid high water-stress basins and protect watersheds.
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-300">
                    <li>Water stress & drought signals</li>
                    <li>Watershed risk screening</li>
                    <li>Do-not-disturb flags</li>
                </ul>
            </Card>
        </div>
    </Section>
);

const Regions = () => (
    <Section
        id="regions"
        eyebrow="Demo Regions"
        title="A + B — Northern Ontario Nickel & NWT Lithium"
        subtitle="Live maps using official NASA/ESA satellite tiles so judges can see true space-data capability."
    >
        <div className="grid gap-6 md:grid-cols-2">
            {/* A) Ontario */}
            <Card>
                <h4 className="font-semibold">A) Northern Ontario Nickel Belt</h4>
                <p className="mt-1 text-sm text-neutral-300">
                    Sudbury / Timmins corridor. Nickel for EV batteries with strict protection for lakes, wetlands, and nearby
                    communities.
                </p>
                <div className="mt-3 aspect-[16/10] overflow-hidden rounded-xl border border-neutral-800">
                    <Map center={[46.49, -81.01]} zoom={6} />
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-300">
                    <DSBadge>Nickel cues</DSBadge>
                    <DSBadge>Wetlands buffer</DSBadge>
                    <DSBadge>Watershed risk</DSBadge>
                    <DSBadge>Community setback</DSBadge>
                </div>
                <SourceLine>
                    Source layers: <a className="underline" href="https://gibs.earthdata.nasa.gov/" target="_blank">NASA GIBS Sentinel-2 L2A True Color (WMTS)</a>;
                    alternate Sentinel-2 view via <a className="underline" href="https://dataspace.copernicus.eu/" target="_blank">ESA Copernicus</a>. Base map © OpenStreetMap.
                </SourceLine>
            </Card>

            {/* B) NWT */}
            <Card>
                <h4 className="font-semibold">B) Northwest Territories Lithium Zones</h4>
                <p className="mt-1 text-sm text-neutral-300">
                    Lithium potential with strong safeguards for permafrost stability, caribou ranges, and water systems.
                </p>
                <div className="mt-3 aspect-[16/10] overflow-hidden rounded-xl border border-neutral-800">
                    <Map center={[62.45, -114.38]} zoom={5} />
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-300">
                    <DSBadge>Lithium cues</DSBadge>
                    <DSBadge>Permafrost risk</DSBadge>
                    <DSBadge>Migration corridors</DSBadge>
                    <DSBadge>Groundwater flags</DSBadge>
                </div>
                <SourceLine>
                    Source layers: <a className="underline" href="https://gibs.earthdata.nasa.gov/" target="_blank">NASA GIBS Sentinel-2 L2A True Color (WMTS)</a> + L1C;
                    Arctic overlays planned via <a className="underline" href="https://www.earthdata.nasa.gov/" target="_blank">NASA Earthdata</a> and{' '}
                    <a className="underline" href="https://eodms-sgdot.nrcan-rncan.gc.ca/" target="_blank">NRCan EODMS</a>.
                </SourceLine>
            </Card>
        </div>
    </Section>
);

const Policy = () => (
    <Section
        id="policy"
        eyebrow="Policy & Justice"
        title="Protection-first siting — climate justice and Indigenous rights"
        subtitle="We do not accelerate extraction. We transform where decisions start: avoid harm first, with a duty to consult and a restorative approach."
    >
        <div className="grid gap-4 md:grid-cols-2">
            <Card>
                <h5 className="font-semibold">Why this matters</h5>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-300">
                    <li>Historic extraction harmed land, water, and communities — often imposed on Indigenous territories.</li>
                    <li>Clean energy cannot repeat the same logic. LYTHOS centers ecosystems and people first.</li>
                    <li>Space data enables early red-flag detection and smarter, consent-aligned planning.</li>
                </ul>
            </Card>
            <Card>
                <h5 className="font-semibold">Budget & impact</h5>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-300">
                    <li>Reduce wasted exploration spend by avoiding no-go zones early.</li>
                    <li>Increase ESG trust and policy compliance for public + private actors.</li>
                    <li>Support Canada’s net-zero path while protecting watersheds and habitats.</li>
                </ul>
            </Card>
        </div>
        <div className="mt-4 rounded-xl border border-emerald-900 bg-emerald-950/40 p-4 text-sm text-emerald-200">
            <p className="font-medium">Community commitment</p>
            <p className="mt-1">
                We use inclusive language (First Nations / Indigenous communities), emphasize partnership and consent, and design
                LYTHOS as protection intelligence — not extraction tooling.
            </p>
        </div>
    </Section>
);

const Roadmap = () => (
    <Section id="roadmap" eyebrow="Roadmap" title="From BramHacks demo to planetary protection standard">
        <ol className="relative ml-3 border-l border-neutral-800 pl-6">
            {[
                {
                    phase: 'Phase 1 — Now → 3 months',
                    pts: ['Fuse Sentinel-2 + GEDI + GRACE-FO baselines', 'Ship A+B region demo with risk overlays', 'Release ethical siting checklist for teams'],
                },
                {
                    phase: 'Phase 2 — 3 → 12 months',
                    pts: ['Add seasonal windows & permafrost stability', 'Form Indigenous & science advisory panel', 'Pilot with universities / nonprofits'],
                },
                {
                    phase: 'Phase 3 — 12+ months',
                    pts: ['Policy tool for provincial & federal planning', 'ESG screening API for investors', 'Global export to other critical-mineral regions'],
                },
            ].map((step, i) => (
                <li key={i} className="mb-8">
                    <span className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full border-2 border-emerald-600 bg-black" />
                    <h6 className="font-semibold">{step.phase}</h6>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-300">
                        {step.pts.map((p, j) => (
                            <li key={j}>{p}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ol>
    </Section>
);

const Resources = () => (
    <Section id="resources" eyebrow="General Resources" title="Credible space + Canada geospatial sources">
        <ul className="grid gap-3 text-sm md:grid-cols-2">
            <li>• <a className="underline" href="https://gibs.earthdata.nasa.gov/" target="_blank">NASA GIBS</a> – global WMTS tiles incl. Sentinel-2.</li>
            <li>• <a className="underline" href="https://worldview.earthdata.nasa.gov/" target="_blank">NASA Worldview</a> – quick layer exploration.</li>
            <li>• <a className="underline" href="https://dataspace.copernicus.eu/" target="_blank">ESA Copernicus Open Access</a> – Sentinel data.</li>
            <li>• <a className="underline" href="https://open.canada.ca/en/open-data" target="_blank">Canada Open Data</a> – federal datasets.</li>
            <li>• <a className="underline" href="https://eodms-sgdot.nrcan-rncan.gc.ca/" target="_blank">NRCan EODMS</a> – Canadian EO imagery (RADARSAT, etc.).</li>
            <li>• <a className="underline" href="https://geohub.brampton.ca/" target="_blank">Brampton GeoHub</a> – official city data portal.</li>
        </ul>
    </Section>
);

const Footer = () => (
    <footer id="contact" className="border-t border-neutral-800 bg-black">
        <div className="mx-auto max-w-7xl px-4 py-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <Logo />
                <div className="text-sm text-neutral-300">
                    Built at <span className="font-medium">BramHacks</span> — Asma Ahmed · LYTHOS · A+B Regions (Northern Ontario Nickel & NWT Lithium)
                </div>
            </div>
        </div>
    </footer>
);

/* ---------- page ---------- */
export default function Page() {
    return (
        <div className="relative min-h-screen bg-black text-white">
            {/* global starfield */}
            <Background
                colors={['#ffffff', '#e5fff4', '#bdeedd']}
                density={1100}
                spread={46}
                speed={0.1}
                alpha
                className="[mask-image:radial-gradient(70%_70%_at_50%_30%,black,transparent)]"
            />

            <Nav />
            <main>
                <HomeHero />
                <DataSources />
                <Regions />
                <Policy />

                {/* Know your carbon is placed AFTER Policy */}
                <CarbonHero />
                <HowItWorks />

                <Roadmap />
                <Resources />
            </main>

            <Footer />
        </div>
    );
}
