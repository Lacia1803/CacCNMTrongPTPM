import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { PostList } from '@/components/dashboard/post-list'

export default async function DashboardPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const { data: posts, error } = await supabase
    .from('posts')
    .select('*')
    .eq('author_id', user.id)
    .order('created_at', { ascending: false })

  if (error) console.error('Error fetching posts:', error)

  const published = posts?.filter((p) => p.status === 'published').length ?? 0
  const drafts = posts?.filter((p) => p.status === 'draft').length ?? 0

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">
            {published} bài đã xuất bản · {drafts} bản nháp
          </p>
        </div>
        <Link
          href="/dashboard/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          + Viết bài mới
        </Link>
      </div>

      {posts && posts.length > 0 ? (
        <PostList posts={posts} />
      ) : (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
          <p className="text-4xl mb-4">✍️</p>
          <p className="text-gray-500 mb-4">Bạn chưa có bài viết nào.</p>
          <Link href="/dashboard/new" className="text-blue-600 hover:text-blue-700 font-medium">
            Viết bài đầu tiên →
          </Link>
        </div>
      )}
    </main>
  )
}
