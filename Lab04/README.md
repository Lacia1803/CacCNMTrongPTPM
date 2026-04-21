# Simple Blog

Ứng dụng Blog cá nhân xây dựng với **Next.JS 15** và **Supabase**.

## Tính năng

- ✅ Đăng ký / Đăng nhập (Email + GitHub OAuth)
- ✅ Quản lý bài viết (CRUD: tạo, đọc, sửa, xóa)
- ✅ Trạng thái bài viết: Bản nháp / Xuất bản
- ✅ Bình luận realtime
- ✅ Row Level Security — bảo mật cấp database
- ✅ Protected Routes với Next.JS Middleware

## Cài đặt

### 1. Clone và cài dependencies

```bash
git clone <repo-url>
cd simple-blog
npm install
```

### 2. Cấu hình Supabase

```bash
cp .env.local.example .env.local
```

Điền `NEXT_PUBLIC_SUPABASE_URL` và `NEXT_PUBLIC_SUPABASE_ANON_KEY` từ Supabase Dashboard → Project Settings → API.

### 3. Chạy SQL Schema

Vào **Supabase Dashboard → SQL Editor**, chạy file `supabase/schema.sql`.

### 4. Chạy ứng dụng

```bash
npm run dev
```

Truy cập [http://localhost:3000](http://localhost:3000).

## Cấu trúc thư mục

```
src/
├── app/
│   ├── auth/callback/      # OAuth callback
│   ├── dashboard/          # Protected: quản lý bài viết
│   ├── login/              # Trang đăng nhập
│   ├── posts/[slug]/       # Chi tiết bài viết
│   ├── register/           # Trang đăng ký
│   └── actions/auth.ts     # Server Action: logout
├── components/
│   ├── auth/               # RegisterForm, LoginForm
│   ├── dashboard/          # PostList, PostForm, DeletePostButton
│   ├── layout/             # Header
│   └── posts/              # CommentForm, CommentList, RealtimeComments
├── lib/supabase/           # Client, Server, Middleware utilities
├── middleware.ts            # Route protection
└── types/database.ts       # TypeScript types
```

## Sinh viên

- **Họ tên:** Phùng Võ Quốc Hiển  
- **MSSV:** 2212364  
- **Lớp:** CTK46-PM  
- **Môn:** Các công nghệ mới trong phát triển phần mềm
