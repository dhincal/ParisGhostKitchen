import Image from 'next/image'
import Head from 'next/head'
import Navbar from '@/components/navbar'

export default function AboutUs() {
  return (
    <>
      <Head>

        </Head>
        <mobile>
            <Navbar />
            <main className='flex flex-col items-center px-6 py-3'>
                <Image src="/logo.png" height={160} width={160} alt='Paris Ghost Kitchen'/>
                <div className='flex flex-col items-center gap-y-3 mt-6 w-full'>
                    <h3 className='text-kitchen-green text-2xl font-semibold text-center'>Hakkımızda</h3>
                        <div className='w-full h-[2px] bg-kitchen-green' />
                    <h3 className='font-semibold text-xl'>Manifest 1</h3>
                        <p className='text-kitchen-dark text-center'> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non vestibulum enim. 
                        Ut ac <span className='font-semibold text-kitchen-green'>pharetra</span> risus. Vestibulum pretium auctor leo, 
                        sit amet laoreet dui <span className='font-semibold text-kitchen-green'>elementum</span> eget. Mauris mattis dolor bibendum ullamcorper tempor. 
                        Nullam vitae vulputate mauris. Praesent congue in libero id.</p>
                    <h3 className='font-semibold text-xl'>Manifest 1</h3>
                        <p className='text-kitchen-dark text-center'> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non vestibulum enim. 
                        Ut ac <span className='font-semibold text-kitchen-green'>pharetra</span> risus. Vestibulum pretium auctor leo, 
                        sit amet laoreet dui <span className='font-semibold text-kitchen-green'>elementum</span> eget. Mauris mattis dolor bibendum ullamcorper tempor. 
                        Nullam vitae vulputate mauris. Praesent congue in libero id.</p>
                    <div className='w-full h-[2px] bg-kitchen-green' />
                    <p className='text-kitchen-dark text-xs text-center'>Telif Hakkı © 2023 Paris Ghost Kitchen - Tüm Hakları Saklıdır.</p>
                </div>
            </main>
        </mobile>
    </>
  )
}
