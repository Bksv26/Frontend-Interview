import { Card, CardContent } from "@/components/ui/card"
import type { Blog } from "../api/blogs"

export default function BlogCard({
  blog,
  onClick,
}: {
  blog: Blog
  onClick: () => void
}) {
  return (
    <Card
      onClick={onClick}
      className="className=cursor-pointer hover:border-indigo-400 hover:shadow-md transition"
    >
      <CardContent className="p-4 space-y-2">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{blog.category.join(", ")}</span>
          <span>{new Date(blog.date).toLocaleDateString()}</span>
        </div>

        <h3 className="font-semibold">{blog.title}</h3>
        <p className="text-sm text-muted-foreground">
          {blog.description}
        </p>
      </CardContent>
    </Card>
  )
}