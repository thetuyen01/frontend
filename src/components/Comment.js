import React from 'react'
import DetailComment from './DetailComment'
import properties from '../config'
function Comment(props) {
  return (
    <>
        <div className="py-12 px-4 md:px-6 2xl:px-0 2xl:container 2xl:mx-auto flex justify-center items-center mx-auto ">
             <div className="flex flex-col justify-start items-start w-full space-y-8">
                 
                 <div className="w-full flex justify-start items-start flex-col bg-gray-50 dark:bg-gray-800 p-8">
                 <div className="flex justify-start items-start">
                     <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 dark:text-white ">{properties.titleReview}</p>
                 </div>
                     <DetailComment domain={props.domain} detail_comment={props.comment}/>
                 </div>
             </div>
         </div>
    </>
  )
}

export default Comment