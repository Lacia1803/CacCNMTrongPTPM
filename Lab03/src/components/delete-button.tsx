"use client";

import { useState } from "react";
import { deleteGuestbookEntry } from "@/app/guestbook/actions";

export default function DeleteButton({ id }: { id: string }) {
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    if (!confirm("Bạn có chắc muốn xóa lời nhắn này?")) return;
    setDeleting(true);
    await deleteGuestbookEntry(id);
    setDeleting(false);
  }

  return (
    <button
      onClick={handleDelete}
      disabled={deleting}
      className="text-xs text-red-400 hover:text-red-600 transition-colors disabled:opacity-50"
    >
      {deleting ? "Đang xóa..." : "Xóa"}
    </button>
  );
}
