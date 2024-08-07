'use client'

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/Loading";
import Link from "next/link";
import RecentPost from "./components/RecentPost";

type DataProps = {
    title: string,
    link: string,
    date_pub: string
};

export default function PublicationsPage() {
    const [posts, setPosts] = useState<DataProps[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const [tsResponse, iaResponse] = await Promise.all([
                    axios.get<DataProps[]>('https://appdata.investoracumen.com/james/ts'),
                    axios.get<DataProps[]>('https://appdata.investoracumen.com/james/ia'),
                ]);

                const allPosts = [...tsResponse.data, ...iaResponse.data];
                // Sort posts by date, assuming date_pub is in a format that can be compared
                allPosts.sort((a, b) => new Date(b.date_pub).getTime() - new Date(a.date_pub).getTime());
                setPosts(allPosts);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, []);

    if (!posts.length) {
        return <Loading />;
    }

    return (
            <div className="py-8 px-4">
                <div className="grid grid-cols-1 gap-4">
                    {posts.map((post, index) => (
                        <Link href={post.link} key={index}>
                            <RecentPost
                                title={post.title}
                                timestamp={post.date_pub}
                            />
                        </Link>
                    ))}
                </div>
            </div>
    );
}