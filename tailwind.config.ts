import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        angkor: ['var(--font-angkor)'],
        inter: ['var(--font-inter)'],
      },
      colors: {
        customBlue: '#818CF8',
        customLightBlue: '#eef2ff',
      },
      fontSize: {
        xxs: '0.625rem',
      },
      aspectRatio: {
        '7/5': '7 / 5',
      },
    },
  },
  plugins: [],
};
export default config;
