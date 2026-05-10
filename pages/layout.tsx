import { Session } from '@/types/session'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'

export default function Layout({
  children,
  session,
}: PropsWithChildren<{ session: Session }>) {
  const router = useRouter()
  const isLoggedIn = !!session?.isLoggedIn

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/logged', label: 'Area restrita' },
    {
      href: isLoggedIn ? '/logout' : '/login',
      label: isLoggedIn ? 'Sair' : 'Entrar',
    },
  ]

  return (
    <div className="min-h-screen text-[#18211d]">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col lg:flex-row">
        <aside className="border-b border-black/10 bg-white/82 px-4 py-4 shadow-sm backdrop-blur lg:flex lg:w-72 lg:flex-col lg:border-b-0 lg:border-r lg:px-6 lg:py-7">
          <div className="flex items-center justify-between gap-4 lg:block">
            <Link href="/" className="group flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#0f766e] text-sm font-black tracking-[0.16em] text-white shadow-sm">
                AT
              </span>
              <span>
                <span className="block text-base font-black tracking-[0.12em] text-[#18211d]">
                  AUTHTASK
                </span>
                <span className="block text-xs font-medium text-[#66736d]">
                  Session control
                </span>
              </span>
            </Link>

            <div className="rounded-lg border border-black/10 bg-[#f7faf7] px-3 py-2 text-right text-xs lg:mt-8 lg:text-left">
              <span className="block font-bold text-[#18211d]">
                {isLoggedIn ? 'Sessao ativa' : 'Visitante'}
              </span>
              <span className="text-[#66736d]">
                {isLoggedIn ? session.username || 'admin' : 'Acesso limitado'}
              </span>
            </div>
          </div>

          <nav className="mt-4 grid grid-cols-3 gap-2 lg:mt-8 lg:grid-cols-1">
            {navItems.map((item) => {
              const isActive = router.pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    'rounded-lg border px-3 py-3 text-center text-sm font-bold transition lg:text-left',
                    isActive
                      ? 'border-[#0f766e] bg-[#e6f4f1] text-[#115e59] shadow-sm'
                      : 'border-transparent text-[#4b5852] hover:border-black/10 hover:bg-white',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="mt-auto hidden pt-8 text-xs leading-6 text-[#66736d] lg:block">
            <p className="font-bold uppercase tracking-[0.16em] text-[#18211d]">
              Ambiente
            </p>
            <p>Fluxo local de autenticacao com rotas protegidas.</p>
          </div>
        </aside>

        <main className="flex flex-1 px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
          <div className="mx-auto flex w-full max-w-5xl flex-col">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
