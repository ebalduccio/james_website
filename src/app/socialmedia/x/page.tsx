'use client'

import React, { useEffect, useState } from 'react';
import PostCard from '@/app/publications/components/PostCard';

type Tweet = {
  id: string;
  text: string;
  created_at: string;
};

const USERNAME = 'jameskostohryz';

const TwitterPosts: React.FC = () => {
    const [posts, setPosts] = useState<Tweet[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/api/twitter-posts');
                if (!response.ok) {
                    throw new Error('Failed to fetch tweets');
                }
                const fetchedPosts: Tweet[] = await response.json();
                const sortedPosts = fetchedPosts.sort((a, b) => 
                    new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
                );
                setPosts(sortedPosts);
            } catch (error) {
                console.error('Error fetching Twitter posts:', error);
                setError('Failed to fetch Twitter posts. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <div className="text-center">Loading tweets...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
        <div className="py-8 px-4 bg-gray-50">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Twitter Posts</h2>
            {posts.length === 0 ? (
                <p className="text-center text-gray-600">No tweets available at the moment.</p>
            ) : (
                <div className="space-y-6">
                    {posts.map((post) => (
                        <PostCard
                            key={post.id}
                            title={post.text}
                            link={`https://twitter.com/${USERNAME}/status/${post.id}`}
                            date_pub={new Date(post.created_at).toLocaleString()}
                            source="Twitter"
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TwitterPosts;