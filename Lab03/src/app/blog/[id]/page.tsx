import Link from "next/link";
import { notFound } from "next/navigation";
import { Post, User, Comment } from "@/types/post";
import LikeButton from "@/components/like-button";

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

async function getPost(id: string): Promise<Post> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) notFound();
  return res.json();
}

async function getUser(userId: number): Promise<User> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error("Không thể tải thông tin tác giả");
  return res.json();
}

async function getComments(postId: number): Promise<Comment[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) return [];
  return res.json();
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;

  // Chạy song song getPost và getUser (bài tập tự làm Phần 1)
  const post = await getPost(id);
  const [author, comments] = await Promise.all([
    getUser(post.userId),
    getComments(post.id),
  ]);

  return (
    <div>
      <Link
        href="/blog"
        className="text-blue-600 hover:underline text-sm mb-6 inline-block"
      >
        ← Quay lại danh sách
      </Link>
      <article>
        <h1 className="text-3xl font-bold mb-4 capitalize">{post.title}</h1>
        <div className="flex items-center gap-3 mb-6 text-sm text-gray-500">
          <span>
            Tác giả:{" "}
            <strong className="text-gray-700">{author.name}</strong>
          </span>
          <span>·</span>
          <span>{author.email}</span>
        </div>
        <div className="prose max-w-none text-gray-700 whitespace-pre-line mb-8 leading-relaxed">
          {post.body}
        </div>

        {/* Thông tin tác giả */}
        <div className="border rounded-lg p-4 mb-8 bg-gray-50">
          <h3 className="font-semibold mb-2">Về tác giả</h3>
          <p className="text-gray-600 text-sm">
            <strong>{author.name}</strong> (@{author.username}) —{" "}
            {author.company.name}
          </p>
          <p className="text-gray-500 text-sm italic">
            {author.company.catchPhrase}
          </p>
        </div>

        {/* Nút Like (Client Component) */}
        <div className="border-t pt-6 mb-8">
          <LikeButton />
        </div>

        {/* Bình luận (bài tập tự làm Phần 1) */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Bình luận ({comments.length})
          </h3>
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm">{comment.name}</span>
                  <span className="text-xs text-gray-400">·</span>
                  <span className="text-xs text-gray-400">{comment.email}</span>
                </div>
                <p className="text-gray-600 text-sm">{comment.body}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
