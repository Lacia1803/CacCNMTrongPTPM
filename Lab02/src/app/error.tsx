"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-24 text-center">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Đã xảy ra lỗi!</h2>
      <p className="text-gray-600 mb-6">
        {error.message || "Có lỗi không mong muốn xảy ra. Vui lòng thử lại."}
      </p>
      <button
        onClick={() => reset()}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Thử lại
      </button>
    </div>
  );
}
