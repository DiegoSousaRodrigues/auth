import { Session } from '@/types/session'

export default function HomePage({ isLoggedIn }: Session) {
  return (
    <h1 className="text-white text-3xl font-bold">
      Bem vindo a pagina inicial
      {isLoggedIn ? ' - Você está logado!' : ' - Você não está logado!'}
    </h1>
  )
}
