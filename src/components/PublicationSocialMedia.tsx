import { cn } from '@/lib/utils'
import Image from 'next/image'

import ttimage from '../../public/Twitter_SMsvg.svg'

const PublicationSocialMedia = () => {

    return (
        <div>
            <div className={cn('w-[25rem] lg:w-[45rem] hover:bg-neutral-400 duration-150 h-48 rounded-sm bg-neutral-500')}>
                <div className="mx-2 flex items-center gap-4">
                    <div className={cn('flex flex-col relative gap-4 mt-4 ml-4 text-left text-white')}>
                        <div className='absolute right-0'>
                            <Image 
                                src={ttimage}
                                alt='twitter'
                            />
                        </div>
                        <h1 className="text-2xl ">Title</h1>
                        <p className="text-[0.8rem] lg:text-base text-left max-w-md sm:max-w-lg lg:max-w-none">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Esse cumque vitae labore sint, officia iusto ipsam, ut quidem harum veniam minus deleniti
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit...
                        </p>
                        <div className='flex items-center justify-end'>
                            <p className="text-[0.7rem] font-roboto font-bold text-end pr-2">Nov. 08, 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PublicationSocialMedia