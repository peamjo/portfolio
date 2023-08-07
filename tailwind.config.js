/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
         'cloud': "url('../public/assets/cloud.jpg')",
      }),
    },
},
  plugins: [require('@tailwindcss/forms')],
}
