'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// --- react-leaflet pieces loaded dynamically to avoid SSR issues ---
const MapContainer = dynamic(
    () => import('react-leaflet').then(m => m.MapContainer),
    { ssr: false }
);
const TileLayer = dynamic(
    () => import('react-leaflet').then(m => m.TileLayer),
    { ssr: false }
);
const LayersControl = dynamic(
    () => import('react-leaflet').then(m => m.LayersControl),
    { ssr: false }
);
// IMPORTANT: import the subcomponents directly:
const LCOverlay = dynamic(
    () =>
        import('react-leaflet').then(
            // @ts-ignore
            (m) => (m.LayersControl as any).Overlay
        ),
    { ssr: false }
);
const LCBaseLayer = dynamic(
    () =>
        import('react-leaflet').then(
            // @ts-ignore
            (m) => (m.LayersControl as any).BaseLayer
        ),
    { ssr: false }
);

const CircleMarker = dynamic(
    () => import('react-leaflet').then(m => m.CircleMarker),
    { ssr: false }
);
const Tooltip = dynamic(
    () => import('react-leaflet').then(m => m.Tooltip),
    { ssr: false }
);

type LatLng = [number, number];

export default function Map({
    center = [46.49, -81.01] as LatLng, // Northern Ontario
    zoom = 6,
}: {
    center?: LatLng;
    zoom?: number;
}) {
    // Guard: render only after mount (prevents double-init issues)
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const mapKey = `${center[0]}-${center[1]}-${zoom}`;

    if (!mounted) {
        return <div className="h-full w-full rounded-2xl border bg-white" />;
    }

    // Demo risk points based on region (Ontario vs NWT)
    const isNWT = center[0] > 60;
    const riskPoints: Array<{ pos: LatLng; label: string; weight: number }> = isNWT
        ? [
            { pos: [62.45, -114.38], label: 'NWT — watershed risk', weight: 0.9 },
            { pos: [63.1, -113.5], label: 'Permafrost sensitivity', weight: 0.7 },
            { pos: [64.2, -111.8], label: 'Caribou corridor proximity', weight: 0.8 },
        ]
        : [
            { pos: [46.49, -81.01], label: 'Sudbury watershed flag', weight: 0.85 },
            { pos: [48.47, -81.33], label: 'Timmins wetlands buffer', weight: 0.7 },
            { pos: [47.5, -80.2], label: 'Habitat sensitivity', weight: 0.6 },
        ];

    // NASA GIBS WMTS — Sentinel-2 layers (Web Mercator Level 9)
    const GIBS_S2_TRUE =
        'https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/Sentinel-2%20L2A%20True%20Color/default/default/GoogleMapsCompatible_Level9/{z}/{y}/{x}.jpg';
    const GIBS_S2_ALT =
        'https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/Sentinel-2%20L1C%20True%20Color/default/default/GoogleMapsCompatible_Level9/{z}/{y}/{x}.jpg';

    return (
        <div className="h-full w-full">
            <MapContainer
                key={mapKey}
                center={center}
                zoom={zoom}
                scrollWheelZoom
                className="h-full w-full"
            >
                {/* Base map (labels) */}
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
                />

                <LayersControl position="topright">
                    {/* OFFICIAL SPACE DATA OVERLAYS (NASA/ESA Sentinel-2) */}
                    <LCOverlay checked name="Sentinel-2 (NASA GIBS) — True Color">
                        <TileLayer url={GIBS_S2_TRUE} opacity={0.75} tileSize={256} zIndex={600} />
                    </LCOverlay>

                    <LCOverlay name="Sentinel-2 (NASA GIBS) — Alt View">
                        <TileLayer url={GIBS_S2_ALT} opacity={0.6} tileSize={256} zIndex={590} />
                    </LCOverlay>

                    {/* Visible risk overlay (demo heat-style markers) */}
                    <LCOverlay checked name="Risk overlay (demo)">
                        <div>
                            {riskPoints.map((p, i) => {
                                const color = p.weight > 0.8 ? '#dc2626' : p.weight > 0.65 ? '#f97316' : '#f59e0b';
                                const fill = p.weight > 0.8 ? '#ef4444' : p.weight > 0.65 ? '#fb923c' : '#fbbf24';
                                return (
                                    <CircleMarker
                                        key={i}
                                        center={p.pos}
                                        radius={4 + Math.round(p.weight * 6)}
                                        pathOptions={{ color, weight: 2, fillColor: fill, fillOpacity: 0.35 }}
                                    >
                                        <Tooltip direction="top" offset={[0, -6]} opacity={1}>
                                            <span>{p.label}</span>
                                        </Tooltip>
                                    </CircleMarker>
                                );
                            })}
                        </div>
                    </LCOverlay>
                </LayersControl>
            </MapContainer>
        </div>
    );
}
