import { Inter, Angkor } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const angkor = Angkor({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-angkor',
})
