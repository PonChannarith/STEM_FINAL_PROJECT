const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        flowbite.content(),
    ],
    theme: {
        fontFamily: {
            suwannaphum: ['Suwannaphum']
        },
        fontWeight: {
            thin: '100',
            hairline: '100',
            extralight: '200',
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
            'extra-bold': '800',
            black: '900',
          }
    },
    plugins: [
        flowbite.plugin(),
    ],
}