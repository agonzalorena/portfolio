import { Fira_Code } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/ThemeProvider";
import ThemeToggle from "./components/ThemeToggle";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Portfolio of Agustin Gonzalorena - Software Developer",
  description:
    "Portfolio of Agustin Gonzalorena. Software Developer and blockchain enthusiast. Specialized in creating custom web applications.",
  keywords:
    "Agustin Gonzalorena, Software Developer, Gonzalorena, Backend Developer, Java, Spring Boot, React, Next.js, Portfolio",
  publisher: "Agustin Gonzalorena",
  robots: "index, follow",
  googlebot: "index, follow",
  authors: [
    {
      name: "Agustin Gonzalorena",
      url: "https://github.com/Agustin-Gonzalorena",
    },
  ],
  alternates: {
    canonical: "https://agonzalorena.com/",
  },
  openGraph: {
    title: "Agustin Gonzalorena",
    siteName: "Agustin Gonzalorena",
    description:
      "Portfolio of Agustin Gonzalorena. Software developer and blockchain enthusiast.",
    url: "https://agonzalorena.com/",
    images: {
      url: "https://agonzalorena.com/imagen_OpenGraph.png",
      width: 800,
      height: 600,
    },
    type: "website",
  },
};
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Agustin Gonzalorena",
  url: "https://agonzalorena.com/",
  image: "https://agonzalorena.com/imagen_OpenGraph.png",
  jobTitle: "Software Developer",
  sameAs: [
    "https://github.com/Agustin-Gonzalorena",
    "https://www.linkedin.com/in/agustin-gonzalorena/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          href="/my-favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/my-favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/my-favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Agustin" />
        <link rel="manifest" href="/my-favicon/site.webmanifest" />
        <meta
          name="google-site-verification"
          content="ACJVrDkGDbhDblH4pJk0wo59CqRqUTIkKPaokRfJYFU"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${firaCode.className} antialiased flex justify-center`}>
        <Providers>
          {children}
          <ThemeToggle />
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
