import { useState } from 'react'
import Head from 'next/head'
import NextLink from 'next/link'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/solid'

export default function Navbar() {

    const [sidebar, setSidebar] = useState(false)

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet" />
            </Head>
            <div className={`${sidebar ? "overflow-y-hidden mobileSidebar" : " mobileSidebarOff -translate-x-[100vw]"} text-white font-semibold text-2xl z-50  gap-y-5 flex flex-col bg-kitchen-green absolute h-[100lvh] w-[75vw] overflow-y-hidden p-5 transition-all duration-300`}>
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
            <nav className='grid grid-cols-3 bg-kitchen-green p-4 sticky top-0 w-full z-40 items-center md:hidden'>
                <Bars3Icon onClick={() => setSidebar(true)} className='h-9 w-9 stroke-white' />
                <p className='text-white text-3xl mx-auto navHeader tracking-wider'>Bonjour</p>
            </nav>
            <nav className='md:flex hidden bg-kitchen-green p-4 py-7 sticky top-0 w-full z-40 items-center font-semibold justify-center text-white gap-x-32 text-2xl'>
                <NextLink className='hover:text-white/70' href="/">
                    <button>Menü</button>
                </NextLink>
                <NextLink className='hover:text-white/70' href="/hakkimizda">
                    <button>Hakkımızda</button>
                </NextLink>
                <NextLink className='hover:text-white/70' href="/iletisim">
                    <button>İletişim</button>
                </NextLink>

            </nav>
        </>
    )
}
