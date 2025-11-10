// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Background from '@/components/Background'; // <-- plain import (client component)

export const metadata: Metadata = {
    title: 'LYTHOS — BramHacks',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="bg-black">
            <body className="bg-black text-white min-h-screen">
                {/* Client component; safe to render in a Server layout */}
                <Background />
                {children}
            </body>
        </html>
    );
}
