import React from 'react';
import Link from 'next/link';
import { Calendar, ExternalLink } from 'lucide-react';

interface PostCardProps {
    title: string;
    link: string;
    date_pub: string;
    source: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, link, date_pub, source }) => {
    return (
        <Link href={link} target="_blank" rel="noopener noreferrer">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-300">
                    {title}
                </h3>
                <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <time dateTime={date_pub}>
                        {new Date(date_pub).toLocaleDateString('en-US', {
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
                        {source}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default PostCard;