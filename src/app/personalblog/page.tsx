'use client'

import React, { useEffect, useState } from 'react';
import PBPost from './components/PBPost';
import { getPosts, Post } from '@/lib/api';
import Link from 'next/link';

const PersonalBlog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log('Fetching posts...');
        const fetchedPosts = await getPosts();
        console.log('Fetched posts:', fetchedPosts);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };


    fetchPosts();
  }, []);

  return (
    <div className="h-full">
      <div className="grid grid-cols-1 gap-4 justify-center py-4 px-2">
        {posts.map((post) => (
          <Link href={`/personalblog/posts/${post.id}`} key={post.id}>
              <PBPost
                title={post.title}
                timestamp={post.createdAt}
                content={post.content}
              />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PersonalBlog;
