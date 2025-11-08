/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        
        cyan: {
          50: 'hsl(180, 100%, 95%)',
          100: 'hsl(180, 100%, 90%)',
          200: 'hsl(180, 100%, 80%)',
          300: 'hsl(180, 100%, 70%)',
          400: 'hsl(180, 100%, 60%)',
          500: 'hsl(180, 100%, 50%)', 
          600: 'hsl(180, 100%, 40%)',
          700: 'hsl(180, 100%, 30%)',
          800: 'hsl(180, 100%, 20%)',
          900: 'hsl(180, 100%, 10%)',
        },
        
        darkBg: {
          900: 'hsl(0, 0%, 5%)',
          800: 'hsl(0, 0%, 10%)',
          700: 'hsl(0, 0%, 15%)',
        },
        
        lightText: {
          100: 'hsl(0, 0%, 95%)',
          200: 'hsl(0, 0%, 90%)',
          300: 'hsl(0, 0%, 85%)',
        }
      },
      boxShadow: {
        'cyan-green': '0 0 10px hsl(180, 100%, 50%), 0 0 20px hsl(180, 100%, 50%)',
        'cyan-green-lg': '0 0 15px hsl(180, 100%, 50%), 0 0 30px hsl(180, 100%, 50%)',
        'cyan-green-xl': '0 0 20px hsl(180, 100%, 50%), 0 0 40px hsl(180, 100%, 50%)',
      },
      borderColor: {
        'cyan-green': 'hsl(180, 100%, 50%)',
      }
    },
  },
  plugins: [],
}