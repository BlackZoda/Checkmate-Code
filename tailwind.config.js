/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            '8': 'repeat(8, minmax(0, fr))',
            colors: {
                light: "#fadcb9",
                dark: "#a08c78",
            }
        },
    },
    plugins: [],
}

