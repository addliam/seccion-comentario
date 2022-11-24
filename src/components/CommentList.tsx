import React from 'react'
import Comment from './Comment'
const CommentList = () => {
  return (
    <section className='flex flex-col gap-[1.8em] items-end'>
        <Comment />
        <Comment medium={true} />
        <Comment />
        <Comment />
        <Comment medium={true} />
        <Comment medium={true} />
        <Comment />
    </section>
  )
}

export default CommentList