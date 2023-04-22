import { useState } from 'react'
import Head from 'next/head'
import NextLink from 'next/link'
import {Bars3Icon} from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/solid'

export default function Navbar() {

    const [sidebar, setSidebar] = useState(false)

    return (
    <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap" rel="stylesheet" />
        </Head>
        <div className={`${sidebar ? "absolute mobileSidebar" : " -translate-x-[100vw]"} text-white font-semibold text-2xl  gap-y-5 flex flex-col bg-kitchen-green absolute h-screen w-[75vw] overflow-y-hidden z-50 p-5 transition-all duration-300`}>
            <button className='w-fit' onClick={() => setSidebar(!sidebar)}>
                <XMarkIcon className="w-10 -translate-x-2" />
            </button>
            <NextLink href="/">
                <button>Menü</button>
            </NextLink>
            <NextLink href="/iletisim">
                <button>Bize Ulaşın</button>
            </NextLink>
             <NextLink href="/hakkimizda">
                <button>Hakkımızda</button>
            </NextLink>
            </div>
        <nav className='flex bg-kitchen-green p-4 sticky top-0 w-full'>
            <Bars3Icon onClick={() => setSidebar(true)} className='h-9 w-9 stroke-white' />
        </nav>
    </>
  )
}
