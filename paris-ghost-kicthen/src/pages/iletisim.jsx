import Image from 'next/image'
import Head from 'next/head'
import Navbar from '@/components/navbar'

export default function ContactUs() {
  return (
    <>
        <Head>
            <title>Paris Ghost Kitchen - Bize Ulaşın</title>
        </Head>
        <div>
            <Navbar />
            <main className='flex flex-col items-center px-6 py-3'>
                <Image src="/logo1.png" height={160} width={160} alt='Paris Ghost Kitchen'/>
                 <div className='flex flex-col items-center gap-y-6 mt-6 w-full'>
                    <h3 className='text-kitchen-green text-2xl font-semibold text-center'>Bize Ulaşın</h3>
                    <div className='w-full h-[2px] bg-kitchen-green' />
                    <div className='flex flex-col gap-y-2 w-full items-center'>
                        <label className='text-xl font-semibold text-center'>İsim Soyisim</label>
                        <input type='text' className='w-full p-2 bg-[#f5f5f5]/70 transition-colors duration-150 rounded-lg border-2 border-[#e0e0e0] focus:outline-none focus:border-kitchen-green'/>
                    </div>
                    <div className='flex flex-col gap-y-2 w-full items-center'>
                        <label className='text-xl font-semibold text-center'>Telefon Numarası</label>
                        <input type='text' className='w-full p-2 bg-[#f5f5f5]/70 transition-colors duration-150 rounded-lg border-2 border-[#e0e0e0] focus:outline-none focus:border-kitchen-green'/>
                    </div>
                    <div className='flex flex-col gap-y-2 w-full items-center'>
                        <label className='text-xl font-semibold text-center'>Email</label>
                        <input type='text' className='w-full p-2 bg-[#f5f5f5]/70 transition-colors duration-150 rounded-lg border-2 border-[#e0e0e0] focus:outline-none focus:border-kitchen-green'/>
                    </div>
                    <div className='flex flex-col gap-y-2 w-full items-center'>
                        <label className='text-xl font-semibold text-center'>Mesaj</label>
                        <textarea rows={5} type='text' className='resize-none w-full p-2 bg-[#f5f5f5]/70 transition-colors duration-150 rounded-lg border-2 border-[#e0e0e0] focus:outline-none focus:border-kitchen-green'/>
                    </div>
                    <button className='bg-kitchen-green text-white p-2 rounded-lg text-center w-full font-semibold'>Gönder</button>
                </div>
                 <div className='w-full h-[2px] bg-kitchen-green mt-10' />
                    <p className='text-kitchen-dark text-xs text-center mt-3'>Telif Hakkı © 2023 Paris Ghost Kitchen - Tüm Hakları Saklıdır.</p>
              
            </main>
        </div>
    </>
  )
}
