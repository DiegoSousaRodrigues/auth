import { withSession } from '@/services/withSession'
import { Session } from '@/types/session'
import { NextApiRequest, NextApiResponse } from 'next'
import { useRouter } from 'next/router'

export default function LogoutPage({ session }: { session: Session }) {
  const router = useRouter()
  if (!session.isLoggedIn) {
    router.push('/login')
    return
  }
  return <div>Voce será deslogado em instantes</div>
}

export const getServerSideProps = withSession(
  async (
    _: { req: NextApiRequest; res: NextApiResponse },
    session: Session
  ) => {
    return {
      props: { session },
    }
  }
)
