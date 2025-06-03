/* eslint-disable react-hooks/exhaustive-deps */
import { Session } from '@/types/session'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function LogoutPage(session: Session) {
  const router = useRouter()

  useEffect(() => {
    fetch('/api/logout', {
      method: 'POST',
    }).then(() => {
      router.push('/login')
    })
  }, [])

  if (!session.isLoggedIn) {
    router.push('/login')
    return
  }
  return <span className="text-white">Voce será deslogado em instantes</span>
}
