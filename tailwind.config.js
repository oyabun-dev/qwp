/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Mapping Tailwind utility classes to our CSS variables
                // Usage: bg-[var(--bg-primary)] is valid, but we can also map them for cleaner code if desired.
                // For now, sticking to the widespread usage of --variables in standard CSS and allowing
                // Tailwind arbitrarily values or just falling back to the standard palette where it matches.
                // However, since I used many arbitrary values in the code (e.g. text-[var(--accent-gold)]), 
                // this config ensures Tailwind scans the files to generate them.
            },
            fontFamily: {
                heading: ['"Playfair Display"', 'serif'],
                body: ['"Inter"', 'sans-serif'],
            },
            animation: {
                'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [],
}
