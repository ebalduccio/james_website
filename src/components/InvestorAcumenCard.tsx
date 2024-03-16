import React from 'react'

const InvestorAcumenCard = () => {
    return (
        <>
            <div className='w-[28rem] lg:w-[60rem] sm:w-[35rem] h-[40rem] lg:h-[25rem] bg-white rounded-lg shadow-xl'>
                <div className='w-64 mt-5 ml-5 bg-gray-200 hover:bg-gray-300 duration-200 rounded-full'>
                    <h1 className='text-2xl text-center px-2 py-4'>
                        Title
                    </h1>
                </div>
                <div className='flex flex-col pt-10 lg:pt-0 lg:flex-row justify-center items-center gap-10'>
                    <p className='text-md max-w-sm'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam neque dolore molestias est earum quia. Magni
                        minima alias qui soluta officia suscipit sed exercitationem, corrupti nihil
                        praesentium hic ex minus. Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A eum, officiis, ratione ipsa atque
                        sint facilis iure molestiae vitae in ab tempore dicta hic. Eos, modi eaque? Odio, doloremque quisquam.
                    </p>
                    <div className='w-96 h-64 rounded flex items-center justify-center bg-gray-600'>
                        <h1 className='text-white text-2xl'>
                            Image
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InvestorAcumenCard