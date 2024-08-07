import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { postSchema } from '../../schemas/postSchema';
import axios from 'axios';

const NEXT_PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!NEXT_PUBLIC_API_BASE_URL) {
  throw new Error('NEXT_PUBLIC_API_BASE_URL is not defined');
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsedData = postSchema.parse(body);

    const response = await axios.post(`${NEXT_PUBLIC_API_BASE_URL}`, {
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

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get('q');

    let url = `${NEXT_PUBLIC_API_BASE_URL}`;
    if (query) {
      // Assumindo que sua API backend suporta pesquisa via parâmetro de consulta
      url += `?search=${encodeURIComponent(query)}`;
    }

    const response = await axios.get(url);
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