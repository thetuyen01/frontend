import React from 'react'
import Star from './Star'

function DetailComment(props) {
  return (
    <>
        {props.detail_comment && props.detail_comment.map((item, index)=>(
            <>
                <div className="flex flex-col md:flex-row justify-between w-full mt-10">
                         <div className="flex flex-row justify-between items-start">
                            <p className="mt-3 text-base leading-normal text-gray-600 dark:text-white w-full md:w-9/12 xl:w-5/6">{item.title}</p>
                         </div>
                        <Star rating={item.rating}/> 
                </div>
                <div id="menu" className="md:block container">
                <div className="hidden md:flex mt-6 flex-row justify-start items-start space-x-4">
                    <div>
                        <img src={`${props.domain}${item.image}`} alt={`avatar_${index}`} />
                    </div>
                </div>
                <div className="md:hidden carousel pt-8 cursor-none" data-flickity='{ "wrapAround": true,"pageDots": false }'>
                    <div className="carousel-cell">
                        <div className="md:w-full h-full relative">
                            <img src={`${props.domain}${item.image}`} alt={`avatar_${index}`}  className="w-full h-full object-fit object-cover" />
                        </div>
                    </div>
                    
                    <div className="carousel-cell"></div>
                </div>
                <div className="mt-6 flex justify-start items-center flex-row space-x-2.5" >
                    <div>
                        <img src="https://i.ibb.co/QcqyrVG/Mask-Group.png" alt="girl-avatar" />
                    </div>
                    <div className="flex flex-col justify-start items-start space-y-2">
                        <p className="text-base font-medium leading-none text-gray-800 dark:text-white">{item.name}</p>
                        <p className="text-sm leading-none text-gray-600 dark:text-white">{item.created_at}</p>
                    </div>
                </div>
                <hr  className='mt-5'/>
            </div>
 
            </>
            
        ))}
    </>
  )
}

export default DetailComment