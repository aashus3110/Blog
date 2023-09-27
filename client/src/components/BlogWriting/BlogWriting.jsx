import React from 'react'

const BlogWriting = () => {
  return (
    <div className='h-4/5 bg-red-50 w-full'>
      <div className="h-3/4 w-3/5  mx-auto">
        <input className='p-2 w-full outline-none my-2 rounded-md' type="text" placeholder='Title' />
      </div>
      <div className="h-3/4 w-3/5 mx-auto">
        <textarea className='p-2 w-full h-[60vh] outline-none my-2 rounded-md' placeholder='Write Your Blog' ></textarea>
      </div>
    </div >

  )
}

export default BlogWriting