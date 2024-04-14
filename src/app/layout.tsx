import type { Metadata } from "next";
import "./globals.css";
import { angkor } from "./utils/fonts";

export const metadata: Metadata = {
  title: "Paperprint calendear",
  description: "Create your own paper calendar!",
  authors: [{ name: "Šárka Chwastková", url: "https://pandacode.cz" }],
  keywords: ["calendar", "paper", "print", "create", "custom", "design", "download", "share"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('aaa: ', angkor)
  return (
    <html lang="en">
      <body>
        {children}
        <footer>
          Made with ❤️ by{" "}<a href="https://pandacode.cz" target="_blank">Šárka Chwastková</a>
        </footer>
      </body>
    </html>
  );
}
