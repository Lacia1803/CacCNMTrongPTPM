export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Liên hệ</h1>
      <div className="space-y-4 text-gray-700">
        <p className="text-gray-500">
          Bạn có thể liên hệ với tôi qua các kênh sau:
        </p>
        <div className="bg-gray-50 rounded-lg p-6 space-y-3">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:2212364@dlu.edu.vn"
              className="text-blue-600 hover:underline"
            >
              2212364@dlu.edu.vn
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/Lacia1803"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/Lacia1803
            </a>
          </p>
          <p>
            <strong>Trường:</strong> Đại học Đà Lạt — Khoa Công nghệ Thông tin
          </p>
          <p>
            <strong>Địa chỉ:</strong> 01 Phù Đổng Thiên Vương, Đà Lạt, Lâm Đồng
          </p>
        </div>
      </div>
    </div>
  );
}
