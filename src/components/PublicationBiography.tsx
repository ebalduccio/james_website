import Image from 'next/image'

import React from 'react'

const PublicationBiography = () => {
    return (
        <div>
            <div className="w-[32rem] h-40 bg-white rounded-sm">
                <div className="mx-2 flex items-center gap-4">
                    <div className="flex flex-col gap-4 mt-4 ml-4 text-left">
                        <h1 className="text-2xl">Title</h1>
                        <div className='flex flex-col gap-2'>
                            <p className="text-sm text-left max-w-md">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Esse cumque vitae labore sint, officia iusto ipsam, ut quidem harum veniam minus deleniti
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                            <p className="text-[0.7rem] font-roboto font-bold text-end pr-2">Nov. 08, 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PublicationBiography