export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1200px',   // ✅ Ghi đè breakpoint lg thành 1025px
            xl: '1280px',
            '2xl': '1536px',
        }
    },
    plugins: [],
}