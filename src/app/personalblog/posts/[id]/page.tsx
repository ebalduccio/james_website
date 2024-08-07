import { Button } from '@/components/ui/button';
import { getPostById, getPosts, Post } from '@/lib/api';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function PostPage({ params }: { params: { id: string } }) {
  let post: Post | null = null;

  try {
    post = await getPostById(Number(params.id));
  } catch (error) {
    console.error('Error fetching post:', error);
  }

  if (!post) {
    notFound();
  }

  return (
    <div className='container mx-auto px-4'>
      <Link href={'/personalblog'}>
        <Button className='px-8 mb-10'>
          Return
        </Button>
      </Link>
      <h1 className='text-2xl font-bold mb-4'>{post.title}</h1>
      <p className='text-sm text-gray-500 mb-2'>{post.createdAt}</p>
      <div className='prose' dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}

export async function generateStaticParams() {
  try {
    const posts = await getPosts();
    return posts.map((post) => ({
      id: post.id.toString(),
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}