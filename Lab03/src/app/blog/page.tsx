import Link from "next/link";
import { Post } from "@/types/post";

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Không thể tải danh sách bài viết");
  }
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Blog</h1>
      <p className="text-gray-500 mb-6">
        Tổng cộng {posts.length} bài viết từ API
      </p>
      <div className="space-y-4">
        {posts.slice(0, 10).map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer bg-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded font-medium">
                  Tác giả #{post.userId}
                </span>
                <span className="text-sm text-gray-400">Bài #{post.id}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 capitalize hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 line-clamp-2">{post.body}</p>
              <span className="inline-block mt-3 text-blue-600 text-sm">
                Đọc thêm →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
