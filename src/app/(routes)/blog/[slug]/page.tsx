import { Header } from "@/components/layout/header"
import { getAllPosts, getPostBySlug } from "@/lib/blog"
import { formatDate } from "@/lib/utils"

type BlogPostPageProps = {
  params: {
    slug: string
  }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)
  return {
    title: post.title,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <article className="container max-w-3xl py-6 lg:py-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <p className="text-lg text-muted-foreground">
              {formatDate(post.date)}
            </p>
          </div>
          <div
            className="prose dark:prose-invert mt-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </div>
  )
} 