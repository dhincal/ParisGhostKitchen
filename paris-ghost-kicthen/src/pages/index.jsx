import Image from 'next/image'
import Head from 'next/head'
import Navbar from '@/components/navbar'
import MenuItem from '@/components/menuItem'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      <main className='flex flex-col items-center px-6 py-3'>
        <Image src="/logo.png" height={160} width={160} alt='Paris Ghost Kitchen'/>
        <h2 className='text-2xl font-semibold mt-6'>Menü</h2>
        <h3 className='text-kitchen-green text-2xl font-semibold mt-10'>Bowls</h3>
        <div className='w-full h-[2px] bg-kitchen-green mt-2' />        
        <div className='flex flex-col items-center mt-10 gap-y-10'>
          <MenuItem img="/soup1.png" name="Salmon Bowl" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " price={120} category={"soup"}/>
          <MenuItem img="/soup1.png" name="Salmon Bowl" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " price={120} category={"soup"}/>
          <MenuItem img="/soup1.png" name="Salmon Bowl" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " price={120} category={"soup"}/>
          <MenuItem img="/soup1.png" name="Salmon Bowl" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " price={120} category={"soup"}/>
        
         </div>      
        <h3 className='text-kitchen-green text-2xl font-semibold mt-10'>Bagels</h3>
        <div className='w-full h-[2px] bg-kitchen-green mt-2' />        
        <div className='flex flex-col items-center mt-10 gap-y-10'>
          <MenuItem img="/bagel.png" name="Bruschetta Bagel" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price={50} category={"bagel"} />
          <MenuItem img="/bagel.png" name="Bruschetta Bagel" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price={50} category={"bagel"} />
          <MenuItem img="/bagel.png" name="Bruschetta Bagel" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price={50} category={"bagel"} />
          <MenuItem img="/bagel.png" name="Bruschetta Bagel" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price={50} category={"bagel"} />
        
        </div>
        <h3 className='text-kitchen-green text-2xl font-semibold mt-10'>Wraps</h3>
        <div className='w-full h-[2px] bg-kitchen-green mt-2' />        
        <div className='flex flex-col items-center mt-10 gap-y-10'>
          <MenuItem img="/wrap.png" name="Burrito Wrap" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price={250} category={"wrap"} />
          <MenuItem img="/wrap.png" name="Burrito Wrap" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price={250} category={"wrap"} />
          <MenuItem img="/wrap.png" name="Burrito Wrap" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price={250} category={"wrap"} />
          <MenuItem img="/wrap.png" name="Burrito Wrap" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price={250} category={"wrap"} />
                
        </div>
        <h3 className='text-kitchen-green text-2xl font-semibold mt-10 text-center'>Something to Drink</h3>
        <div className='w-full h-[2px] bg-kitchen-green mt-2' />        
        <div className='flex flex-col items-center mt-10 gap-y-10'>
          <MenuItem img="/smoothie.png" name="Smoothie" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price={30} category={"drink"} />
          <MenuItem img="/smoothie.png" name="Smoothie" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price={30} category={"drink"} />
          <MenuItem img="/smoothie.png" name="Smoothie" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price={30} category={"drink"} />
          <MenuItem img="/smoothie.png" name="Smoothie" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price={30} category={"drink"} />
        </div>        
        <div className='w-full h-[2px] bg-kitchen-green mt-5' />
        <p className='text-kitchen-dark text-xs text-center mt-3 mb-5'>Telif Hakkı © 2023 Paris Ghost Kitchen - Tüm Hakları Saklıdır.</p>
              
      </main>
    </>
  )
}
