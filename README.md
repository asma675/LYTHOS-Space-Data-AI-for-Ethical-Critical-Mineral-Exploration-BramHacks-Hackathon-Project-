# LYTHOS — BramHacks (Next.js + Tailwind + Leaflet)
LYTHOS is a space-data powered sustainability intelligence platform designed to help Canada locate critical mineral zones for the clean energy transition — without harming land, water, wildlife, or Indigenous communities.

Instead of extraction-first exploration, LYTHOS shifts mining decisions toward protection-first siting using early red-flag detection, ethical screening, and ecological sensitivity overlays.

## Quickstart
```bash
npm i
npm run dev
```

## Deploy to Vercel
- Push to GitHub
- Import in Vercel
- Build command: `next build`
- Ensure Node 18+

## Edit the Map
- `components/Map.tsx` uses `react-leaflet` with 3 overlay placeholders.
- Replace the `TileLayer url` values with your Sentinel‑2 / GEDI / GRACE‑FO WMS/XYZ providers or custom tiles.
- Center defaults to Sudbury (Ontario). Change `center` prop for NWT focus.
LYTHOS — Space Data + AI for Ethical Critical Mineral Siting

Hackathon: BramHacks Sustainability Challenge
Score: 95%
Build Time: < 2 days

## 🌍 Mission

Protect land, people, water, and ecosystems before disturbance — supporting a just, community-first clean energy transition.

## 🚀 How LYTHOS Works

We fuse three satellite Earth Observation sources into a siting intelligence stack:

Satellite Source	What it provides	Why it matters
Sentinel-2	Spectral mineral cues + surface reflectance	Early mineralization hinting + surface condition
GEDI	Forest canopy height + biomass proxies	Biodiversity sensitivity & habitat fragmentation risk
GRACE-FO	Groundwater anomaly stress	Avoids high water stress + watershed risk

Live map layers are visualized with Leaflet, WMTS tiles, and OSM base layers.

## 🧭 Demo Regions

Northern Ontario Nickel Belt — Sudbury / Timmins

NWT Lithium Potential — permafrost + caribou corridor sensitivity

These regional prototypes demonstrate how mineral opportunities + environmental guardrails can co-exist.

##🧑‍🤝‍🧑 Social & Policy Centered

LYTHOS places Indigenous rights, ecological protection, water safety, and community impact ahead of extraction economics.
Cleaner energy cannot repeat historical harm; LYTHOS prevents it before exploration even begins.

##💡 Impact

Reduces wasted exploration spend by flagging no-go zones early

Supports ESG compliance & responsible capital allocation

Strengthens climate justice + long-term planetary resilience

Built end-to-end under extreme time pressure → sharpened rapid prototyping, time management, and problem-solving skills

🛠️ Tech Stack

Leaflet.js (map layers / UI)

NASA GIBS WMTS, ESA Copernicus Sentinel-2, NASA GRACE-FO, NASA GEDI

JavaScript / Python preprocessing

OpenStreetMap base tiles

📌 Future Roadmap

Seasonal windows + permafrost physical stability modeling

Indigenous & science advisory collaboration panel

ESG screening API for investors / gov planning

Policy tooling for provincial & federal level decision support

Author

Asma Ahmed — Product Lead / Data + AI Engineer
