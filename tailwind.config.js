// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
      },
      animation: {
        float1: 'float 6s ease-in-out infinite',
        float2: 'float 8s ease-in-out infinite',
        float3: 'floatX 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
