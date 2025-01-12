import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface PostPreviewProps {
  title: string
  description: string
  slug: string
  date: string
}

export function PostPreview({
  title,
  description,
  slug,
  date,
}: PostPreviewProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Link
            href={`/blog/${slug}`}
            className="hover:underline"
          >
            {title}
          </Link>
        </CardTitle>
        <CardDescription>
          {formatDate(date)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          {description}
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="ml-auto">
          <Link href={`/blog/${slug}`}>
            Read more →
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
} 