import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const data = req.body;
    const createdUser = await prisma.user.create({ data });
    return res.status(200).json(createdUser);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
}
