/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
				sans: ['Lexend', 'system-ui'],
			},
			backgroundImage: {
				'hero': "url('/src/assets/hero.png')",
        'ellipse': "url('/src/assets/ellipse.png')",
			},
    },
  },
  plugins: [],
}
