import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from './session'
import { Session } from '@/types/session'

export function withSession(
  handler: (
    ctx: { req: NextApiRequest; res: NextApiResponse },
    session: Session
  ) => Promise<unknown>
) {
  return async (ctx: { req: NextApiRequest; res: NextApiResponse }) => {
    const session = await getSession(ctx.req, ctx.res)

    if (!session) {
      return {
        redirect: {
          permanent: false,
          destination: '/?error=unauthorized',
        },
      }
    }

    const sessionData: Session = {
      isLoggedIn: !!session.isLoggedIn,
      username: session.username || '',
    }

    return handler(ctx, sessionData)
  }
}
