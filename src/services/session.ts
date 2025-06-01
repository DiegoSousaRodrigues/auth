import { getIronSession } from 'iron-session'
import { sessionOptions, SessionData, defaultSessionData } from './lib'
import { NextApiRequest, NextApiResponse } from 'next'

const usernameDatabase = 'admin'
const passwordDatabase = '123456'

export const getSession = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getIronSession<SessionData>(req, res, sessionOptions)
  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSessionData.isLoggedIn
  }

  return session
}

export const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession(req, res)

  const { username, password } = JSON.parse(req.body)

  console.log({ username, password })

  if (!username || !password) {
    return res.status(400).json({ error: 'Email and password are required' })
  }

  // Here you would typically validate the email and password against your database

  if (username === usernameDatabase && password === passwordDatabase) {
    session.isLoggedIn = true
    session.username = username
    await session.save()
    return res.status(200).json({ message: 'Login successful' })
  } else {
    return res.status(401).json({ error: 'Invalid email or password' })
  }
}

export const logout = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getIronSession<SessionData>(req, res, sessionOptions)
  session.destroy()
  return res.status(200).json({ message: 'Logout successful' })
}
