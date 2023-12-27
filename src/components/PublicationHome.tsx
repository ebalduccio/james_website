import Image from 'next/image'

import React from 'react'

interface PublicationProps {
    logo: string
}

const PublicationHome = ({logo} : PublicationProps) => {
    return (
        <div>
            <div className="w-[32rem] h-44 bg-white rounded-sm">
                <div className="pl-3 pt-3">
                    <Image
                        src={`/${logo}.svg`}
                        alt="investor acumen mini logo"
                        width={60}
                        height={15}
                    />
                </div>
                <div className="mx-2 flex items-center gap-4">
                    <div className="min-w-44 min-h-24">
                        <div className="w-44 h-24 bg-neutral-600 rounded-sm flex justify-center items-center">
                            <p className="text-lg text-white font-roboto">Image</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 text-center">
                        <h1 className="text-2xl">Title</h1>
                        <div>
                            <p className="text-sm text-left">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Esse cumque vitae labore sint, officia iusto ipsam, ut quidem harum veniam minus deleniti
                            </p>
                            <p className="text-[0.7rem] font-roboto font-bold text-end pr-2">Nov. 08, 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PublicationHome