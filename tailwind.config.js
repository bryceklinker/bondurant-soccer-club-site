/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './src/common/components/**/*.{js,jsx,ts,tsx}',
        './src/common/layout/**/*.{js,jsx,ts,tsx}',
        './src/common/seo/**/*.{js,jsx,ts,tsx}',
        './src/components/**/*.{js,jsx,ts,tsx}',
        './src/pages/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {}
    },
    plugins: []
};
