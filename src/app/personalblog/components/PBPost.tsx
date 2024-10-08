import React from 'react';

interface SocialMediaPostProps {
  title: string;
  timestamp?: string;
  content?: string;
}

const SocialMediaPost: React.FC<SocialMediaPostProps> = ({ title, timestamp, content }) => {
  console.log('SocialMediaPost props:', { title, timestamp, content });
  return (
    <div className='h-[12rem max-w-[70rem] flex-grow rounded transition duration-250 border-b hover:bg-slate-300 overflow-hidden'>
      <div className='px-3 py-4'>
        <div className='flex flex-col'>
          <span className='text-lg font-bold'>{title}</span>
          <span className='text-xs font-medium'>{timestamp}</span>
        </div>
        <p className='flex items-center text-sm pt-2 break-words overflow-auto'>
          {content}
        </p>
      </div>
    </div>
  );
};

export default SocialMediaPost;
