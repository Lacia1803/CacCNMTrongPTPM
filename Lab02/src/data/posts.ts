export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
}

export const posts: Post[] = [
  {
    slug: "gioi-thieu-nextjs",
    title: "Giới thiệu Next.JS — Framework React phổ biến nhất",
    excerpt:
      "Tìm hiểu tại sao Next.JS là lựa chọn hàng đầu cho phát triển web hiện đại với App Router và Server Components.",
    content: `Next.JS là một React framework mạnh mẽ được phát triển bởi Vercel. Nó cung cấp nhiều tính năng quan trọng như Server-Side Rendering (SSR), Static Site Generation (SSG), và App Router.

Một số ưu điểm nổi bật của Next.JS:
- Routing tự động dựa trên cấu trúc thư mục (file-based routing)
- Hỗ trợ Server Components và Client Components
- Tối ưu hóa hình ảnh, font, và scripts tự động
- API Routes tích hợp sẵn
- Hỗ trợ TypeScript sẵn có

Trong môn học "Các công nghệ mới trong PTPM", chúng tôi đang xây dựng website portfolio cá nhân với Next.JS 15 và App Router — đây là phiên bản mới nhất với nhiều cải tiến đáng kể so với Pages Router truyền thống.

Theo kinh nghiệm cá nhân, việc chuyển từ React thuần sang Next.JS khá mượt mà nếu bạn đã nắm vững React cơ bản. Điểm khác biệt lớn nhất là cách tư duy về rendering: Server Components vs Client Components.`,
    date: "2025-01-15",
    category: "Công nghệ",
    author: "Phùng Võ Quốc Hiển",
  },
  {
    slug: "hoc-tailwind-css",
    title: "Tailwind CSS — Cách tiếp cận mới cho CSS",
    excerpt:
      "Khám phá phương pháp utility-first CSS và tại sao nó thay đổi cách viết giao diện web hiệu quả hơn.",
    content: `Tailwind CSS là một utility-first CSS framework, nghĩa là thay vì viết CSS tùy chỉnh, bạn sử dụng các class tiện ích có sẵn để xây dựng giao diện.

Ví dụ, thay vì viết:
.card { padding: 16px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }

Bạn viết trực tiếp trong JSX:
<div className="p-4 rounded-lg shadow-md">...</div>

Ưu điểm của Tailwind CSS:
- Không cần đặt tên class (không còn lo "đặt tên gì bây giờ?")
- Không cần chuyển qua lại giữa file TSX và CSS
- File CSS cuối cùng rất nhỏ gọn (chỉ chứa class đã dùng)
- Responsive design cực kỳ dễ với prefix md: lg: xl:
- Dark mode hỗ trợ sẵn với prefix dark:

Sau khi dùng quen, tôi không muốn quay lại CSS truyền thống nữa. Đặc biệt khi làm Frontend Lead trong dự án nhóm, Tailwind giúp cả team code nhất quán hơn nhiều.`,
    date: "2025-01-20",
    category: "Công nghệ",
    author: "Phùng Võ Quốc Hiển",
  },
  {
    slug: "kinh-nghiem-hoc-lap-trinh",
    title: "Chia sẻ kinh nghiệm tự học lập trình hiệu quả",
    excerpt:
      "Những bài học rút ra sau 3 năm học lập trình tại Đại học Đà Lạt — từ React đến Machine Learning.",
    content: `Sau 3 năm học tập và thực hành lập trình tại ĐH Đà Lạt, tôi rút ra một số kinh nghiệm quan trọng:

1. Thực hành nhiều hơn đọc lý thuyết
Lập trình là kỹ năng thực hành. Đọc sách và xem video chỉ chiếm 30%, 70% còn lại là viết code thực tế.

2. Xây dựng dự án thực tế
Không gì tốt hơn việc xây dựng sản phẩm thực tế để học. Dự án Quản lý Thư viện của nhóm tôi là ví dụ điển hình — chúng tôi học được Git workflow, API design, và DevOps từ dự án đó.

3. Tham gia cộng đồng và làm việc nhóm
Làm việc cùng Ngô Đăng Khoa (Backend/nhóm trưởng) và các thành viên khác giúp tôi học hỏi rất nhiều về cách tổ chức code và giao tiếp trong team.

4. Đừng sợ đọc documentation
Next.JS docs, Tailwind docs, PostgreSQL docs — tất cả đều rất tốt. Kỹ năng đọc docs tiếng Anh là cần thiết cho bất kỳ lập trình viên nào.`,
    date: "2025-02-01",
    category: "Học tập",
    author: "Phùng Võ Quốc Hiển",
  },
  {
    slug: "frontend-lead-la-gi",
    title: "Frontend Lead là gì? Kinh nghiệm từ dự án nhóm",
    excerpt:
      "Chia sẻ về vai trò Frontend Lead trong dự án nhóm sinh viên — trách nhiệm, thách thức và bài học.",
    content: `Trong dự án xây dựng Hệ thống Quản lý Thư viện (DoAnWebNangCao), tôi đảm nhận vai trò Frontend Lead. Đây là lần đầu tiên tôi chịu trách nhiệm về toàn bộ giao diện người dùng của một dự án thực tế.

Trách nhiệm của Frontend Lead trong nhóm chúng tôi:
- Thiết kế kiến trúc component React
- Phân chia task frontend cho các thành viên
- Review code và đảm bảo UI/UX nhất quán
- Phối hợp với Backend Lead (Ngô Đăng Khoa) về API contracts
- Viết tài liệu hướng dẫn setup môi trường frontend

Thách thức lớn nhất là việc đồng bộ hóa state giữa các component khi có nhiều người cùng làm. Chúng tôi giải quyết bằng cách thống nhất cấu trúc thư mục và naming convention từ đầu.

Bài học: Giao tiếp rõ ràng và commit message đúng chuẩn (Conventional Commits) quan trọng không kém gì code tốt.`,
    date: "2025-02-15",
    category: "Dự án cá nhân",
    author: "Phùng Võ Quốc Hiển",
  },
  {
    slug: "nextjs-server-vs-client-components",
    title: "Server Components vs Client Components — Khi nào dùng cái nào?",
    excerpt:
      "Giải thích rõ ràng sự khác biệt giữa Server Components và Client Components trong Next.JS App Router.",
    content: `Một trong những điểm gây nhầm lẫn nhất khi học Next.JS 13+ là phân biệt Server Components và Client Components. Bài viết này tổng hợp lại hiểu biết của tôi sau khi làm Lab 02.

Server Components (mặc định):
- Render trên server, không gửi JS xuống client
- Có thể truy cập database, file system trực tiếp
- KHÔNG dùng được: useState, useEffect, onClick, window, localStorage
- Phù hợp cho: hiển thị dữ liệu tĩnh, fetch API, trang không cần tương tác

Client Components ("use client"):
- Render trên client (trình duyệt)
- Dùng được React hooks và Browser APIs
- Cần có "use client" ở dòng đầu tiên
- Phù hợp cho: form, button tương tác, animation, real-time updates

Quy tắc vàng: Mặc định dùng Server Component. Chỉ thêm "use client" khi thực sự cần tương tác. Tách phần tương tác thành component con nhỏ thay vì đặt "use client" cho cả trang.

Ví dụ trong bài lab: Trang bài viết blog là Server Component (fetch data), nhưng nút LikeButton là Client Component riêng biệt.`,
    date: "2025-03-01",
    category: "Công nghệ",
    author: "Phùng Võ Quốc Hiển",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
