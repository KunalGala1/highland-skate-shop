import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Highland Skate Shop",
  description:
    " Welcome to Highland Skate Shop: Knowledge of all things skating is found here. This is your one stop shop! ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={inter.className + " leading-loose overflow-x-hidden"}>
        {children}
      </body>
    </html>
  );
}
