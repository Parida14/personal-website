import { Header } from "@/components/layout/header"
import { PostPreview } from "@/components/blog/post-preview"
import { getAllPosts } from "@/lib/blog"

export const metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              Blog
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              My thoughts on software development, design, and more.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                description={post.description}
                slug={post.slug}
                date={post.date}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
} 