import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Lagnajit Parida | Personal Portfolio & Blog",
    template: "%s | Lagnajit Parida",
  },
  description: "Senior Data Analyst exploring the intersection of data analytics, engineering, and modern web development.",
  keywords: [
    "Data Analytics and Engineering",
    "Web Development",
    "Python",
    "SQL",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
    "Blog",
  ],
  authors: [
    {
      name: "Lagnajit Parida",
      url: "https://lagnajitparida.com",
    },
  ],
  creator: "Lagnajit Parida",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://put your website url here.com",
    title: "Lagnajit Parida | Data Analytics Portfolio & Blog",
    description: "Senior Data Analyst exploring the intersection of data analytics, engineering, and modern web development.",
    siteName: "Lagnajit Parida",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagnajit Parida | Data Analytics Portfolio & Blog",
    description: "Senior Data Analyst exploring the intersection of data analytics, engineering, and modern web development.",
    creator: "@lparida27",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
