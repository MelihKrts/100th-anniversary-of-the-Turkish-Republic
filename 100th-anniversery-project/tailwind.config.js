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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
        "book-BG":"url('/image/background.jpg')",
        "cover-image":"url('/image/Ataturk_exit_parliament.jpg')",
      },
      // fontFamily:{
      //   title: ['"Inter"', 'sans-serif'],
      // },
      container:{
        center:true
      }
    },
  },
  plugins: [],
};
