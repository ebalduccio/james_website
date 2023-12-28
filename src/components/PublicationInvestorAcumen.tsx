import Image from 'next/image'

import React from 'react'

const PublicationInvestorAcumen = () => {
    return (
        <div>
            <div className="w-[25rem] sm:w-[35rem] lg:w-[45rem] h-48 bg-stone-500 rounded-sm">
                <div className="mx-2 flex items-center gap-4">
                    <div className="flex flex-col gap-4 mt-4 ml-4 text-left">
                        <h1 className="text-2xl text-white">Title</h1>
                        <p className="text-sm sm:text-base text-white text-left max-w-md sm:max-w-lg lg:max-w-none:">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Esse cumque vitae labore sint, officia iusto ipsam, ut quidem harum veniam minus deleniti
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit...
                        </p>
                        <div className='flex items-center justify-end'>
                            <p className="text-[0.7rem] font-roboto font-bold text-white text-end pr-2">Nov. 08, 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PublicationInvestorAcumen