import React,{useState} from 'react'
import properties from '../config'
import axios from 'axios';

function FormBuy(props) {
    console.log(props.prodcut)
    const [data, setData] =useState({
        "fullname":'',
        "phone_number":'',
        "address":'',
        "notes":''
    }) ; 
    const handlClick = async ()=>{
        const data_obj = {
            address: data.address,
            phone_number: data.phone_number,
            full_name: data.fullname,
            total_amount: (parseFloat(props.getQuantity_product().quantity)*props.getQuantity_product().product.price),
            data:[{
              "id":props.getQuantity_product().product.id,
              "count":parseInt(props.getQuantity_product().quantity)
            }]
          }
          if (data_obj.address === "" || data_obj.phone_number==="" || data_obj.full_name===""){
                alert("Vui lòng nhập thông tin mua hàng")
          }else{
                try{
                    const response = await axios.post(`${props.domain}/api/invoice/`, data_obj);
                    if (response.status === 201) {
                        alert(properties.alert)
                        setData({
                            "fullname":'',
                            "phone_number":'',
                            "address":'',
                            "notes":''
                        });
                        props.setQuantity(1)
                        props.scrollToTop()
                    }
                }catch(error){
                    console.log(error)
                }
          }
    }

  return (
    <>
        <div id='cart' className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
            <h1 className="text-6xl font-medium my-2">{properties.buyNow}</h1>
            <div action="" className="my-10">
                <div className="flex flex-col space-y-5">
                    <label for="fullname">
                        <p className="font-medium text-slate-700 pb-2">{properties.fullName}</p>
                        <input id="fullname" name="fullname" value={data.fullname} type="text" onChange={(e) => setData({ ...data, fullname: e.target.value })} className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder={properties.enter+" "+properties.fullName}/>
                    </label>
                    <label for="Phone_number">
                        <p className="font-medium text-slate-700 pb-2">{properties.phoneNumber}</p>
                        <input id="Phone_number" name="Phone_number" value={data.phone_number} onChange={(e) => setData({ ...data, phone_number: e.target.value })} type="text" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder={properties.enter+" "+properties.phoneNumber}/>
                    </label>
                    <label for="address">
                        <p className="font-medium text-slate-700 pb-2">{properties.address}</p>
                        <input id="address" name="address" type="text" value={data.address} onChange={(e) => setData({ ...data, address: e.target.value })} className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder={properties.enter+" "+properties.address}/>
                    </label>
                    <label for="note">
                        <p className="font-medium text-slate-700 pb-2">{properties.notes}</p>
                        <input id="notes" name="notes" type="text" value={data.notes} onChange={(e) => setData({ ...data, notes: e.target.value })} className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder={properties.enter+" "+properties.notes}/>
                    </label>
                    <label for="total">
                        <div className="row">
                            <table class="border-collapse border border-slate-400 text-center">  
                                <thead>
                                    <tr>
                                        <th className='border border-slate-300'>{properties.nameImage}</th>
                                        <th className='border border-slate-300'>{properties.nameProduct}</th>
                                        <th className='border border-slate-300'>{properties.totalQuantity}</th>
                                        <th className='border border-slate-300'>{properties.price}</th>
                                        <th className='border border-slate-300'>{properties.totalPrice}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='border border-slate-300'>
                                            {props.prodcut && props.prodcut.image && props.prodcut.image[0]?.image && (
                                                <img src={`${props.domain + props.prodcut.image[0].image}`} alt="" className='object-none w-full'/>
                                            )}
                                        </td>
                                        <td className='border border-slate-300'>{props.prodcut.name}</td>
                                        <td className='border border-slate-300'>{properties.numberofcounts}{props.getQuantity_product().quantity}</td>
                                        <td className='border border-slate-300'>{props.prodcut.price}</td>
                                        <td className='border border-slate-300'>{properties.currencyunit}{parseInt(props.getQuantity_product().quantity)*props.prodcut.price}</td>
                                    </tr>
                        
                                </tbody>
                            </table>
                        </div>
                    </label>
                    <button onClick={handlClick} className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                        <span>{properties.buyNow}</span>
                    </button>
                    
                </div>
            </div>
        </div>
       
    </>
  )
}

export default FormBuy