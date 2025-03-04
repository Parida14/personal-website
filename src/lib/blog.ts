import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const postsDirectory = path.join(process.cwd(), "src/content/blog")

export interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  content: string
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = path.join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    slug: realSlug,
    title: data.title,
    description: data.description,
    date: data.date,
    content: contentHtml,
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const slugs = fs.readdirSync(postsDirectory)
  const posts = await Promise.all(
    slugs.map((slug) => getPostBySlug(slug))
  )

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
} 