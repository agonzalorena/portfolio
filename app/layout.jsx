import { Fira_Code } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/ThemeProvider";
import ThemeToggle from "./components/ThemeToggle";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// 1. Mover la configuración del viewport a su propia exportación (Next.js 14+)
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff", // Puedes ajustar el color si tenías uno
};

export const metadata = {
  title: "Portfolio of Agustin Gonzalorena - Software Developer",
  description:
    "Portfolio of Agustin Gonzalorena. Software Developer and enthusiast of all things servers and deployments. Specialized in creating custom web applications.",
  keywords:
    "Agustin Gonzalorena, Software Developer, Gonzalorena, Backend Developer, Java, Spring Boot, React, Next.js, Portfolio",
  publisher: "Agustin Gonzalorena",

  // 2. Corregir la estructura de robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

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
      "Portfolio of Agustin Gonzalorena. Software developer and enthusiast of all things servers and deployments.",
    url: "https://agonzalorena.com/",
    images: {
      url: "https://agonzalorena.com/imagen_OpenGraph.png",
      width: 800,
      height: 600,
    },
    type: "website",
  },

  // 3. Mover la verificación de Google aquí
  verification: {
    google: "ACJVrDkGDbhDblH4pJk0wo59CqRqUTIkKPaokRfJYFU",
  },

  // 4. Mover los íconos aquí
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "/my-favicon/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
      { url: "/my-favicon/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/my-favicon/apple-touch-icon.png", sizes: "180x180" }],
  },

  // 5. Mover el manifest y configuraciones de Apple app
  manifest: "/my-favicon/site.webmanifest",
  appleWebApp: {
    title: "Agustin",
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
      {/* ELIMINADA la etiqueta <head> manual para que funcione metadata */}
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
