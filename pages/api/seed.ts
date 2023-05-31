import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
type Data = {
  name: string
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  await prisma.project.deleteMany();

  await prisma.project.createMany({
    data: [
      {
        name: 'Open Table Clone',
        main_image: 'https://i.imgur.com/VLMJmbW.png',
        description: 'A fully functioning, limited version of the popular reservation and restaurant review website Open Table.',
        images: [
          'https://i.imgur.com/VLMJmbW.png',
          'https://i.imgur.com/0Nsvrzq.png',
          'https://i.imgur.com/ltAL098.png'
        ],
        slug: 'open-table-clone'
      },
      {
        name: 'Ozark AirBnb',
        main_image: 'https://i.imgur.com/8EfaAY7.png',
        description: 'A sleek and modern reservation site for an Airbnb company.',
        images: [
          'https://i.imgur.com/8EfaAY7.png',
          'https://i.imgur.com/kMwifea.png',
          'https://i.imgur.com/gqU5PeX.png'
        ],
        slug: 'ozark-airbnb'
      },

    ]
  });

  const projects = await prisma.project.findMany();

  const openTableCloneId = projects.find((project) => project.name === "Open Table Clone")?.id || 1;

  res.status(200).json({ name: "hello!"})
}