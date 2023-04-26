import Image from 'next/image'
import Head from 'next/head'
import Navbar from '@/components/navbar'
import { PhoneIcon } from '@heroicons/react/24/outline'

export default function AboutUs() {
  return (
    <>
      <Head>

        </Head>
        <div>
            <Navbar />
            <main className='flex flex-col items-center px-6 py-3'>
                <Image src="/logo1.png" height={160} width={160} alt='Paris Ghost Kitchen'/>
                <div className='flex flex-col items-center gap-y-3 mt-6 w-full'>
                    <h3 className='text-kitchen-green text-2xl font-semibold text-center'>Hakkımızda</h3>
                        <div className='w-full h-[2px] bg-kitchen-green' />
                    <h3 className='font-semibold text-xl mt-5'>Paris Ghost Kitchen</h3>
                        <p className='text-kitchen-dark text-center'> 
                       Paris Ghost Kitchen sadece yemek teslimatı yapacak şekilde çalışan restoran işletmesidir. 
                       Müşterilerin mobil uygulama, internet sitesi veya çevrimiçi yemek sipariş <span className='text-kitchen-green font-semibold'>sistemleri</span> üzerinden 
                       vermiş olduğu yiyecek-içecek siparişlerini <span className='text-kitchen-green font-semibold'>kurye ile teslim edecek şekilde yada gel-al</span> şeklinde 
                       çalışmaktadır. Daha az yatırım maliyeti ve daha az çalışanla yüksek karlılık avantajı sağlar.</p>
                
                        <p className='text-kitchen-dark text-center'> 
                       Paket gıda dağıtım endüstrisinde pazarın gelecek yıl <span className='text-kitchen-green font-semibold'>35 milyar dolara </span> ulaşacağı tahmin ediliyor. 
                       Pazar araştırma şirketi Euromonitor’un verilerine göre, ‘hayalet mutfak’ pazarının 2030 yılına 
                       kadar <span className='text-kitchen-green font-semibold'>1 trilyon dolara </span> ulaşması bekleniyor.
                        </p>
                        <p className='text-kitchen-dark text-center'> 
                            Avrupa’da ghost kitchen operasyonel olarak güçlü olduğumuz <span className='text-kitchen-green font-semibold'>Paris</span> şehri ile başlayacak daha 
                            sonra sırasıyla paket sipariş miktarlarının <span className='text-kitchen-green font-semibold'>Avrupa </span>da yoğun olduğu Berlin ve Londra 
                            şehirlerinde şubeleşmesi hedeflenmektedir.
                        </p>
                        <div className='relative w-full h-60 rounded-2xl'>
                            <Image 
                                src="/kitchen.jpeg"
                                fill
                                className='object-cover rounded-2xl'
                                alt='Ghost Kitchen'
                            />
                        </div>
                        <h3 className='font-semibold text-xl mt-5'>İletişim</h3>
                        <div className='flex gap-x-2 items-center'>
                            <PhoneIcon className='h-5 w-5'/><p>0 (532) 290 25 99</p>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99930.12436793988!2d2.4911776616984587!3d48.83979808440579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e672ad2d1967f9%3A0xf16014d390b3f025!2sAquatic%20Center%20Dome%20Vincennes!5e0!3m2!1str!2str!4v1682536032901!5m2!1str!2str" className='w-full rounded-xl border-2 border-kitchen-green' height="350" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    
                    <div className='w-full h-[2px] bg-kitchen-green mt-5' />
                    <p className='text-kitchen-dark text-xs text-center'>Telif Hakkı © 2023 Paris Ghost Kitchen - Tüm Hakları Saklıdır.</p>
                </div>
            </main>
        </div>
    </>
  )
}
