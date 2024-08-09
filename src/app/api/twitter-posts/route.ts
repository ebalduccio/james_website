// src/app/api/twitter-posts/route.ts
import { NextResponse } from 'next/server';
import { TwitterApi } from 'twitter-api-v2';

const USERNAME = 'jameskostohryz';

export async function GET() {
  console.log('Initializing Twitter client...');
  const client = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY || '',
    appSecret: process.env.TWITTER_API_SECRET || '',
    accessToken: process.env.TWITTER_ACCESS_TOKEN || '',
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET || '',
  });

  try {
    console.log('Fetching user data...');
    const user = await client.v2.userByUsername(USERNAME);
    console.log('User data:', user);
    if (!user.data) {
      throw new Error('User not found');
    }
    const userId = user.data.id;

    console.log('Fetching user timeline...');
    const response = await client.v2.userTimeline(userId, {
      expansions: ['author_id'],
      'tweet.fields': ['created_at'],
      max_results: 10,
    });
    console.log('Timeline response:', response);

    const tweets = response.data.data.map(tweet => ({
      id: tweet.id,
      text: tweet.text,
      created_at: tweet.created_at || new Date().toISOString(),
    }));

    console.log('Processed tweets:', tweets);

    return NextResponse.json(tweets, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    console.error('Error fetching Twitter posts:', error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
    }
    return NextResponse.json({ message: 'Failed to fetch Twitter posts', error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}