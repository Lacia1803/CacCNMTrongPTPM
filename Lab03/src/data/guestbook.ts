export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

export const guestbookEntries: GuestbookEntry[] = [
  {
    id: "1",
    name: "Ngô Đăng Khoa",
    message: "Portfolio đẹp lắm! Nhớ push code lên GitHub trước deadline nhé 😄",
    createdAt: new Date("2025-03-01").toISOString(),
  },
  {
    id: "2",
    name: "Liên Vũ Thành Đạt",
    message: "Next.JS App Router thực sự hay hơn Pages Router nhiều. Chúc team hoàn thành dự án đúng hạn!",
    createdAt: new Date("2025-03-05").toISOString(),
  },
  {
    id: "3",
    name: "Trương Thể Thiên",
    message: "Giao diện đẹp, responsive tốt. Server Actions + Zod validation là combo cực hay!",
    createdAt: new Date("2025-03-10").toISOString(),
  },
];
