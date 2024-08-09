'use client'

import React, { useEffect, useState } from 'react';
import { FacebookPost, getFacebookPosts } from '../../api/facebook-posts/route';
import PostCard from '@/app/publications/components/PostCard';

const FacebookPosts: React.FC = () => {
    const [posts, setPosts] = useState<FacebookPost[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const fetchedPosts = await getFacebookPosts();
                const filteredAndSortedPosts = fetchedPosts
                    .filter(post => post.message && post.message !== "No message")
                    .sort((a, b) => new Date(b.created_time).getTime() - new Date(a.created_time).getTime());
                setPosts(filteredAndSortedPosts);
                setPosts(fetchedPosts);
            } catch (error) {
                console.error('Error fetching Facebook posts:', error);
                setError('Failed to fetch Facebook posts. Please try again later.');
            }
        };

        fetchPosts();
    }, []);

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
        <div className="py-8 px-4 bg-gray-50">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Facebook Posts</h2>
            {posts.length === 0 ? (
                <p className="text-center text-gray-600">No posts available at the moment.</p>
            ) : (
                <div className="space-y-6">
                    {posts.map((post) => (
                        <PostCard
                            key={post.id}
                            title={post.message || "No message"}
                            link={`https://www.facebook.com/${post.id}`}
                            date_pub={new Date(post.created_time).toLocaleString()}
                            source="Facebook"
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default FacebookPosts;