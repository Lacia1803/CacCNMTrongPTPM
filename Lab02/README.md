# CTK46 — Bài Thực Hành 02

**Môn học:** Các công nghệ mới trong phát triển phần mềm  
**Sinh viên:** Phùng Võ Quốc Hiển — MSSV: 2212364  
**Lớp:** CTK46-PM — Khoa Công nghệ Thông tin, Đại học Đà Lạt  
**GitHub:** [Lacia1803](https://github.com/Lacia1803)

---

## Mô tả dự án

Website **Portfolio/Blog cá nhân** xây dựng với **Next.JS 15 App Router** và **Tailwind CSS**.

Bài lab này tập trung vào việc:

- Học cách sử dụng Next.js App Router và file-based routing
- Xây dựng các trang động với dynamic routes
- Xử lý loading states, error boundaries, và custom 404 pages
- Sử dụng Server Components và Client Components hiệu quả
- Thiết kế giao diện responsive với Tailwind CSS

---

## Các trang & tính năng

| URL            | Mô tả                                  |
| -------------- | -------------------------------------- |
| `/`            | Trang chủ — Hero section, kỹ năng, CTA |
| `/about`       | Giới thiệu bản thân chi tiết           |
| `/blog`        | Danh sách bài viết (5 bài mock)        |
| `/blog/[slug]` | Chi tiết bài viết — Dynamic Route      |
| `/projects`    | Danh sách 5 dự án đã thực hiện         |
| `/skills`      | Kỹ năng + Demo Client Components       |
| `/contact`     | Thông tin liên hệ                      |

---

## Kiến thức áp dụng

- ✅ **App Router & File-based Routing** — Tổ chức routes theo cấu trúc folder
- ✅ **Nested Layouts** — Root Layout + Blog Layout với sidebar
- ✅ **Dynamic Routes** — `/blog/[slug]` với `generateStaticParams`
- ✅ **Loading States** — `loading.tsx` skeleton loading
- ✅ **Error Handling** — `error.tsx` Error Boundary (phải là Client Component)
- ✅ **Custom 404 Pages** — `not-found.tsx` cho blog + global
- ✅ **Server vs Client Components** — Server Components (default) + Client Components
- ✅ **Interactive Components** — LikeButton, Counter, ThemeToggle, CopyButton
- ✅ **Responsive Design** — Tailwind CSS (`grid-cols-1 md:grid-cols-2 lg:grid-cols-...`)

---

## Hướng dẫn chạy

### Cài đặt & khởi động

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev
```

**Truy cập:** [http://localhost:3000](http://localhost:3000)

Nếu port 3000 đang bị chiếm, Next.js sẽ tự động dùng port tiếp theo (3001, 3002, ...).

---

## Cấu trúc thư mục

```
src/
├── app/
│   ├── layout.tsx              ← Root layout (Navbar + Footer)
│   ├── page.tsx                ← Trang chủ (/)
│   ├── not-found.tsx           ← 404 page (global)
│   ├── error.tsx               ← Error boundary (global, Client Component)
│   ├── globals.css             ← Global styles
│   ├── about/
│   │   └── page.tsx            ← /about
│   ├── contact/
│   │   └── page.tsx            ← /contact
│   ├── projects/
│   │   └── page.tsx            ← /projects
│   ├── skills/
│   │   └── page.tsx            ← /skills
│   └── blog/
│       ├── layout.tsx          ← Blog layout (nested, có sidebar)
│       ├── page.tsx            ← /blog (danh sách bài viết)
│       ├── loading.tsx         ← Loading skeleton
│       ├── error.tsx           ← Error boundary cho blog
│       └── [slug]/             ← Dynamic route
│           ├── page.tsx        ← /blog/:slug
│           ├── loading.tsx     ← Loading skeleton
│           └── not-found.tsx   ← 404 cho bài viết
├── components/
│   ├── navbar.tsx              ← Navigation bar
│   ├── footer.tsx              ← Footer
│   ├── like-button.tsx         ← Client Component (interactive)
│   ├── counter.tsx             ← Client Component (state)
│   ├── theme-toggle.tsx        ← Client Component (dark mode)
│   └── copy-button.tsx         ← Client Component (copy text)
└── data/
    └── posts.ts                ← Mock blog data (5 bài viết)
```

---

## Ghi chú kỹ thuật

- **Server Components by default:** Tất cả components là Server Components trừ những cái có `'use client'`
- **Dynamic Params:** Blog slug được generate từ mock data, trong production có thể từ database
- **Error Boundaries:** Phải là Client Components nên có `'use client'` ở đầu file
- **Responsive Layout:** Sử dụng Tailwind breakpoints (md, lg) để thiết kế responsive
- **No Database:** Lab này sử dụng mock data từ `posts.ts`, Lab 03 sẽ lấy từ API
