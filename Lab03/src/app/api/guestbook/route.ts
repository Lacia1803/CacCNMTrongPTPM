import { NextRequest, NextResponse } from "next/server";
import { guestbookEntries } from "@/data/guestbook";

// GET /api/guestbook — Lấy danh sách tất cả lời nhắn
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit");

  // Bài tập tự làm: hỗ trợ query param ?limit=N
  const result = limit
    ? guestbookEntries.slice(0, parseInt(limit))
    : guestbookEntries;

  return NextResponse.json(result);
}

// POST /api/guestbook — Thêm lời nhắn mới
export async function POST(request: NextRequest) {
  const body = await request.json();

  // Validation (bài tập tự làm Phần 2)
  if (!body.name || !body.message) {
    return NextResponse.json(
      { error: "Tên và lời nhắn là bắt buộc" },
      { status: 400 }
    );
  }
  if (body.name.length < 2 || body.name.length > 50) {
    return NextResponse.json(
      { error: "Tên phải từ 2 đến 50 ký tự" },
      { status: 400 }
    );
  }
  if (body.message.length < 1 || body.message.length > 500) {
    return NextResponse.json(
      { error: "Lời nhắn phải từ 1 đến 500 ký tự" },
      { status: 400 }
    );
  }

  const newEntry = {
    id: Date.now().toString(),
    name: body.name,
    message: body.message,
    createdAt: new Date().toISOString(),
  };

  guestbookEntries.unshift(newEntry);
  return NextResponse.json(newEntry, { status: 201 });
}
