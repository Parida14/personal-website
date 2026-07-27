import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Lagnajit Parida | Data Analytics & Engineering Portfolio",
    template: "%s | Lagnajit Parida",
  },
  description: "Staff Data Analyst building reliable data products, lakehouse models, and internal tools.",
  keywords: [
    "Data Analytics",
    "Data Engineering",
    "Analytics Engineering",
    "Data Products",
    "Blockchain Analytics",
    "Python",
    "SQL",
    "Databricks",
    "Spark",
    "dbt",
    "PostgreSQL",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
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
    url: "https://lagnajitparida.com",
    title: "Lagnajit Parida | Data Analytics & Engineering Portfolio",
    description: "Staff Data Analyst building reliable data products, lakehouse models, and internal tools.",
    siteName: "Lagnajit Parida",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagnajit Parida | Data Analytics & Engineering Portfolio",
    description: "Staff Data Analyst building reliable data products, lakehouse models, and internal tools.",
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
