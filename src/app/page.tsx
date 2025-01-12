import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex max-w-[980px] flex-col items-start gap-4">
            <div className="flex items-center gap-4">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/images/lagnajit_photo.jpg" alt="Lagnajit Parida" />
                    <AvatarFallback>LP</AvatarFallback>
                  </Avatar>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/images/lagnajit_photo.jpg" />
                      <AvatarFallback>LP</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">Lagnajit Parida</h4>
                      <p className="text-sm">Data Analyst and Engineer</p>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href="https://github.com/Parida14" target="_blank">
                            <GitHubLogoIcon className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                          <Link href="https://linkedin.com/in/lparida" target="_blank">
                            <LinkedInLogoIcon className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <div>
                <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
                  Hi, I&apos;m Lagnajit Parida
                </h1>
                <p className="text-lg text-muted-foreground">
                  Data Analyst & Engineer
                </p>
              </div>
            </div>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Experienced in transforming complex data into actionable insights. Currently expanding into software engineering and data architecture, building modern web applications and efficient data solutions.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/contact">
                  Get in touch
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/blog">
                  Read my blog
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Data Analytics & Engineering</CardTitle>
                <CardDescription>Analysis & Data Pipeline Development</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["SQL", "Python", "Spark", "dbt", "Snowflake", "Data Modeling"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-secondary px-3 py-1 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Software Development</CardTitle>
                <CardDescription>Web & Application Development</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["TypeScript", "React", "Next.js", "Node.js", "REST APIs"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-secondary px-3 py-1 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tools & Technologies</CardTitle>
                <CardDescription>Development & Collaboration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Docker", "AWS", "CI/CD", "Agile"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-secondary px-3 py-1 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Featured Projects</CardTitle>
                <CardDescription>Some of my recent work</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="font-semibold">TBD</h3>
                  <p className="text-sm text-muted-foreground">
                    {/* TBD */}
                  </p>
                </div>
                {/* <div className="space-y-2">
                  <h3 className="font-semibold">Data Pipeline Automation</h3>
                  <p className="text-sm text-muted-foreground">
                    Built automated data pipelines using Python and SQL, reducing manual reporting time by 80% and improving data accuracy.
                  </p>
                </div> */}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
