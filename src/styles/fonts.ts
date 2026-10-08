import localFont from 'next/font/local';

export const plusJakartaSans = localFont({
  src: '../assets/fonts/plus-jakarta-sans/plus-jakarta-sans-latin-wght-normal.woff2',
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
  weight: '200 800',
});

export const bebasNeue = localFont({
  src: '../assets/fonts/bebas-neue/BebasNeue-Regular.ttf',
  variable: '--font-display',
  display: 'swap',
  weight: '400',
});

export const dmSans = localFont({
  src: '../assets/fonts/dm-sans/DMSans-Variable.ttf',
  variable: '--font-body',
  display: 'swap',
  weight: '100 1000',
});
