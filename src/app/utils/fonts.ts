import { Inter, Angkor, Raleway, Libre_Baskerville } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const angkor = Angkor({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-angkor',
})

export const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-raleway',
})

export const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-libre-baskerville',
})

