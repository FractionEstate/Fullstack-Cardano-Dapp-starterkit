import type { NextApiRequest, NextApiResponse } from 'next';
import signMessageOnServer from '../../lib/cardanoServer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  return signMessageOnServer(req, res);
}