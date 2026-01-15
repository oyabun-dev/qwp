/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: "#C5A059", // Metallic Gold (Premium)
                core: "#09090B",  // Dark bg
            },
            fontFamily: {
                heading: ['Playfair Display', 'serif'],
                body: ['Plus Jakarta Sans', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
