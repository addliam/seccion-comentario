import React from 'react'
import CommentList from './components/CommentList'

const App = () => {
  return (
    <main className='py-[2em]'>
      <div className='w-full flex justify-center'>
        <CommentList />
      </div>
    </main>
  )
}

export default App