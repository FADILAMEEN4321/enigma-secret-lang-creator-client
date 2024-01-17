/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        enigmagreen: '#00ffc2',
        enigmalightgreen: '#4bffd4',
        enigmagray: '#242424',
        enigmalightgray:'#a1a1a1',
        enigmawhite: '#ffffff',
        enigmablue: '#000830',
        enigmanormalbg:'#101012'
      },
    },
  },
  plugins: [],
}

