import { PostForm } from '@/components/dashboard/post-form'

export default function NewPostPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Viết bài mới</h1>
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <PostForm />
      </div>
    </main>
  )
}
