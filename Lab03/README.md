# CTK46 — Bài Thực Hành 03

**Môn học:** Các công nghệ mới trong phát triển phần mềm  
**Sinh viên:** Phùng Võ Quốc Hiển — MSSV: 2212364  
**Lớp:** CTK46-PM — Khoa Công nghệ Thông tin, Đại học Đà Lạt  
**GitHub:** [Lacia1803](https://github.com/Lacia1803)

---

## Tính năng mới trong Lab 03

| Tính năng         | Mô tả                                        |
| ----------------- | -------------------------------------------- |
| Server-side Fetch | Blog lấy dữ liệu từ JSONPlaceholder API      |
| API Routes        | GET / POST / DELETE / PUT cho Guestbook      |
| Server Actions    | Form Guestbook + Contact dùng `"use server"` |
| Zod Validation    | Schema validation cho tất cả form            |
| Bài tập nộp điểm  | Trang `/countries` — REST Countries API      |

## Hướng dẫn chạy

### Cài đặt dependencies
```bash
npm install
```

### Chạy development server
```bash
npm run dev
```

### Truy cập ứng dụng
- **Port mặc định:** http://localhost:3000
- **Nếu port 3000 bị chiếm:** Next.js sẽ tự động dùng port tiếp theo (3001, 3002, 3003, ...)
- **Kiểm tra terminal:** Xem thông báo khi chạy `npm run dev` để biết port thực tế

**Ví dụ output:**
```
⚠ Port 3000 is in use, using available port 3003 instead.
   ▲ Next.js 15.5.15
   - Local:        http://localhost:3003
```

### Build for production
```bash
npm run build
npm run start
```

### Lint code
```bash
npm run lint
```

## Cấu trúc mới (so với Lab 02)

```
src/
├── types/
│   ├── post.ts           ← Types cho JSONPlaceholder
│   └── country.ts        ← Types cho REST Countries API
├── data/
│   └── guestbook.ts      ← In-memory data store
├── app/
│   ├── blog/
│   │   ├── page.tsx      ← Server fetch từ JSONPlaceholder
│   │   └── [id]/page.tsx ← Fetch post + author + comments (Promise.all)
│   ├── api/
│   │   └── guestbook/
│   │       ├── route.ts       ← GET (có ?limit) + POST
│   │       └── [id]/route.ts  ← DELETE + PUT
│   ├── guestbook/
│   │   ├── page.tsx      ← Server Component
│   │   └── actions.ts    ← Server Actions + Zod
│   ├── contact/
│   │   ├── page.tsx      ← Form với useActionState
│   │   └── actions.ts    ← Server Action + Zod 4 trường
│   └── countries/        ← Bài tập nộp điểm
│       ├── page.tsx      ← Danh sách ~250 quốc gia (grid responsive)
│       ├── loading.tsx   ← Skeleton 12 card
│       └── [code]/
│           ├── page.tsx      ← Chi tiết quốc gia + biên giới
│           ├── loading.tsx
│           └── not-found.tsx
└── components/
    ├── guestbook-form.tsx ← useActionState + Zod errors
    └── delete-button.tsx  ← Loading state "Đang xóa..."
```

## API test (Guestbook)

```bash
# Lấy danh sách
curl http://localhost:3000/api/guestbook

# Lấy 2 entry gần nhất
curl "http://localhost:3000/api/guestbook?limit=2"

# Thêm mới
curl -X POST http://localhost:3000/api/guestbook \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","message":"Hello!"}'

# Xóa
curl -X DELETE http://localhost:3000/api/guestbook/1
```
