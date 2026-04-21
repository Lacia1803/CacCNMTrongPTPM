# CTK46 — Bài Thực Hành 03

**Môn học:** Các công nghệ mới trong phát triển phần mềm  
**Sinh viên:** Phùng Võ Quốc Hiển — MSSV: 2212364  
**Lớp:** CTK46-PM — Khoa Công nghệ Thông tin, Đại học Đà Lạt  
**GitHub:** [Lacia1803](https://github.com/Lacia1803)

---

## Mô tả dự án

Mở rộng Lab 02 với các tính năng **backend**: API Routes, Server Actions, Form Validation, và tích hợp các external API.

Bài lab này tập trung vào việc:

- Xây dựng REST API endpoints với API Routes
- Sử dụng Server Actions để xử lý form submissions
- Validation dữ liệu với Zod trên server-side
- Fetch dữ liệu từ external APIs (JSONPlaceholder, REST Countries)
- Quản lý trạng thái form với `useActionState` hook
- Xây dựng tính năng Guestbook (CRUD) với in-memory storage

---

## Tính năng mới (so với Lab 02)

| Tính năng             | Mô tả                                   |
| --------------------- | --------------------------------------- |
| **Server-side Fetch** | Blog lấy dữ liệu từ JSONPlaceholder API |
| **API Routes**        | GET / POST / DELETE / PUT cho Guestbook |
| **Server Actions**    | Form handling với `"use server"`        |
| **Zod Validation**    | Schema validation cho tất cả form       |
| **Countries**         | Bài tập nộp điểm — REST Countries API   |

---

## Kiến thức áp dụng

- ✅ **Server-side Data Fetching** — Fetch từ external APIs trong Server Components
- ✅ **API Routes** — Tạo endpoint: `GET`, `POST`, `DELETE`, `PUT`
- ✅ **Server Actions** — Form submission với `"use server"` directive
- ✅ **Zod Schema Validation** — Runtime type checking & validation
- ✅ **useActionState Hook** — Form state & pending states
- ✅ **Guestbook CRUD** — API backend quản lý dữ liệu in-memory
- ✅ **Promise.all()** — Parallel requests (post + author + comments)
- ✅ **Dynamic Route** — `/countries/[code]` với API data
- ✅ **Responsive Grid** — Danh sách ~250 quốc gia

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

### Build for production

```bash
npm run build
npm run start
```

### Lint code

```bash
npm run lint
```

**Lưu ý:** Nếu port 3000 bị chiếm, Next.js sẽ tự động chọn port tiếp theo (3001, 3002, 3003, ...)

---

## Cấu trúc thư mục

```
src/
├── app/
│   ├── layout.tsx              ← Root layout
│   ├── page.tsx                ← Trang chủ
│   ├── error.tsx               ← Global error boundary
│   ├── not-found.tsx           ← Global 404
│   ├── globals.css
│   ├── about/
│   │   └── page.tsx            ← /about
│   ├── projects/
│   │   └── page.tsx            ← /projects
│   ├── skills/
│   │   └── page.tsx            ← /skills
│   ├── contact/                ← Contact form + Server Actions
│   │   ├── page.tsx
│   │   └── actions.ts          ← Server Action + Zod validation
│   ├── blog/                   ← Blog từ JSONPlaceholder API
│   │   ├── layout.tsx
│   │   ├── page.tsx            ← /blog (danh sách)
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   └── [id]/               ← Dynamic route
│   │       ├── page.tsx        ← /blog/:id (fetch post + author + comments)
│   │       ├── loading.tsx
│   │       └── not-found.tsx
│   ├── guestbook/              ← Guestbook UI + Server Actions
│   │   ├── page.tsx            ← /guestbook
│   │   ├── actions.ts          ← Server Actions
│   │   └── guestbook-form.tsx  ← Form component
│   ├── countries/              ← Bài tập nộp điểm (REST Countries)
│   │   ├── page.tsx            ← /countries (danh sách ~250 quốc gia)
│   │   ├── loading.tsx         ← Skeleton 12 cards
│   │   └── [code]/             ← Dynamic route
│   │       ├── page.tsx        ← /countries/:code (chi tiết)
│   │       ├── loading.tsx
│   │       └── not-found.tsx
│   └── api/                    ← API endpoints
│       └── guestbook/
│           ├── route.ts        ← GET (có ?limit) + POST
│           └── [id]/route.ts   ← DELETE + PUT
├── components/
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── like-button.tsx
│   ├── counter.tsx
│   ├── theme-toggle.tsx
│   ├── copy-button.tsx
│   ├── guestbook-form.tsx      ← useActionState + Zod validation
│   └── delete-button.tsx       ← Loading state "Đang xóa..."
├── types/
│   ├── post.ts                 ← JSONPlaceholder types
│   └── country.ts              ← REST Countries types
└── data/
    ├── posts.ts                ← Mock posts (fallback)
    └── guestbook.ts            ← In-memory guestbook storage
```

---

## API Endpoints (Guestbook)

### GET — Lấy danh sách

```bash
curl http://localhost:3000/api/guestbook

# Với limit (2 entry gần nhất)
curl "http://localhost:3000/api/guestbook?limit=2"
```

### POST — Thêm mới

```bash
curl -X POST http://localhost:3000/api/guestbook \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","message":"Hello World!"}'
```

### PUT — Cập nhật

```bash
curl -X PUT http://localhost:3000/api/guestbook/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated","message":"Modified message"}'
```

### DELETE — Xóa

```bash
curl -X DELETE http://localhost:3000/api/guestbook/1
```

---

## Ghi chú kỹ thuật

- **In-memory Storage:** Guestbook data được lưu trong `data/guestbook.ts`, reset khi reload server
- **Zod Validation:** Tất cả form (Contact, Guestbook) đều được validate bằng Zod trước khi xử lý
- **JSONPlaceholder:** Fetch blog posts từ `https://jsonplaceholder.typicode.com/posts` — cập nhật realtime
- **REST Countries:** ~250 quốc gia từ `https://restcountries.com/v3.1/all` — có thông tin biên giới
- **Promise.all():** Tối ưu performance khi fetch parallel requests (post + author + comments)
- **Server Actions:** Form submission không cần tạo API endpoint, dùng Server Actions tiếp ngay
- **Bài tập:** Trang `/countries` là bài tập nộp điểm, yêu cầu hiển thị danh sách quốc gia responsive
