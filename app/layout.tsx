import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
// config.autoAddCss = false;

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
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/files/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/files/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/files/favicon-16x16.png"
        />
        <link rel="manifest" href="/files/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/files/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#eba591" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className + " leading-loose overflow-x-hidden"}>
        {children}
      </body>
    </html>
  );
}
