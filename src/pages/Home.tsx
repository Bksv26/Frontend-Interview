import { useState } from "react"
import BlogList from "../components/BlogList"
import BlogDetail from "../components/BlogDetail"
import CreateBlogForm from "../components/CreateBlogForm"

export default function Home() {
  const [selectedId, setSelectedId] = useState<number>(0)

  return (
<div className="min-h-screen bg-slate-100 p-6">
      <div className="grid grid-cols-12 gap-6 h-full">
        
        {/* LEFT PANEL */}
<div className="col-span-4 bg-white rounded-xl border p-4 overflow-y-auto">
          <CreateBlogForm />
          <BlogList onSelect={setSelectedId} />
        </div>

        {/* RIGHT PANEL */}
<div className="col-span-8 bg-white rounded-xl border p-6 overflow-y-auto">
          <BlogDetail id={selectedId} />
        </div>

      </div>
    </div>
  )
}

