'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/Loading";
import Link from "next/link";
import RecentPost from "../components/RecentPost";

type DataProps = {
    title: string,
    link: string,
    date_pub: string
};

const InvestingPosts = () => {
    const [posts, setPosts] = useState<DataProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get<DataProps[]>('https://appdata.investoracumen.com/james/in');
                setPosts(response.data);
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
        <div className="py-8 px-8">
            <h1 className="text-3xl mb-6">Investing Posts</h1>
            {posts.length === 0 ? (
                <p>No posts available at the moment.</p>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {posts.map((post, index) => (
                        <Link href={post.link} key={index} target="_blank" rel="noopener noreferrer">
                            <RecentPost
                                title={post.title}
                                timestamp={post.date_pub}
                            />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default InvestingPosts;