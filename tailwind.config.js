/** @type {import('tailwindcss').Config} */

module.exports = {
   mode: 'jit',
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   theme: {
      extend: {
         colors: {
            default: '#020617',
            primary: '#f8fafc',
            secondary: '#015C92',
            success: '#16a34a',
            warning: '#FE7A15',
            error: '#dc2626',
         },

         fontSize: {
            content: '1rem',
            info: '1.5rem',
            title: '3rem',
         },
      },
   },
   plugins: [],
};
