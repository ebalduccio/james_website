import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { postSchema } from '../../../schemas/postSchema';
import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error('API_BASE_URL is not defined');
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const parsedData = postSchema.parse(req.body);

    const response = await axios.post(`${API_BASE_URL}`, {
      title: parsedData.title,
      content: parsedData.content,
      content_json: parsedData.content_json,
    });

    res.status(200).json({ message: 'Post added successfully', result: response.data });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    if (axios.isAxiosError(error)) {
      return res.status(500).json({ message: 'Internal Server Error', error: error.response?.data || error.message });
    }
    if (error instanceof Error) {
      return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
    res.status(500).json({ message: 'Internal Server Error', error: 'Unknown error' });
  }
}
