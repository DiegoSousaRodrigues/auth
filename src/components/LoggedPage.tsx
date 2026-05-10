import { Session } from '@/types/session'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function LoggedPage(session: Session) {
  const router = useRouter()

  useEffect(() => {
    if (!session.isLoggedIn) {
      router.replace('/login')
    }
  }, [router, session.isLoggedIn])

  if (!session.isLoggedIn) {
    return (
      <section className="grid flex-1 place-items-center">
        <div className="w-full max-w-md rounded-lg border border-black/10 bg-white p-6 text-center shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0f766e]">
            Redirecionando
          </p>
          <h1 className="mt-3 text-2xl font-black text-[#18211d]">
            Login necessario
          </h1>
          <p className="mt-2 text-sm leading-6 text-[#66736d]">
            Voce precisa iniciar uma sessao para ver esta area.
          </p>
        </div>
      </section>
    )
  }

  return (
    <div className="grid flex-1 content-center gap-6">
      <section className="rounded-lg border border-black/10 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0f766e]">
          Area protegida
        </p>
        <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <h1 className="text-3xl font-black leading-tight text-[#18211d] sm:text-5xl">
              Sessao autorizada.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#66736d]">
              Esta pagina so fica disponivel quando a API confirma uma sessao
              ativa para o usuario.
            </p>
          </div>

          <div className="rounded-lg border border-[#0f766e]/20 bg-[#e6f4f1] px-5 py-4">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#115e59]">
              Usuario
            </p>
            <p className="mt-1 text-xl font-black text-[#18211d]">
              {session.username || 'admin'}
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ['Cookie', 'HTTP-only'],
          ['Rota', 'Protegida'],
          ['Estado', 'Ativo'],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-lg border border-black/10 bg-white p-5 shadow-sm"
          >
            <p className="text-sm font-bold text-[#66736d]">{label}</p>
            <p className="mt-2 text-2xl font-black text-[#18211d]">{value}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
