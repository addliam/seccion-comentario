import React from 'react'
import CommentComponent from './CommentComponent'
import CommentsJSON from '../lib/comments.json'
import { Comment } from '../interfaces/Comment'

const CommentList = () => {
  return (
    <section className='flex flex-col gap-[1.8em] items-end'>
      {
        CommentsJSON.map((commentData: Comment)=> {
          return (
            <>
              <CommentComponent key={commentData.id} data={commentData} />
              {                
                (commentData.repplies && commentData.repplies?.length!==0)?(
                  commentData.repplies.map((reppliesData: Comment)=>{
                    return (
                      <CommentComponent key={reppliesData.id} data={reppliesData} medium={true} />                      
                    )
                  })
                  ):(<></>)
              }
            </>
          )
        })
      }
    </section>
  )
}

export default CommentList