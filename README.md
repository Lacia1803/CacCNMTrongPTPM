# CTK46 — Bài Thực Hành 02

**Môn học:** Các công nghệ mới trong phát triển phần mềm  
**Sinh viên:** Phùng Võ Quốc Hiển — MSSV: 2212364  
**Lớp:** CTK46-PM — Khoa Công nghệ Thông tin, Đại học Đà Lạt  
**GitHub:** [Lacia1803](https://github.com/Lacia1803)

---

## Nội dung bài thực hành

Website Portfolio/Blog cá nhân xây dựng với **Next.JS 15 App Router** và **Tailwind CSS**.

### Các trang đã xây dựng

| URL            | Mô tả                                  |
| -------------- | -------------------------------------- |
| `/`            | Trang chủ — Hero section, kỹ năng, CTA |
| `/about`       | Giới thiệu bản thân chi tiết           |
| `/blog`        | Danh sách bài viết (5 bài)             |
| `/blog/[slug]` | Chi tiết bài viết — Dynamic Route      |
| `/projects`    | Danh sách 5 dự án đã thực hiện         |
| `/skills`      | Kỹ năng + Demo Client Components       |
| `/contact`     | Thông tin liên hệ                      |

### Kiến thức áp dụng

- ✅ App Router & file-based routing
- ✅ Nested Layouts (Root Layout + Blog Layout với sidebar)
- ✅ Dynamic Routes `[slug]` với `generateStaticParams`
- ✅ `loading.tsx` — Skeleton loading
- ✅ `error.tsx` — Error Boundary (phải là Client Component)
- ✅ `not-found.tsx` — Trang 404 tùy chỉnh (blog + toàn cục)
- ✅ Tailwind CSS Responsive (`grid-cols-1 md:grid-cols-2 lg:grid-cols-...`)
- ✅ Server Components (mặc định)
- ✅ Client Components: `LikeButton`, `Counter`, `ThemeToggle`, `CopyButton`

---

## Hướng dẫn chạy

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev
```

Truy cập: [http://localhost:3000](http://localhost:3000)

---

## Cấu trúc thư mục

```
src/
├── app/
│   ├── layout.tsx          ← Root layout (Navbar + Footer)
│   ├── page.tsx            ← Trang chủ (/)
│   ├── not-found.tsx       ← 404 toàn cục
│   ├── error.tsx           ← Error toàn cục (Client Component)
│   ├── about/page.tsx      ← /about
│   ├── contact/page.tsx    ← /contact
│   ├── projects/page.tsx   ← /projects
│   ├── skills/page.tsx     ← /skills
│   └── blog/
│       ├── layout.tsx      ← Blog layout (có sidebar)
│       ├── page.tsx        ← /blog
│       ├── loading.tsx     ← Skeleton loading
│       ├── error.tsx       ← Error boundary
│       └── [slug]/
│           ├── page.tsx    ← /blog/:slug (Dynamic Route)
│           ├── loading.tsx ← Skeleton cho bài viết
│           └── not-found.tsx ← 404 cho bài viết
├── components/
│   ├── navbar.tsx          ← Navigation bar
│   ├── footer.tsx          ← Footer
│   ├── like-button.tsx     ← Client Component
│   ├── counter.tsx         ← Client Component
│   ├── theme-toggle.tsx    ← Client Component
│   └── copy-button.tsx     ← Client Component
└── data/
    └── posts.ts            ← Mock data bài viết (5 bài)
```
