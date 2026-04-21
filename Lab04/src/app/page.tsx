import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

export default async function HomePage() {
  const supabase = await createClient()

  const { data: posts, error } = await supabase
    .from('posts')
    .select(`
      *,
      profiles (
        display_name,
        avatar_url
      )
    `)
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error fetching posts:', error)
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Bài viết mới nhất</h1>
        <p className="text-gray-500 mt-1">Khám phá các bài viết từ cộng đồng</p>
      </div>

      {posts && posts.length > 0 ? (
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <Link href={`/posts/${post.slug}`}>
                <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors mb-2">
                  {post.title}
                </h2>
              </Link>

              {post.excerpt && (
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>✍️ {post.profiles?.display_name || 'Ẩn danh'}</span>
                  <span>•</span>
                  <time>
                    {post.published_at
                      ? new Date(post.published_at).toLocaleDateString('vi-VN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })
                      : ''}
                  </time>
                </div>

                <Link
                  href={`/posts/${post.slug}`}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Đọc tiếp →
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
          <p className="text-4xl mb-4">📝</p>
          <p className="text-gray-500 mb-4">Chưa có bài viết nào được đăng.</p>
          <Link href="/register" className="text-blue-600 hover:text-blue-700">
            Đăng ký và viết bài đầu tiên →
          </Link>
        </div>
      )}
    </main>
  )
}
