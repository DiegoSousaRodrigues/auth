import { getIronSession } from 'iron-session'
import { sessionOptions, SessionData } from './lib'
import { NextApiRequest, NextApiResponse } from 'next'

export const getSession = (req: NextApiRequest, res: NextApiResponse) => {
  return getIronSession<SessionData>(req, res, sessionOptions)
}

export const login = async () => {}
export const logout = async () => {}
