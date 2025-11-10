'use client';

import * as React from 'react';

/**
 * Clean, UTF-8 safe flame with subtle spikes (mining/energy vibe).
 * Size is in pixels; color inherits currentColor so you can style with Tailwind.
 */
export default function FlameIcon({
    size = 80,
    className = 'text-emerald-400',
}: {
    size?: number;
    className?: string;
}) {
    const s = size;
    return (
        <svg
            width={s}
            height={s}
            viewBox="0 0 64 64"
            fill="none"
            className={className}
            aria-hidden="true"
        >
            {/* outer flame */}
            <path
                d="M34 4c6 10-2 14 6 22 4 4 10 8 10 16 0 10-8 18-18 18S14 52 14 42c0-8 4-12 8-16 6-6 0-10 6-20 1.5-2.6 3.4-3 6-2Z"
                fill="currentColor"
                fillOpacity="0.22"
            />
            {/* inner flame */}
            <path
                d="M31 14c3 6-2 8 3 13 2.5 2.5 6 5 6 10 0 6-5 11-11 11s-11-5-11-11c0-5 2.5-7.5 5-10 4-4 0-6 3-11 0.9-1.6 2.1-1.8 3-2Z"
                fill="currentColor"
                fillOpacity="0.55"
            />
            {/* spikes / flickers */}
            <path
                d="M42 8l3-4M48 16l5-2M12 24l-4-3M20 10l-3-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.7"
            />
        </svg>
    );
}
