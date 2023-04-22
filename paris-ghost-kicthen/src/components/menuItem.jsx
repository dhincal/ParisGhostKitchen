import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function MenuItem({category, name, desc, price, img}) {
   
    return (
        <div className='flex flex-col gap-y-1 items-center text-center'>
            <div className='relative w-[100px] h-[100px]'>
                <Image 
                    src={img}
                    fill
                    className='object-contain'
                />
            </div>
            <h3 className='font-semibold text-xl'>{name}</h3>
            <p className='font-light text-lg'>{desc}</p>
            <h3 className='font-semibold text-xl'>{price} €</h3>
        </div>
  )
}
