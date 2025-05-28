import HomePage from '@/components/HomePage'
import { getSession } from '@/services/session'
import { NextApiRequest, NextApiResponse } from 'next'

export default function Home() {
  return <HomePage />
}

export const getServerSideProps = async (context: {
  req: NextApiRequest
  res: NextApiResponse
}) => {
  const session = await getSession(context.req, context.res)

  console.log('Session Data:', session)

  return {
    props: {},
  }
}
