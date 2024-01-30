'use client'
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { data } from '../../constants/data'
import { addToCart } from '../../redux/ItemSlice';
import transition from '../../transition/transition';
const Services = () => {
  const items = useSelector((state) => state.counter.data);

  const { id } = useParams()
  const dispatch=useDispatch()
  console.log(data);
  useEffect(() => {
    // setData(data.find((item)=>item.id===+item.id))
  },[])
  return (
    <div className='w-full  bg-slate-200 pb-20'>
      <h1 className="text-center lg:text-4xl py-4 text-3xl mb-6 text-blue">CheckOut Products</h1>
      <div className="container grid lg:grid-cols-3 grid-cols-1 gap-8 ">

      {data&&data.map((item) => {
        return (
          <div key={item.id} className="bg-white p-4 rounded-badge hover:scale-105 duration-300">

            <Image
              width={300}
              height={200}
              alt='img'
              src={item.img}
              className=' object-cover w-full h-[250px] rounded-lg'
            />
            <h1 className='text-2xl my-2 text-slate-600 font-light  '>{item.name}</h1>
            <p className="text-slate-900 ">{item.price}$</p>
            <button onClick={()=>dispatch(addToCart(item))} className='mx-auto bg-blue-600 px-4 py-2 rounded-3xl text-white my-2'>Add to cart</button>
            </div>
              
        )
      })}
      </div>
        
    </div>
  )
}

export default  Services