import Image from 'next/image'
import React from 'react'
import { cn } from '@/lib/utils'

function SectionTitle({ title, subtitle, VectorColor, TextColor, className }: TitleProps) {
    return (
        <>
            <div className={cn(`pt-14`, className)}>
                <div className='flex items-center justify-center'>
                    <Image
                        src={`${VectorColor}Vector.svg`}
                        alt='vector'
                        width={71}
                        height={0}
                    />
                </div>
                <div className='flex w-full text-center items-center justify-center pt-3'>
                    <h1 className={`text-${TextColor} text-6xl font-normal font-lora`}>{title}</h1>
                </div>
                <div className='flex items-center justify-center pt-7'>
                    <p className={`text-${TextColor} text-[30.91px] font-normal font-lora`}>{subtitle}</p>
                </div>
            </div>
        </>
    )
}

export default SectionTitle