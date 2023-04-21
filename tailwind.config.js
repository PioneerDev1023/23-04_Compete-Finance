const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'arrow-d': "url('/svg/arrowDown.svg')",
        'arrow': "url('/svg/arrow.svg')",
        'zk': "url('/svg/headerZk.svg')",
        'tw': "url('/svg/twitter.svg')",
        'tg': "url('/svg/telegram.svg')",
        'dis': "url('/svg/discord.svg')",
        'mainbg': "url('/png/main-bg.jpg')",
        'swapUp': "url('/svg/reload.svg')",
        'swapConf': "url('/svg/set.svg')",
        'eth': "url('/svg/eth.svg')",
        'usdt': "url('/svg/usdt.svg')",
        'change': "url('/svg/change.svg')",
        'plus': "url('/svg/plus.svg')",
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
