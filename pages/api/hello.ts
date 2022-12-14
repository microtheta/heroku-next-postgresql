// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Users } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from 'prisma/db';

type Data = {
  user: Users | null
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const user = await prisma.users.findFirst()
  res.status(200).json({ user })
}
