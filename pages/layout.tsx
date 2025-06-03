import { Session } from '@/types/session'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

export default function Layout({
  children,
  session,
}: PropsWithChildren<{ session: Session }>) {
  return (
    <div className="flex flex-col bg-gray-700 h-screen items-center gap-4">
      <header className="flex justify-center gap-4 py-12">
        <Link href="/logged" className="text-white bg-link hover:underline">
          Pagina Logada
        </Link>

        <Link href="/" className="text-white bg-link hover:underline">
          Pagina Inicial
        </Link>

        {session?.isLoggedIn ? (
          <Link href="/logout" className="text-white bg-link hover:underline">
            Pagina de Logout
          </Link>
        ) : (
          <Link href="/login" className="text-white bg-link hover:underline">
            Pagina de Login
          </Link>
        )}
      </header>
      <main className="flex flex-1 px-6">{children}</main>
      <footer className="text-white p-4 text-center">
        © 2023 My Application
      </footer>
    </div>
  )
}
