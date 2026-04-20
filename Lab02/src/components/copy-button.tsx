"use client";

import { useState } from "react";

interface CopyButtonProps {
  text: string;
}

export default function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-2 px-3 py-1 rounded text-sm border transition-colors ${
        copied
          ? "bg-green-50 border-green-200 text-green-600"
          : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
      }`}
    >
      {copied ? "✅ Đã copy!" : "📋 Copy"}
    </button>
  );
}
