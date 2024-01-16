import { cn } from '@/lib/utils';
import React from 'react'
import { ClassNameValue } from 'tailwind-merge';

type PubProps = {
    title: string,
    link: string,
    date: string,
    Darkmode?: boolean
};

function Publication({ title, link, date, Darkmode = true }: PubProps) {
    return (
        <div className={cn('w-[25rem] sm:w-[35rem] lg:w-[45rem] h-48 rounded-sm mb-4', {
            'bg-neutral-500': Darkmode,
            'bg-white': !Darkmode
        })}>
            <div className="mx-2 flex items-center gap-4">
                <div className={cn('flex flex-col text-whites gap-4 mt-4 ml-4 text-left')}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <h1 className="text-2xl">{title}</h1>
                    </a>
                    <p className="text-sm text-end pr-2">{new Date(date).toLocaleDateString()}</p>
                </div>
            </div>
        </div >
    )
}

export default Publication