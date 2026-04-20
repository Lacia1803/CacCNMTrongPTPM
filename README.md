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
├── Lab02/
│   └── README.md
└── Lab03/
    └── README.md
```

## Ghi chú

- Các README bên trong từng lab chứa mô tả chi tiết hơn về tính năng và cấu trúc thư mục.
- Nếu cổng `3000` đang bị chiếm, Next.js sẽ tự động chọn cổng tiếp theo.
