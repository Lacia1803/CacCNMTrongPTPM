import { LoginForm } from '@/components/auth/login-form'

interface LoginPageProps {
  searchParams: Promise<{ message?: string }>
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        <div className="text-center mb-2">
          <h2 className="text-2xl font-bold text-gray-900">Đăng nhập</h2>
          <p className="mt-2 text-sm text-gray-600">Đăng nhập để quản lý blog của bạn</p>
        </div>

        {params?.message && (
          <div className="mt-4 bg-green-50 text-green-700 p-3 rounded-lg text-sm border border-green-200">
            {params.message}
          </div>
        )}

        <LoginForm />
      </div>
    </div>
  )
}
