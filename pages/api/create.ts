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
  const { isAdmin, name, userName }: { isAdmin?: boolean, name?: string, userName?: string } = req.query;
  const user = await prisma.users.create({
    data: {
      name: name || 'dummy',
      userName: userName || 'dummy',
      isAdmin: !!isAdmin || false,
    }
  })
  res.status(200).json({ user })
}
