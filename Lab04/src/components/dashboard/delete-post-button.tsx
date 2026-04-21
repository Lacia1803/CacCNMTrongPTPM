'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

interface DeletePostButtonProps {
  postId: string
  postTitle: string
}

export function DeletePostButton({ postId, postTitle }: DeletePostButtonProps) {
  const router = useRouter()
  const supabase = createClient()
  const [loading, setLoading] = useState(false)

  const handleDelete = async () => {
    const confirmed = window.confirm(
      `Bạn có chắc muốn xóa bài viết "${postTitle}"?\nHành động này không thể hoàn tác.`
    )
    if (!confirmed) return

    setLoading(true)
    try {
      const { error } = await supabase.from('posts').delete().eq('id', postId)
      if (error) throw error
      router.refresh()
    } catch (err) {
      alert('Có lỗi xảy ra khi xóa bài viết. Vui lòng thử lại.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="text-red-600 hover:text-red-700 px-3 py-1.5 text-sm rounded-lg hover:bg-red-50 transition-colors disabled:opacity-50"
    >
      {loading ? '...' : 'Xóa'}
    </button>
  )
}
