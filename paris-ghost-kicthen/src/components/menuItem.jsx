import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function MenuItem({ category, name, price }) {

    return (
        <div className='flex flex-col gap-y-1 items-center text-center md:w-1/2'>
            <h3 className='font-semibold md:font-normal text-xl'>{name}</h3>
            <h3 className='font-semibold text-xl'>{price} €</h3>
        </div>
    )
}
