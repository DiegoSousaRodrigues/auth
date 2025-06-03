import HomePage from '@/components/HomePage'
import LoginPage from '@/components/LoginPage'
import { withSession } from '@/services/withSession'
import { Session } from '@/types/session'
import { NextApiRequest, NextApiResponse } from 'next'

export default function LoginScreen({ session }: { session: Session }) {
  if (session.isLoggedIn) {
    return <HomePage {...session} />
  }
  return <LoginPage />
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
