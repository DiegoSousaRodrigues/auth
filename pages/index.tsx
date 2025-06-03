import HomePage from '@/components/HomePage'
import { getSession } from '@/services/session'
import { Session } from '@/types/session'
import { NextApiRequest, NextApiResponse } from 'next'

export default function Home(props: { session: Session }) {
  return <HomePage {...props.session} />
}

export const getServerSideProps = async (context: {
  req: NextApiRequest
  res: NextApiResponse
}) => {
  const session = await getSession(context.req, context.res)

  return {
    props: { session },
  }
}
