"use client"
const Error = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-[#FFF9F6]'>
            <h1 className="text-center text-4xl font-bold mt-20 text-red-700">An error occurred</h1>
            <p className="text-center mt-4 text-lg text-red-700">Sorry, something went wrong. Please try again later.</p>
            <button className="mt-6 px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800" onClick={() => window.location.reload()}>
                Retry
            </button>
        </div>
    )
}

export default Error
