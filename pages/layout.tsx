export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-black h-screen">
      <main className="flex flex-1 px-6 py-8 bg-black">{children}</main>
      <footer className="text-white p-4 text-center">
        © 2023 My Application
      </footer>
    </div>
  )
}
