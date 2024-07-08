import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const { ADMIN_USERNAME, ADMIN_PASSWORD, JWT_SECRET } = process.env;

if (!ADMIN_USERNAME || !ADMIN_PASSWORD || !JWT_SECRET) {
  throw new Error('Please define ADMIN_USERNAME, ADMIN_PASSWORD, and JWT_SECRET environment variables inside .env');
}

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    if (JWT_SECRET) {
      const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
      return NextResponse.json({ token });
    } else {
      return NextResponse.json({ message: 'JWT secret is not defined' }, { status: 500 });
    }
  } else {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }
}
