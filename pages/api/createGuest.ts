import clientPromise from '@/backend/mongo-client';
import { GuestData } from '@/features/domain/dto/GuestData';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  success: boolean;
  errorMessages: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    res
      .status(405)
      .send({ success: false, errorMessages: 'Only POST requests allowed' });
    return;
  }
  const guestData: GuestData = req.body;
  console.log('req.body', guestData);

  try {
    const client = await clientPromise;
    const db = client.db('GuestDataFromHaiThuyWedding');

    const savedData = await db.collection('guests').insertOne(guestData);
    console.log('savedData', savedData);

    res.json({
      success: true,
      errorMessages: '',
    });
  } catch (e) {
    console.error(e);
    // throw new Error(e).message;
  }
}
