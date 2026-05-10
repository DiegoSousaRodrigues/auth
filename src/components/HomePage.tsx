import { Session } from '@/types/session'
import Link from 'next/link'

export default function HomePage({ isLoggedIn, username }: Session) {
  return (
    <div className="grid flex-1 content-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-lg border border-black/10 bg-white p-6 shadow-sm sm:p-8">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#0f766e]">
          Painel de acesso
        </p>
        <h1 className="max-w-2xl text-3xl font-black leading-tight text-[#18211d] sm:text-5xl">
          Uma base de autenticacao mais limpa e confiavel.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-[#5d6b65]">
          A interface agora mostra o estado da sessao, orienta o proximo passo e
          mantem as rotas principais sempre acessiveis.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {isLoggedIn ? (
            <Link
              href="/logged"
              className="rounded-lg bg-[#0f766e] px-5 py-3 text-center text-sm font-black text-white shadow-sm transition hover:bg-[#115e59]"
            >
              Abrir area restrita
            </Link>
          ) : (
            <Link
              href="/login"
              className="rounded-lg bg-[#0f766e] px-5 py-3 text-center text-sm font-black text-white shadow-sm transition hover:bg-[#115e59]"
            >
              Entrar agora
            </Link>
          )}

          <Link
            href={isLoggedIn ? '/logout' : '/logged'}
            className="rounded-lg border border-black/10 bg-white px-5 py-3 text-center text-sm font-black text-[#18211d] transition hover:border-[#0f766e] hover:text-[#115e59]"
          >
            {isLoggedIn ? 'Encerrar sessao' : 'Testar protecao'}
          </Link>
        </div>
      </section>

      <section className="grid gap-4">
        <div className="rounded-lg border border-black/10 bg-[#17211d] p-6 text-white shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8ddbd2]">
                Status
              </p>
              <h2 className="mt-2 text-2xl font-black">
                {isLoggedIn ? 'Autenticado' : 'Nao autenticado'}
              </h2>
            </div>
            <span
              className={[
                'h-4 w-4 rounded-full',
                isLoggedIn ? 'bg-[#22c55e]' : 'bg-[#f59e0b]',
              ].join(' ')}
              aria-hidden="true"
            />
          </div>
          <p className="mt-5 text-sm leading-6 text-white/72">
            {isLoggedIn
              ? `Sessao iniciada como ${username || 'admin'}.`
              : 'Entre para liberar a rota protegida.'}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
            <p className="text-sm font-bold text-[#66736d]">Rotas</p>
            <p className="mt-2 text-3xl font-black text-[#18211d]">4</p>
            <p className="mt-1 text-xs text-[#66736d]">
              inicio, login, restrita e logout
            </p>
          </div>
          <div className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
            <p className="text-sm font-bold text-[#66736d]">Sessao</p>
            <p className="mt-2 text-3xl font-black text-[#18211d]">24h</p>
            <p className="mt-1 text-xs text-[#66736d]">
              cookie HTTP-only configurado
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
