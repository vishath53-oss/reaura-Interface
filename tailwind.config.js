/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#E8F2FF', // Light blue primary background
        surface: '#EDE5FF', // Soft lavender secondary background
        primary: '#4F46E5', // Indigo-600 for primary buttons/accents
        cyanAccent: '#0EA5E9', // Sky blue accent
        purpleAccent: '#8B5CF6', // Violet/Lavender accent
        pinkAccent: '#EC4899', // Pink accent (rarely used)
        mainHeading: '#0F172A', // Deep navy for excellent contrast
        bodyText: '#334155', // Slate-700 for readable body text
        mutedText: '#64748B', // Slate-500
        card: '#FFFFFF', // Clean white for cards
        borderLight: '#DBEAFE', // Blue-100 for subtle borders
      }
    },
  },
  plugins: [],
}
