import { login } from '@/services/session'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const data = await login(req, res)
    console.log(data)
    return data
  }
}
