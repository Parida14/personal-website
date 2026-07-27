import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GitHubLogoIcon, LinkedInLogoIcon, FileIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-2xl space-y-10">
            <div className="flex items-center gap-5">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/images/lagnajit_photo.jpg" alt="Lagnajit Parida" />
                <AvatarFallback>LP</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Lagnajit Parida</h1>
                <p className="mt-1 text-lg text-muted-foreground">Staff Data Analyst · Data Products & Analytics Engineering</p>
              </div>
            </div>

            <div className="space-y-4 text-lg leading-8 text-muted-foreground">
              <p>I build reliable data products, lakehouse models, and internal tools for operational teams.</p>
              <p>My work spans Python, SQL, Databricks, Spark, dbt, analytics, and practical web interfaces.</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/assets/resume/Lagnajit_Parida_Resume.pdf" target="_blank">
                  <FileIcon className="mr-2 h-4 w-4" />
                  View resume
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact</Link>
              </Button>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-xl font-semibold">Selected project</h2>
              <div className="mt-3 space-y-2">
                <Link
                  href="https://github.com/Parida14/wallet-health-score"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-medium hover:underline"
                >
                  <GitHubLogoIcon className="h-4 w-4" />
                  Wallet Health Score
                </Link>
                <p className="text-muted-foreground">A full-stack analytics project with data pipelines, an API layer, and a web dashboard.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <Link href="https://linkedin.com/in/lparida" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
                <LinkedInLogoIcon className="h-4 w-4" /> LinkedIn
              </Link>
              <Link href="https://github.com/Parida14" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
                <GitHubLogoIcon className="h-4 w-4" /> GitHub
              </Link>
              <Link href="mailto:lagnajit.parida1@gmail.com" className="hover:text-foreground">Email</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
