'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getPostById, Post } from '@/lib/api';

const PostPage: React.FC = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const fetchedPost = await getPostById(Number(id));
          setPost(fetchedPost);
        } catch (error) {
          console.error('Error fetching post:', error);
        }
      };

      fetchPost();
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-2xl font-bold mb-4'>{post.title}</h1>
      <p className='text-sm text-gray-500 mb-2'>{post.createdAt}</p>
      <div className='prose'>
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default PostPage;
