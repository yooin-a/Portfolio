/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#08080A',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1, duration: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0, duration: 1  },
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        fadeOut: 'fadeOut 1s ease-in forwards',
        fadeInDelay: 'fadeIn 1s ease-out 0.5s forwards',
      },      
      fontFamily: {
        NotoSans:['"Noto Sans"', 'sans-serif'],
        ContrailOne:['"Contrail One"', 'sans-serif'],        
        PlayfairDisplay:['"Playfair Display"', 'sans-serif'],
        GreatVibes:['"Great Vibes"', 'sans-serif'],
        HomemadeApple:['"Homemade Apple"', 'sans-serif'],
        ZenSerif:["ZenSerif-Regular", 'sans-serif']
      }
    },
  },
  plugins: [],
}





