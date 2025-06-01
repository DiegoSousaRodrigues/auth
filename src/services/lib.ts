import { SessionOptions } from 'iron-session'

export interface SessionData {
  userId: string
  username: string
  password: string
  isLoggedIn?: boolean
}

export const defaultSessionData: SessionData = {
  isLoggedIn: false,
}

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET!,
  cookieName: 'auth_session',
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24,
  },
}
