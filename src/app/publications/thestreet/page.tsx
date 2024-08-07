'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/Loading";
import PostCard from "../components/PostCard";

type DataProps = {
    title: string,
    link: string,
    date_pub: string
};

const InvestorAcumenPosts = () => {
    const [posts, setPosts] = useState<DataProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get<DataProps[]>('https://appdata.investoracumen.com/james/ts');
                setPosts(response.data.sort((a, b) => new Date(b.date_pub).getTime() - new Date(a.date_pub).getTime()));
            } catch (error) {
                console.error("Error fetching posts:", error);
                setError("Failed to fetch posts. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
        <div className="py-8 px-4 bg-gray-50">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">TheStreet Publications</h2>
            {posts.length === 0 ? (
                <p className="text-center text-gray-600">No posts available at the moment.</p>
            ) : (
                <div className="space-y-6">
                    {posts.map((post, index) => (
                        <PostCard
                            key={index}
                            title={post.title}
                            link={post.link}
                            date_pub={post.date_pub}
                            source="TheStreet"
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default InvestorAcumenPosts;