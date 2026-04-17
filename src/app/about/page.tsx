export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Giới thiệu</h1>
      <div className="space-y-4 text-gray-700">
        <p>
          Xin chào! Tôi là <strong>Phùng Võ Quốc Hiển</strong>, sinh viên năm 4
          ngành Công nghệ Thông tin tại Đại học Đà Lạt (MSSV: 2212364, lớp
          CTK46-PM). Tôi đóng vai trò <strong>Frontend Lead</strong> trong các
          dự án nhóm và có niềm đam mê mạnh mẽ với lập trình giao diện web.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Kỹ năng</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>JavaScript / TypeScript</li>
          <li>React & Next.JS</li>
          <li>Tailwind CSS</li>
          <li>Git & GitHub</li>
          <li>Node.js / Express</li>
          <li>SQL & PostgreSQL</li>
          <li>Docker & CI/CD cơ bản</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Học vấn</h2>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="font-medium">Đại học Đà Lạt</p>
          <p className="text-gray-500">
            Cử nhân Công nghệ Thông tin — Khoa CNTT (2022 – 2026)
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Chuyên ngành: Phát triển phần mềm · Lớp: CTK46-PM
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Sở thích</h2>
        <p>
          Ngoài việc học, tôi thích tập gym tại nhà, tìm hiểu về thế giới khoa
          học viễn tưởng (đặc biệt vũ trụ Dune), và nghiên cứu về các thiết bị
          gaming như bàn phím cơ.
        </p>
      </div>
    </div>
  );
}
