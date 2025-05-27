import { getIronSession } from 'iron-session'
import { sessionOptions, SessionData } from './lib'
import { cookies } from 'next/headers'

export const getSession = async () => {
  const cookieStore = await cookies()
  return await getIronSession<SessionData>(cookieStore, sessionOptions)
}
export const login = async () => {}
export const logout = async () => {}
