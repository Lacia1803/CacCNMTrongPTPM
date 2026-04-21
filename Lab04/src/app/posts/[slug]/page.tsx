import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { CommentForm } from '@/components/posts/comment-form'
import { RealtimeComments } from '@/components/posts/realtime-comments'

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const supabase = await createClient()

  const { data: post } = await supabase
    .from('posts')
    .select('title, excerpt')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  return {
    title: post?.title || 'Bài viết',
    description: post?.excerpt || '',
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const supabase = await createClient()

  const { data: post, error } = await supabase
    .from('posts')
    .select('*, profiles (display_name, avatar_url)')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (error || !post) notFound()

  const { data: comments } = await supabase
    .from('comments')
    .select('*, profiles (display_name, avatar_url)')
    .eq('post_id', post.id)
    .order('created_at', { ascending: true })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <article>
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-500">
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
        </header>

        {post.excerpt && (
          <p className="text-lg text-gray-600 italic border-l-4 border-blue-400 pl-4 mb-8">
            {post.excerpt}
          </p>
        )}

        <div className="prose prose-gray max-w-none">
          {post.content
            ? post.content.split('\n').map((paragraph: string, index: number) =>
                paragraph.trim() ? (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ) : (
                  <br key={index} />
                )
              )
            : <p className="text-gray-400 italic">Bài viết chưa có nội dung.</p>}
        </div>
      </article>

      {/* Back link */}
      <div className="mt-10 pt-6 border-t border-gray-200">
        <Link href="/" className="text-blue-600 hover:text-blue-700 text-sm">
          ← Quay lại danh sách bài viết
        </Link>
      </div>

      {/* Comments Section */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Bình luận ({comments?.length ?? 0})
        </h2>

        {user ? (
          <div className="mb-6">
            <CommentForm postId={post.id} />
          </div>
        ) : (
          <p className="text-sm text-gray-500 mb-6 p-4 bg-gray-50 rounded-lg">
            <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
              Đăng nhập
            </Link>{' '}
            để để lại bình luận.
          </p>
        )}

        <RealtimeComments postId={post.id} initialComments={comments ?? []} />
      </section>
    </main>
  )
}
