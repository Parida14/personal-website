import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GitHubLogoIcon, LinkedInLogoIcon, FileIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export const metadata = {
  title: "Contact",
  description: "Get in touch and view my professional profiles.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              Let&apos;s Connect
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Find me on social media or download my resume.
            </p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LinkedInLogoIcon className="h-5 w-5" />
                  LinkedIn
                </CardTitle>
                <CardDescription>Professional Network</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="w-full">
                  <Link href="https://linkedin.com/in/lparida" target="_blank">
                    Connect on LinkedIn
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitHubLogoIcon className="h-5 w-5" />
                  GitHub
                </CardTitle>
                <CardDescription>Code Repository</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="w-full">
                  <Link href="https://github.com/Parida14" target="_blank">
                    View GitHub Profile
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileIcon className="h-5 w-5" />
                  Resume
                </CardTitle>
                <CardDescription>Download PDF</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button asChild variant="ghost" className="w-full">
                  <Link href="/assets/resume/Lagnajit_Parida_Resume.pdf" target="_blank">
                    View Resume
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/assets/resume/Lagnajit_Parida_Resume.pdf" download>
                    Download PDF
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Quick Overview</CardTitle>
                <CardDescription>Key highlights from my experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-semibold">Current Role</h3>
                  <p className="text-sm text-muted-foreground">
                    Software Developer at Company Name (2020 - Present)
                  </p>
                  <ul className="list-disc pl-4 text-sm text-muted-foreground">
                    <li>Key achievement or responsibility</li>
                    <li>Another significant contribution</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Core Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {["TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS"].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-secondary px-3 py-1 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
} 