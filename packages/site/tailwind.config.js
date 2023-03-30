/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './src/common/**/*.{js,jsx,ts,tsx}',
        './src/components/**/*.{js,jsx,ts,tsx}',
        './src/pages/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'home-banner': 'url("./assets/heading-background.jpg")'
            }
        }
    },
    plugins: [require('@tailwindcss/forms')]
};
