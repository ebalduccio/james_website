'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/Loading";
import Link from "next/link";
import { Calendar, ExternalLink } from 'lucide-react';

type DataProps = {
    title: string,
    link: string,
    date_pub: string
};

export default function PublicationsPage() {
    const [posts, setPosts] = useState<DataProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const [tsResponse, iaResponse] = await Promise.all([
                    axios.get<DataProps[]>('https://appdata.investoracumen.com/james/ts'),
                    axios.get<DataProps[]>('https://appdata.investoracumen.com/james/ia'),
                ]);

                const allPosts = [...tsResponse.data, ...iaResponse.data];
                allPosts.sort((a, b) => new Date(b.date_pub).getTime() - new Date(a.date_pub).getTime());
                setPosts(allPosts);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching posts:", error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="py-8 px-4 bg-gray-50">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Recent Publications</h2>
            <div className="space-y-6">
                {posts.map((post, index) => (
                    <Link href={post.link} key={index} className="block">
                        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-300">
                                {post.title}
                            </h3>
                            <div className="flex items-center text-gray-600 text-sm">
                                <Calendar className="w-4 h-4 mr-2" />
                                <time dateTime={post.date_pub}>
                                    {new Date(post.date_pub).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </time>
                            </div>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-blue-500 hover:text-blue-600 transition-colors duration-300 flex items-center">
                                    Read more <ExternalLink className="w-4 h-4 ml-1" />
                                </span>
                                <span className="text-gray-500 text-sm">
                                    {post.link.includes('thestreet.com') ? 'TheStreet' : 'Investor Acumen'}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}