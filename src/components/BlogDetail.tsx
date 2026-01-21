import { useQuery } from "@tanstack/react-query"
import { getBlogById } from "../api/blogs"

export default function BlogDetail({ id }: { id: number }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id),
    enabled: !!id,
  })

  if (!id) {
    return (
      <p className="text-muted-foreground">
        Select a blog
      </p>
    )
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p className="text-red-500">Failed to load blog</p>
  }

  return (
    <div className="space-y-6">

      {/* Cover Image */}
      <img
        src={data?.coverImage}
        alt="Blog cover"
        className="w-full h-64 object-cover rounded-lg"
      />

      {/* Title */}
      <h1 className="text-2xl font-bold">
        {data?.title}
      </h1>

      {/* Meta */}
      <div className="flex gap-3 text-sm text-muted-foreground">
        <span>{data?.category.join(", ")}</span>
        <span>|</span>
        <span>
          {new Date(data!.date).toLocaleDateString()}
        </span>
      </div>

      {/* Description */}
      <p className="font-medium">
        {data?.description}
      </p>

      {/* Content */}
      <p className="leading-relaxed">
        {data?.content}
      </p>

    </div>
  )
}
