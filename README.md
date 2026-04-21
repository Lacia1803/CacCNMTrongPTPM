# CTK46 - Các công nghệ mới trong Phát triển phần mềm

**Môn học:** Các công nghệ mới trong Phát triển phần mềm  
**Giảng viên:** Nguyễn Trọng Hiếu  
**Sinh viên:** Phùng Võ Quốc Hiển — MSSV: 2212364  
**Lớp:** CTK46-PM — Khoa Công nghệ Thông tin, Đại học Đà Lạt  
**GitHub:** [Lacia1803](https://github.com/Lacia1803)

---

## Giới thiệu

Repository này tổng hợp các bài thực hành của môn học "Các công nghệ mới trong Phát triển phần mềm", gồm 4 bài lab luyện tập các kỹ năng xây dựng ứng dụng web với **Next.js 15** và các công nghệ hiện đại.

### Danh sách các bài lab

| Lab        | Tên                     | Công nghệ chính                      | Mô tả                                                                    |
| ---------- | ----------------------- | ------------------------------------ | ------------------------------------------------------------------------ |
| **Lab 02** | Portfolio/Blog cá nhân  | Next.js 15, App Router, Tailwind CSS | Xây dựng website portfolio với routing, layouts, dynamic routes          |
| **Lab 03** | Mở rộng với API & Form  | API Routes, Server Actions, Zod      | Tích hợp API bên ngoài, xây dựng form với validation, Guestbook          |
| **Lab 04** | Blog với Authentication | Supabase, Row Level Security, OAuth  | Hệ thống blog đầy đủ với đăng nhập, quản lý bài viết, bình luận realtime |

---

## Mục tiêu học phần

- ✅ Làm quen với **Next.js App Router** và mô hình **Server Components / Client Components**
- ✅ Thực hành **routing file-based**, nested layout, dynamic route và error handling
- ✅ Ứng dụng **API Routes**, **Server Actions** và **validation** phía server với Zod
- ✅ Tích hợp dữ liệu từ **API bên ngoài** và xây dựng giao diện **responsive**
- ✅ Xây dựng ứng dụng **full-stack** với authentication, database, realtime updates

---

## Công nghệ sử dụng

### Core Stack

- **Next.js 15** — React framework với App Router
- **React** — UI library
- **TypeScript** — Type safety

### Styling & UI

- **Tailwind CSS** — Utility-first CSS framework

### Backend & Database

- **API Routes** — Endpoint xử lý server-side
- **Server Actions** — Form handling & mutations
- **Supabase** — PostgreSQL + Authentication + Realtime

### External APIs

- **JSONPlaceholder API** — Mock blog data
- **REST Countries API** — Data về các quốc gia

### Validation & Security

- **Zod** — Schema validation
- **Row Level Security (RLS)** — Bảo mật cấp database

---

## Hướng dẫn chạy

Mỗi lab có cấu hình, dependencies riêng. Hãy chạy từ thư mục tương ứng:

### Lab 02 — Portfolio/Blog

```bash
cd Lab02
npm install
npm run dev
```

**Truy cập:** http://localhost:3000

### Lab 03 — API Routes & Server Actions

```bash
cd Lab03
npm install
npm run dev
```

**Truy cập:** http://localhost:3000

### Lab 04 — Full-stack Blog với Supabase

```bash
cd Lab04
npm install
cp .env.local.example .env.local
# Điền NEXT_PUBLIC_SUPABASE_URL và NEXT_PUBLIC_SUPABASE_ANON_KEY
npm run dev
```

**Truy cập:** http://localhost:3000

---

## Cấu trúc thư mục dự án

```
.
├── README.md                          # File này
├── Lab02/                             # Bài lab 02
│   ├── README.md                      # Mô tả chi tiết Lab 02
│   ├── next.config.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   ├── postcss.config.mjs
│   ├── next-env.d.ts
│   └── src/
│       ├── app/                       # Next.js App Router
│       │   ├── layout.tsx             # Root layout (Navbar + Footer)
│       │   ├── page.tsx               # Trang chủ (/)
│       │   ├── error.tsx              # Error boundary
│       │   ├── not-found.tsx          # 404 tùy chỉnh
│       │   ├── globals.css
│       │   ├── about/page.tsx         # Trang About
│       │   ├── contact/page.tsx       # Trang Contact
│       │   ├── projects/page.tsx      # Trang Projects
│       │   ├── skills/page.tsx        # Trang Skills
│       │   └── blog/                  # Blog section (nested layout)
│       │       ├── layout.tsx         # Blog layout
│       │       ├── page.tsx           # /blog (danh sách)
│       │       ├── error.tsx
│       │       ├── loading.tsx
│       │       └── [slug]/            # Dynamic route
│       │           ├── page.tsx
│       │           ├── loading.tsx
│       │           └── not-found.tsx
│       ├── components/                # Reusable components
│       │   ├── navbar.tsx
│       │   ├── footer.tsx
│       │   ├── like-button.tsx        # Client Component
│       │   ├── counter.tsx            # Client Component
│       │   ├── theme-toggle.tsx       # Client Component
│       │   └── copy-button.tsx        # Client Component
│       └── data/
│           └── posts.ts               # Mock blog data
│
├── Lab03/                             # Bài lab 03
│   ├── README.md                      # Mô tả chi tiết Lab 03
│   ├── next.config.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   ├── postcss.config.mjs
│   ├── next-env.d.ts
│   └── src/
│       ├── app/
│       │   ├── layout.tsx
│       │   ├── page.tsx
│       │   ├── error.tsx
│       │   ├── not-found.tsx
│       │   ├── globals.css
│       │   ├── about/page.tsx
│       │   ├── contact/                # Form + Server Actions + Zod
│       │   │   ├── page.tsx
│       │   │   └── actions.ts
│       │   ├── projects/page.tsx
│       │   ├── skills/page.tsx
│       │   ├── guestbook/              # Guestbook UI
│       │   │   ├── page.tsx
│       │   │   └── actions.ts
│       │   ├── blog/                   # Blog từ JSONPlaceholder API
│       │   │   ├── layout.tsx
│       │   │   ├── page.tsx
│       │   │   ├── error.tsx
│       │   │   ├── loading.tsx
│       │   │   └── [id]/               # Dynamic route
│       │   │       ├── page.tsx
│       │   │       ├── loading.tsx
│       │   │       └── not-found.tsx
│       │   ├── countries/              # Bài tập: REST Countries API
│       │   │   ├── page.tsx            # Danh sách quốc gia
│       │   │   ├── loading.tsx
│       │   │   └── [code]/
│       │   │       ├── page.tsx        # Chi tiết quốc gia
│       │   │       ├── loading.tsx
│       │   │       └── not-found.tsx
│       │   └── api/                    # API Routes
│       │       └── guestbook/
│       │           ├── route.ts        # GET + POST
│       │           └── [id]/route.ts   # DELETE + PUT
│       ├── components/
│       │   ├── navbar.tsx
│       │   ├── footer.tsx
│       │   ├── like-button.tsx
│       │   ├── counter.tsx
│       │   ├── theme-toggle.tsx
│       │   ├── copy-button.tsx
│       │   ├── guestbook-form.tsx      # Form + useActionState
│       │   └── delete-button.tsx       # DELETE button
│       ├── types/
│       │   ├── post.ts                 # JSONPlaceholder types
│       │   └── country.ts              # REST Countries types
│       └── data/
│           ├── posts.ts
│           └── guestbook.ts            # In-memory store
│
└── Lab04/                             # Bài lab 04
    ├── README.md                      # Mô tả chi tiết Lab 04
    ├── next.config.ts
    ├── package.json
    ├── tsconfig.json
    ├── tailwind.config.ts
    ├── postcss.config.mjs
    ├── next-env.d.ts
    ├── .env.local.example
    ├── middleware.ts                  # Route protection
    └── src/
        ├── app/
        │   ├── layout.tsx
        │   ├── page.tsx
        │   ├── middleware.ts
        │   ├── globals.css
        │   ├── actions/
        │   │   └── auth.ts             # Logout server action
        │   ├── auth/
        │   │   └── callback/route.ts   # OAuth callback
        │   ├── login/page.tsx          # Login page
        │   ├── register/page.tsx       # Register page
        │   ├── dashboard/              # Protected: Quản lý bài viết
        │   │   ├── page.tsx
        │   │   ├── new/page.tsx
        │   │   └── edit/[id]/page.tsx
        │   └── posts/[slug]/page.tsx   # Chi tiết bài viết + Comments
        ├── components/
        │   ├── layout/
        │   │   └── header.tsx
        │   ├── auth/
        │   │   ├── login-form.tsx
        │   │   └── register-form.tsx
        │   ├── dashboard/
        │   │   ├── post-list.tsx
        │   │   ├── post-form.tsx
        │   │   └── delete-post-button.tsx
        │   └── posts/
        │       ├── comment-form.tsx
        │       ├── comment-list.tsx
        │       └── realtime-comments.tsx
        ├── lib/supabase/
        │   ├── client.ts               # Supabase client
        │   ├── server.ts               # Supabase server
        │   └── middleware.ts           # Auth middleware
        ├── types/
        │   └── database.ts             # Database types
        └── middleware.ts               # Protected routes
```

---

## Tóm tắt tính năng từng Lab

### Lab 02 — Portfolio/Blog cơ bản

- 📄 **Routing:** File-based routing, nested layouts
- 🎨 **Components:** Server Components + Client Components
- 📝 **Dynamic Routes:** `/blog/[slug]` với `generateStaticParams`
- ⚠️ **Error Handling:** `error.tsx` (Error Boundary), `not-found.tsx` (404)
- 🔄 **Loading:** `loading.tsx` skeleton loading
- 🎯 **Responsive Design:** Tailwind CSS

### Lab 03 — API Routes & Server Actions

- 🌐 **External API:** JSONPlaceholder (fetch bài viết từ server)
- 🔗 **API Routes:** GET/POST/DELETE/PUT cho Guestbook
- 🚀 **Server Actions:** Form handling với `"use server"`
- ✅ **Validation:** Zod schema validation
- 🌍 **Countries Feature:** REST Countries API integration
- 📊 **Advanced Fetch:** Promise.all() cho parallel requests

### Lab 04 — Full-stack Blog

- 🔐 **Authentication:** Email + GitHub OAuth
- 💾 **Database:** Supabase PostgreSQL
- 🔒 **Security:** Row Level Security (RLS), Protected routes
- 📝 **CRUD:** Tạo, sửa, xóa bài viết
- 💬 **Realtime:** Bình luận realtime
- 🛡️ **Middleware:** Route protection với Next.js Middleware

---

## Ghi chú

- **Port:** Nếu port `3000` đang bị chiếm, Next.js sẽ tự động chọn port tiếp theo (3001, 3002, ...)
- **Chi tiết:** Xem README bên trong từng Lab để có mô tả chuyên sâu hơn
- **API Testing:** Lab 03 và 04 có hướng dẫn test API với curl

---

## Thông tin liên hệ

**Sinh viên:** Phùng Võ Quốc Hiển (Hien)  
**MSSV:** 2212364  
**Lớp:** CTK46-PM  
**Đại học Đà Lạt** — Khoa Công nghệ Thông tin

GitHub: [Lacia1803](https://github.com/Lacia1803)
