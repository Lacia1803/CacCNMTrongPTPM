"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
        isDark
          ? "bg-gray-800 border-gray-700 text-yellow-400"
          : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
      }`}
      aria-label="Chuyển đổi giao diện"
    >
      <span>{isDark ? "🌙" : "☀️"}</span>
      <span>{isDark ? "Giao diện tối" : "Giao diện sáng"}</span>
    </button>
  );
}
