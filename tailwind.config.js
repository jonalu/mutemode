/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'monoton': ['"Monoton"', 'cursive'],
                'coda': ['"Coda"', 'cursive'],
            },
        },
    },
    plugins: [],
}
