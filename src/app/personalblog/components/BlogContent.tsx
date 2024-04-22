import React, { ReactNode } from 'react'

const BlogContent = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex-grow'>
            {children}
        </div>
    )
}

export default BlogContent