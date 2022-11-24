import React from 'react'
import Comment from './Comment'
const CommentList = () => {
  return (
    <section className='flex flex-col gap-3'>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
    </section>
  )
}

export default CommentList