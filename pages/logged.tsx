import { withSession } from '@/services/withSession'
import { Session } from '@/types/session'
import { NextApiRequest, NextApiResponse } from 'next'
import dynamic from 'next/dynamic'

const LoggedPage = dynamic(() => import('@/components/LoggedPage'), {
  ssr: false,
})

export default function LoggedScreen({ session }: { session: Session }) {
  return <LoggedPage {...session} />
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
