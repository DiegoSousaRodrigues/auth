import { useRouter } from 'next/router'
import { useState } from 'react'

type LoginFormData = {
  username: string
  password: string
}

export default function LoginPage() {
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        setError('Usuario ou senha invalidos.')
        return
      }

      router.push('/')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="grid flex-1 content-center">
      <div className="grid overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm lg:grid-cols-[0.85fr_1.15fr]">
        <div className="bg-[#17211d] p-6 text-white sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8ddbd2]">
            AuthTask
          </p>
          <h1 className="mt-5 text-3xl font-black leading-tight">
            Acesse sua conta com uma tela mais direta.
          </h1>
          <p className="mt-4 text-sm leading-6 text-white/70">
            O formulario valida o retorno da API, mostra falhas com clareza e
            preserva a navegacao principal ao redor da experiencia.
          </p>

          <div className="mt-8 grid gap-3">
            <div className="rounded-lg border border-white/12 bg-white/8 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8ddbd2]">
                Metodo
              </p>
              <p className="mt-2 text-sm font-bold">Sessao com cookie seguro</p>
            </div>
            <div className="rounded-lg border border-white/12 bg-white/8 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8ddbd2]">
                Escopo
              </p>
              <p className="mt-2 text-sm font-bold">
                Login local + rota protegida
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0f766e]">
              Login
            </p>
            <h2 className="mt-2 text-2xl font-black text-[#18211d]">
              Entrar no painel
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#66736d]">
              Informe suas credenciais para iniciar a sessao.
            </p>
          </div>

          <div className="mt-7 grid gap-4">
            <label className="grid gap-2 text-sm font-bold text-[#26332d]">
              Usuario
              <input
                className="h-12 rounded-lg border border-black/10 bg-[#f8faf8] px-4 text-base font-medium text-[#18211d] outline-none transition placeholder:text-[#9aa49f] focus:border-[#0f766e] focus:bg-white focus:ring-4 focus:ring-[#0f766e]/10"
                onChange={handleChange}
                name="username"
                value={formData.username}
                autoComplete="username"
                placeholder="Digite seu usuario"
                required
              />
            </label>

            <label className="grid gap-2 text-sm font-bold text-[#26332d]">
              Senha
              <input
                className="h-12 rounded-lg border border-black/10 bg-[#f8faf8] px-4 text-base font-medium text-[#18211d] outline-none transition placeholder:text-[#9aa49f] focus:border-[#0f766e] focus:bg-white focus:ring-4 focus:ring-[#0f766e]/10"
                onChange={handleChange}
                name="password"
                value={formData.password}
                autoComplete="current-password"
                type="password"
                placeholder="Digite sua senha"
                required
              />
            </label>
          </div>

          {error ? (
            <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
              {error}
            </p>
          ) : null}

          <button
            className="mt-6 h-12 w-full rounded-lg bg-[#0f766e] text-sm font-black text-white shadow-sm transition hover:bg-[#115e59] disabled:cursor-not-allowed disabled:bg-[#8bb8b2]"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </section>
  )
}
