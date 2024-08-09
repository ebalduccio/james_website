import axios from 'axios';

const FACEBOOK_API_BASE_URL = 'https://graph.facebook.com/v20.0';
const FACEBOOK_ACCESS_TOKEN = process.env.NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN;

export interface FacebookPost {
  id: string;
  message?: string;
  created_time: string;
}

export async function getFacebookPosts(): Promise<FacebookPost[]> {
  try {
    const response = await axios.get(`${FACEBOOK_API_BASE_URL}/me/posts`, {
      params: {
        access_token: FACEBOOK_ACCESS_TOKEN,
        fields: 'id,message,created_time'
      }
    });

    const posts: FacebookPost[] = response.data.data.map((post: any) => {
      const createdAtDate = new Date(post.created_time);
      const formattedDate = createdAtDate.toLocaleString();

      // Logs para conferência
      console.log(`Original created_time: ${post.created_time}`);
      console.log(`Converted Date object: ${createdAtDate}`);
      console.log(`Formatted Date string: ${formattedDate}`);

      return {
        id: post.id,
        message: post.message || 'No message',
        created_time: formattedDate,
      };
    });

    return posts;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching Facebook posts:', error.response?.data || error.message);
      throw new Error('Failed to fetch Facebook posts');
    }
    console.error('Unknown error:', error);
    throw new Error('An unknown error occurred');
  }
}