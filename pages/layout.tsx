import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-gray-700 h-screen items-center gap-4">
      <header className="flex justify-center gap-4 py-12">
        <Link href="/login" className="text-white bg-link hover:underline">
          Pagina de Login
        </Link>

        <Link href="/logged" className="text-white bg-link hover:underline">
          Pagina Logada
        </Link>

        <Link href="/" className="text-white bg-link hover:underline">
          Pagina Inicial
        </Link>
      </header>
      <main className="flex flex-1">{children}</main>
      <footer className="text-white p-4 text-center">
        © 2023 My Application
      </footer>
    </div>
  )
}
