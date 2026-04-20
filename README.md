# CTK46 - Các công nghệ mới trong Phát triển phần mềm

**Môn học:** Các công nghệ mới trong Phát triển phần mềm
**Giảng viên:** Nguyễn Trọng Hiếu
**Sinh viên:** Phùng Võ Quốc Hiển - MSSV: 2212364
**Lớp:** CTK46-PM - Khoa Công nghệ Thông tin, Đại học Đà Lạt
**GitHub:** [Lacia1803](https://github.com/Lacia1803)

---

## Giới thiệu

Repository này tổng hợp các bài thực hành của môn học, hiện gồm:

- [Lab02](Lab02/README.md): Xây dựng website Portfolio/Blog cá nhân với Next.js 15 App Router và Tailwind CSS.
- [Lab03](Lab03/README.md): Mở rộng ứng dụng với Server Actions, API Routes, Zod Validation, Guestbook và bài tập bổ sung về Countries.

Mỗi bài lab đều có README riêng mô tả chi tiết tính năng, cấu trúc thư mục và cách chạy.

## Mục tiêu học phần

- Làm quen với Next.js App Router và mô hình Server Components / Client Components.
- Thực hành định tuyến file-based, nested layout, dynamic route và các trang xử lý lỗi.
- Ứng dụng API Routes, Server Actions và validation phía server với Zod.
- Tích hợp dữ liệu từ API bên ngoài và xây dựng giao diện responsive.

## Công nghệ sử dụng

- Next.js 15
- React
- TypeScript
- Tailwind CSS
- Zod
- JSONPlaceholder API
- REST Countries API

## Hướng dẫn chạy

Do mỗi bài lab có thư mục và cấu hình riêng, hãy chạy trong đúng thư mục tương ứng.

### Lab 02

```bash
cd Lab02
npm install
npm run dev
```

### Lab 03

```bash
cd Lab03
npm install
npm run dev
```

Sau đó mở trình duyệt tại địa chỉ được hiển thị trong terminal, mặc định là `http://localhost:3000`.

## Cấu trúc tổng quan

```text
.
├── README.md
├── Lab02/
│   ├── README.md
│   ├── next-env.d.ts
│   ├── next.config.ts
│   ├── package.json
│   ├── postcss.config.mjs
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── src/
│       ├── app/
│       │   ├── about/
│       │   │   └── page.tsx
│       │   ├── blog/
│       │   │   ├── [slug]/
│       │   │   │   ├── loading.tsx
│       │   │   │   ├── not-found.tsx
│       │   │   │   └── page.tsx
│       │   │   ├── error.tsx
│       │   │   ├── layout.tsx
│       │   │   ├── loading.tsx
│       │   │   └── page.tsx
│       │   ├── contact/
│       │   │   └── page.tsx
│       │   ├── error.tsx
│       │   ├── globals.css
│       │   ├── layout.tsx
│       │   ├── not-found.tsx
│       │   ├── page.tsx
│       │   ├── projects/
│       │   │   └── page.tsx
│       │   └── skills/
│       │       └── page.tsx
│       ├── components/
│       │   ├── copy-button.tsx
│       │   ├── counter.tsx
│       │   ├── footer.tsx
│       │   ├── like-button.tsx
│       │   ├── navbar.tsx
│       │   └── theme-toggle.tsx
│       └── data/
│           └── posts.ts
└── Lab03/
    ├── README.md
    ├── next-env.d.ts
    ├── next.config.ts
    ├── package.json
    ├── postcss.config.mjs
    ├── tailwind.config.ts
    ├── tsconfig.json
    └── src/
        ├── app/
        │   ├── about/
        │   │   └── page.tsx
        │   ├── api/
        │   │   └── guestbook/
        │   │       ├── [id]/
        │   │       │   └── route.ts
        │   │       └── route.ts
        │   ├── blog/
        │   │   ├── [id]/
        │   │   │   ├── loading.tsx
        │   │   │   ├── not-found.tsx
        │   │   │   └── page.tsx
        │   │   ├── error.tsx
        │   │   ├── layout.tsx
        │   │   ├── loading.tsx
        │   │   └── page.tsx
        │   ├── contact/
        │   │   ├── actions.ts
        │   │   └── page.tsx
        │   ├── countries/
        │   │   ├── [code]/
        │   │   │   ├── loading.tsx
        │   │   │   ├── not-found.tsx
        │   │   │   └── page.tsx
        │   │   ├── loading.tsx
        │   │   └── page.tsx
        │   ├── error.tsx
        │   ├── globals.css
        │   ├── guestbook/
        │   │   ├── actions.ts
        │   │   └── page.tsx
        │   ├── layout.tsx
        │   ├── not-found.tsx
        │   ├── page.tsx
        │   ├── projects/
        │   │   └── page.tsx
        │   └── skills/
        │       └── page.tsx
        ├── components/
        │   ├── copy-button.tsx
        │   ├── counter.tsx
        │   ├── delete-button.tsx
        │   ├── footer.tsx
        │   ├── guestbook-form.tsx
        │   ├── like-button.tsx
        │   ├── navbar.tsx
        │   └── theme-toggle.tsx
        ├── data/
        │   ├── guestbook.ts
        │   └── posts.ts
        └── types/
            ├── country.ts
            └── post.ts
```

## Ghi chú

- Các README bên trong từng lab chứa mô tả chi tiết hơn về tính năng và cấu trúc thư mục.
- Nếu cổng `3000` đang bị chiếm, Next.js sẽ tự động chọn cổng tiếp theo.
