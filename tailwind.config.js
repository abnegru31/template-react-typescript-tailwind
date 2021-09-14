const colors = require('tailwindcss/colors');

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                sky: colors.sky,
                cyan: colors.cyan,
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        ({ addComponents }) => {
            const AppLogo = {
                '.App-logo': {
                    animation: 'App-logo-spin infinite 20s linear',
                    height: '40vmin',
                    'pointer-events': 'none',
                },
                '@keyframes App-logo-spin': {
                    from: {
                        transform: 'rotate(0deg)',
                    },
                    to: {
                        transform: 'rotate(360deg)',
                    },
                },
            };
            addComponents(AppLogo);
        },
    ],
};
