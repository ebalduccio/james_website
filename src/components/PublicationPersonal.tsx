import { cn } from '@/lib/utils';
import React from 'react'
import { ClassNameValue } from 'tailwind-merge';

type PubProps = {
    title?: string,
    link?: string,
    date?: string,
    Darkmode?: boolean
};

function PublicationPersonal({ title, link, date, Darkmode = true }: PubProps) {
    return (
        <div className={cn('w-[25rem] sm:w-[35rem] flex justify-center items-center lg:w-[45rem] h-48 rounded-sm mb-4', {
            'bg-neutral-500': Darkmode,
            'bg-white': !Darkmode
        })}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="mx-2 flex gap-4">
                    <div className={cn('flex flex-col gap-4 mt-4 text-center', {
                        'text-white': Darkmode,
                    })}>
                        <h1 className="text-2xl">{title}</h1>
                        {/* <p className="text-sm text-end pr-2">{new Date(date).toLocaleDateString()}</p> */}
                    </div>
                </div >
            </a>
        </div>
    )
}

export default PublicationPersonal