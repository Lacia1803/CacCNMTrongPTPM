import Link from 'next/link'
import { Post } from '@/types/database'
import { DeletePostButton } from './delete-post-button'

interface PostListProps {
  posts: Post[]
}

export function PostList({ posts }: PostListProps) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h2 className="text-lg font-semibold text-gray-900 truncate">
                  {post.title}
                </h2>
                <span
                  className={`shrink-0 px-2 py-0.5 text-xs font-medium rounded-full ${
                    post.status === 'published'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {post.status === 'published' ? '✅ Đã xuất bản' : '📝 Bản nháp'}
                </span>
              </div>

              {post.excerpt && (
                <p className="text-gray-500 text-sm mb-2 line-clamp-1">{post.excerpt}</p>
              )}

              <p className="text-gray-400 text-xs">
                Tạo ngày: {new Date(post.created_at).toLocaleDateString('vi-VN')}
              </p>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <Link
                href={`/posts/${post.slug}`}
                className="text-gray-500 hover:text-gray-700 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-100 transition-colors"
              >
                Xem
              </Link>
              <Link
                href={`/dashboard/edit/${post.id}`}
                className="text-blue-600 hover:text-blue-700 px-3 py-1.5 text-sm rounded-lg hover:bg-blue-50 transition-colors"
              >
                Sửa
              </Link>
              <DeletePostButton postId={post.id} postTitle={post.title} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
