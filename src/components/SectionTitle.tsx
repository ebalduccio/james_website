import Image from 'next/image'
import React from 'react'

function SectionTitle({ title, subtitle, VectorColor, TextColor }: TitleProps) {
    return (
        <>
            <div className='flex items-center justify-center pt-14'>
                <Image
                    src={`${VectorColor}Vector.svg`}
                    alt='vector'
                    width={71}
                    height={0}
                />
            </div>
            <div className='flex w-full items-center justify-center pt-3'>
                <h1 className={`text-${TextColor} text-6xl font-normal font-lora`}>{title}</h1>
            </div>
            <div className='flex items-center justify-center pt-7'>
                <div className={`text-${TextColor} text-[30.91px] font-normal font-lora`}>{subtitle}</div>
            </div>
        </>
    )
}

export default SectionTitle