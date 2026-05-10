import { Session } from '@/types/session'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function LogoutPage(session: Session) {
  const router = useRouter()

  useEffect(() => {
    if (!session.isLoggedIn) {
      router.replace('/login')
      return
    }

    let isMounted = true

    fetch('/api/logout', {
      method: 'POST',
    }).finally(() => {
      if (isMounted) {
        router.replace('/login')
      }
    })

    return () => {
      isMounted = false
    }
  }, [router, session.isLoggedIn])

  return (
    <section className="grid flex-1 place-items-center">
      <div className="w-full max-w-md rounded-lg border border-black/10 bg-white p-6 text-center shadow-sm">
        <div
          className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#dce7e3] border-t-[#0f766e]"
          aria-hidden="true"
        />
        <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-[#0f766e]">
          Encerrando
        </p>
        <h1 className="mt-3 text-2xl font-black text-[#18211d]">
          Finalizando sua sessao
        </h1>
        <p className="mt-2 text-sm leading-6 text-[#66736d]">
          Voce sera redirecionado para o login em instantes.
        </p>
      </div>
    </section>
  )
}
