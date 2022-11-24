import React from 'react'
import Comment from './Comment'
const CommentList = () => {
  return (
    <section className='flex flex-col gap-[1.8em]'>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
    </section>
  )
}

export default CommentList