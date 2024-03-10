import React from 'react'
import properties from '../config'
function ProductDetail(props) {
  return (
    <>
        <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 ">
                <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                    <div>
                    <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex justify-content-center align-item-center">
                         {props.product.image && props.product.image[0]?.image && (
                            <img src={`${props.domain + props.product.image[0].image}`} alt="" className='object-none w-full'/>
                        )}
                    </div>

                    <div className="flex -mx-2 mb-4">

                            <div className="flex flex-wrap -my-3 mb-5">
                            <div className="w-full max-w-full px-3 mb-6  mx-auto">
                                <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] border border-dashed border-stone-200 bg-white m-5">
                                <div className="flex-auto block py-8 px-9">
                                    <div>
                                        <div className="grid grid-cols-4 lg:grid-cols-4 gap-5">
                                        {props.product.image && props.product.image[0] && props.product.image.map((item, index) => (
                                                <div key={index} className="flex flex-col text-center lg:mr-8">
                                                    <div className="inline-block mb-4 relative shrink-0 rounded-[.25rem]">
                                                        <img className="inline-block shrink-0 rounded-[.25rem] w-[80px] h-[80px]" src={`${props.domain}${item.image}`} alt={`avatar_${index}`} />
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
                <div className="md:flex-1 px-4 mx-auto">
                    {props.product.name && <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{props.product.name   }</h2>}
                    <div className="flex items-center space-x-4 my-4">
                    <div>
                        <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                        ${props.product.price && <span className="font-bold text-indigo-600 text-3xl">{props.product.price}</span>}     
                        </div>
                    </div>
                    
                    </div>
                    {props.product.description && <p className="text-gray-500">{props.product.description}</p>}
                    

                    <div className="flex py-4 space-x-4">
                    <div className="relative">
                        
                    <div class="max-w-xs mx-auto">
                        <label for="quantity-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose quantity:</label>
                        <div class="relative flex items-center max-w-[8rem]">      
                            <input type="text" onChange={(e) => props.setQuantity(e.target.value)} id="quantity-input" value={props.quantity} data-input-counter aria-describedby="helper-text-explanation" class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   placeholder="1" required />
                        </div>
                    </div>

                    </div>

                    <button onClick={()=>props.handleCartButtonClick()} type="button" className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white mt-4">
                        {properties.buyNow}
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductDetail