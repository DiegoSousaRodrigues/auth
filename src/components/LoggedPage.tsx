import { Session } from '@/types/session'
import { useRouter } from 'next/router'

export default function LoggedPage(session: Session) {
  const router = useRouter()
  if (!session.isLoggedIn) {
    return router.push('/login')
  }

  return <div>LoggedPage</div>
}
