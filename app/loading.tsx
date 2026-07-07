import { Loader } from 'lucide-react'
import React from 'react'

const Loading = () => {
    return (
        <div className='min-h-screen text-center flex items-center justify-center'>
            <Loader className="mx-auto mt-20 h-12 w-12 animate-spin text-[#A65A2E]" />
            <p className="mt-4 text-center text-lg text-[#A65A2E]">Loading...</p>
        </div>
    )
}

export default Loading
