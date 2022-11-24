import React from 'react'
import Avatar1 from '../assets/avatars/avatar1.png'
import TrashIcon from '../assets/icons/trash-red.svg'
import CornerUpLeft from '../assets/icons/corner-up-left-purple.svg'
import { Comment } from '../interfaces/Comment'
// TODO: Change this heart icons for SVG
import HeartOutlined from '../assets/icons/HeartOutlined.png'
import HeartFilled from '../assets/icons/HeartFilled.png'

interface Props {
    medium?: boolean;
    data: Comment;
}

const CommentComponent = ( {medium, data}: Props) => {    
    function responderHandler (): void{
        console.log("Presionaron responder!");
    }
    function eliminarHandler (): void{
        console.log("Presionaron ELIMINAR");
    }
    const boxWidth = medium?"33.5em":"41em";
    const completeClassName = `${medium?"comment_medium":""} box_shadowed px-[40px] py-[22px] bg-white rounded-[12px] relative `    
  return (
    <div style={{width:`${boxWidth}`}} className={`${completeClassName}`}>
        <div className='header-comment flex justify-between'>
            <div className='flex flex-row gap-[.75em]'>
                <div>
                    <img src={data.avatar} alt="avatar" width="65px" height="65px" />
                </div>
                <div className='pt-[1em]'>
                    <span className='text-[20px] text-blueDark font-semibold'>
                        {data.author}
                    </span>
                    <span className='text-[14px] ml-2'>
                        Hace 1 mes
                    </span>
                </div>
            </div>
            <div className='flex items-center text-[#ff0303]'>
                <div onClick={()=>eliminarHandler()} className='touchable_container cursor-pointer flex justify-center items-center px-[10px] py-[10px]'>
                    <img src={TrashIcon} alt="trash icon" width="25px" height="25px" />
                </div>
            </div>
        </div>
        <div className='body-comment mt-[1.3em]'>
            <p className='text-blackContent text-[1em]'>
                {data.content}
            </p>
        </div>
        <div className="responder flex flex-row items-center pr-[1em] mt-[1.2em] ">
            <div onClick={()=>responderHandler()} className='clickable_contrast touchable_container cursor-pointer w-fit px-1 flex flex-row items-center gap-[10px]'>
                <img src={CornerUpLeft} alt="corner up left purple" width="22px" height="22px" />
                <span className='text-[1em] text-purple'>
                    Responder
                </span>
            </div>
            <div className='ml-[70%] '>
                <div className='flex flex-row items-center'>
                    <div className='touchable_container heart_container cursor-pointer px-1 py-1 w-[2em] h-[2em] '>
                        <img title='Like' src={HeartOutlined} alt="heart outlined" width={26} height={26} />
                    </div>
                    <span className='mx-[.3em] text-[0.875em] text-purple font-semibold'>
                        {data.likes}
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CommentComponent