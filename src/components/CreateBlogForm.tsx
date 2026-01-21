import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createBlog } from "../api/blogs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CreateBlogForm() {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] })
    },
  })

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  const formData = new FormData(e.currentTarget)

  mutation.mutate({
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    content: formData.get("content") as string,
    category: ["TECH"],
    coverImage: "https://via.placeholder.com/600",
    date: new Date().toISOString(),
  })

  e.currentTarget.reset()
}
  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <Input name="title" placeholder="Title" required />
      <Input name="description" placeholder="Description" required />
      <Input name="content" placeholder="Content" required />
     <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
  Create Blog
</Button>

    </form>
  )
}
