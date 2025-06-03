import LogoutPage from '@/components/LogoutPage'
import { withSession } from '@/services/withSession'
import { Session } from '@/types/session'
import { NextApiRequest, NextApiResponse } from 'next'

export default function LogoutScreen({ session }: { session: Session }) {
  return <LogoutPage {...session} />
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
