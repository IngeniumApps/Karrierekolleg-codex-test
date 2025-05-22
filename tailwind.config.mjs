export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  safelist: [
    'text-accent',
    'text-primary',
    'text-pink',
    'text-yellow',
    'text-red',
    'text-green',
    'text-orange',
    'text-lavendel',
    'text-dark_orange',
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ['Brandon Grotesque', 'Montserrat', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      colors: {
        accent: '#BBF451',
        primary: '#2C6FA0',
        pink: '#ef5d9f',
        yellow: '#f4c94e',
        red: '#ed4250',
        green: '#478257',
        orange: '#f79d43',
        lavendel: '#d7c0db',
        dark_orange: '#f06359',
      },
    }
  },
  plugins: [],
};
