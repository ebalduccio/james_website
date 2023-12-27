import Image from 'next/image'
import Educationicon from '../../public/Education.svg'

import React from 'react'

const EducationGrid = () => {
    return (
        <div className="h-64 w-[30rem] bg-stone-600 text-white font-roboto rounded-md">
            <div className="mt-3 ml-3 px-2 py-2 flex items-center rounded-lg h-14 w-14 bg-gray-300">
                <Image
                    src={Educationicon}
                    alt="education icon"
                />
            </div>
            <div className="flex flex-col items-center gap-4 ">
                <h1 className="text-3xl">Title</h1>
                <p className="text-sm text-center max-w-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cupiditate mollitia delectus in officia illo veniam deserunt aut impedit,
                    voluptatibus assumenda eligendi atque. Commodi, quos nulla? Facilis praesentium nostrum perferendis.
                </p>
            </div>
        </div>

    )
}

export default EducationGrid