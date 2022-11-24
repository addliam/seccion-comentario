import React from 'react'
import Avatar1 from '../assets/avatars/avatar1.png'
import TrashIcon from '../assets/icons/trash-red.svg'
import CornerUpLeft from '../assets/icons/corner-up-left-purple.svg'

const Comment = () => {
    function responderHandler (): void{
        console.log("Presionaron responder!");
    }
    function eliminarHandler (): void{
        console.log("Presionaron ELIMINAR");
    }
  return (
    <div className='box_shadowed px-[40px] py-[22px] bg-white w-[41em] rounded-[12px] '>
        <div className='header-comment flex justify-between'>
            <div className='flex flex-row gap-2'>
                <div>
                    <img src={Avatar1} alt="avatar" width="65px" height="65px" />
                </div>
                <div className='pt-[1em]'>
                    <span className='text-[20px] text-blueDark font-semibold'>
                        Marcelo
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
        <div className='body-comment mt-[1.3em] text-[1em] text-blackContent '>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatum, eos unde deleniti dignissimos repellat tenetur? Sequi, suscipit et, sed cupiditate saepe cumque porro corporis officia nam obcaecati possimus hic?</p>
        </div>
        <div className="responder mt-[1.2em]">
            <div onClick={()=>responderHandler()} className='clickable_contrast touchable_container cursor-pointer w-fit px-1 flex flex-row gap-[10px]'>
                <img src={CornerUpLeft} alt="corner up left purple" width="22px" height="22px" />
                <span className='text-[1em] text-purple'>
                    Responder
                </span>
            </div>

        </div>
    </div>
  )
}

export default Comment