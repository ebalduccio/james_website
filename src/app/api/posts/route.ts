import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { postSchema } from '../../schemas/postSchema';
import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error('API_BASE_URL is not defined');
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsedData = postSchema.parse(body);

    const response = await axios.post(`${API_BASE_URL}`, {
      title: parsedData.title,
      content: parsedData.content,
      content_json: parsedData.content_json,
    });

    return NextResponse.json({ message: 'Post added successfully', result: response.data }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    } else if (axios.isAxiosError(error)) {
      return NextResponse.json({ message: 'API Error', error: error.message }, { status: 500 });
    } else if (error instanceof Error) {
      return NextResponse.json({ message: 'Internal Server Error', error: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: 'Unknown Error', error: String(error) }, { status: 500 });
  }
}

export async function GET() {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json({ message: 'API Error', error: error.message }, { status: 500 });
    } else if (error instanceof Error) {
      return NextResponse.json({ message: 'Internal Server Error', error: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: 'Unknown Error', error: String(error) }, { status: 500 });
  }
}
