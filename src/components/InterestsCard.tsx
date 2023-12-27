import Image from 'next/image'
import Educationicon from '../../public/Education.svg'

import React from 'react'

const InterestsCards = () => {
    return (
        <div className="h-52 w-60 bg-stone-600 text-white font-roboto rounded-md"> {/* Reduced height and width */}
            <div className="mt-2 ml-2 px-1 py-1 flex items-center rounded-lg h-10 w-10 bg-gray-300"> {/* Adjusted spacing and size */}
                <Image
                    src={Educationicon}
                    alt="education icon"
                />
            </div>
            <div className="flex flex-col items-center gap-3 "> {/* Adjusted gap */}
                <h1 className="text-xl">Title</h1> {/* Smaller text */}
                <p className="text-[0.7rem] text-center max-w-xs px-3"> {/* Adjusted padding and font size */}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cupiditate mollitia delectus in officia illo veniam deserunt aut impedit,
                    voluptatibus assumenda eligendi atque. Commodi, quos nulla? Facilis praesentium nostrum perferendis.
                </p>
            </div>
        </div>

    )
}

export default InterestsCards