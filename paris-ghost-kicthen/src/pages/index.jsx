import Image from 'next/image'
import Head from 'next/head'
import Navbar from '@/components/navbar'
import MenuItem from '@/components/menuItem'

export default function Home() {
  return (
    <>
      <Head>
        <title>Paris Ghost Kitchen - Menü</title>
      </Head>
      <Navbar />
      <main className='flex flex-col items-center px-6 py-3 bg-kitchen-orange/5'>
        <Image src="/logo1.png" height={160} width={160} alt='Paris Ghost Kitchen'/>
        <h2 className='text-2xl font-semibold mt-6'>Menü</h2>
        <div className='w-[250px] h-[250px] rounded-full relative mt-10'>
          <Image 
            src="/bowls.jpg" 
            fill
            className='object-cover rounded-full'
            alt='bowls'
          />
        </div>
        <h3 className='text-kitchen-green text-2xl font-semibold mt-5'>Bowls</h3>
        <div className='w-full h-[2px] bg-kitchen-green mt-2' />        
        <div className='flex flex-col items-center mt-10 gap-y-10'>
          <MenuItem  name="Salmon Bowl" price={19.90} category={"soup"}/>
          <MenuItem  name="Falafel Bowl" price={17.90} category={"soup"}/>
          <MenuItem  name="Seafood ( Poke ) Bowl"  price={19.90} category={"soup"}/>
          <MenuItem  name="Veggie Bowl" price={17.90} category={"soup"}/>
          <MenuItem  name="Black Forest ( Acai ) Bowl" price={18.90} category={"soup"}/>
        
        </div>
        <div className='w-[250px] h-[250px] rounded-full relative mt-10'>
          <Image 
            src="/bagels.jpg" 
            fill
            className='object-cover rounded-full'
            alt='bagels'
          />
        </div>      
        <h3 className='text-kitchen-green text-2xl font-semibold mt-5'>Bagels</h3>
        <div className='w-full h-[2px] bg-kitchen-green mt-2' />        
        <div className='flex flex-col items-center mt-10 gap-y-10'>
          <MenuItem img="/bagel.png" name="Egg Avocado Bagel" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price={18.90} category={"bagel"} />
          <MenuItem img="/bagel.png" name="Cheese Smoked Salmon Bagel" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price={19.90} category={"bagel"} />
          <MenuItem img="/bagel.png" name="Mediterranean Bagel" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price={17.90} category={"bagel"} />
          <MenuItem img="/bagel.png" name="Smoked Ribeye Bagel" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price={19.90} category={"bagel"} />
          <MenuItem img="/bagel.png" name="Bruschetta Bagel" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price={17.90} category={"bagel"} />
        
        </div>
        <div className='w-[250px] h-[250px] rounded-full relative mt-10'>
          <Image 
            src="/wraps.jpeg" 
            fill
            className='object-cover rounded-full'
            alt='wraps'
          />
        </div>      
        <h3 className='text-kitchen-green text-2xl font-semibold mt-5'>Wraps</h3>
        <div className='w-full h-[2px] bg-kitchen-green mt-2' />        
        <div className='flex flex-col items-center mt-10 gap-y-10'>
          <MenuItem img="/wrap.png" name="Falafel Wrap" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price={17.90} category={"wrap"} />
          <MenuItem img="/wrap.png" name="Burrito Wrap" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price={19.90} category={"wrap"} />
          <MenuItem img="/wrap.png" name="Mediterranean Wrap" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price={17.90} category={"wrap"} />
          <MenuItem img="/wrap.png" name="King Crab Wrap" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price={24.90} category={"wrap"} />
          <MenuItem img="/wrap.png" name="Katz’s Deli Wrap" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price={24.90} category={"wrap"} />      
        </div>
        <div className='w-[250px] h-[250px] rounded-full relative mt-10'>
          <Image 
            src="/drinks.jpg" 
            fill
            className='object-cover rounded-full'
            alt='drinks'
          />
        </div>      
        <h3 className='text-kitchen-green text-2xl font-semibold mt-5 text-center'>Something to Drink</h3>
        <div className='w-full h-[2px] bg-kitchen-green mt-2' />        
        <div className='flex flex-col items-center mt-10 gap-y-10'>
          <MenuItem img="/smoothie.png" name="Smoothie" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price={6.90} category={"drink"} />
          <MenuItem img="/smoothie.png" name="Fresh Juice" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price={6.90} category={"drink"} />
          <MenuItem img="/smoothie.png" name="Basil Mint Ayran" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price={4.90} category={"drink"} />
          <MenuItem img="/smoothie.png" name="Perrier" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price={4.90} category={"drink"} />
          <MenuItem img="/smoothie.png" name="Evian" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit" price={4.90} category={"drink"} />
        </div>        
        <div className='w-full h-[2px] bg-kitchen-green mt-10' />
        <p className='text-kitchen-dark text-xs text-center mt-3 mb-5'>Telif Hakkı © 2023 Paris Ghost Kitchen - Tüm Hakları Saklıdır.</p>
              
      </main>
    </>
  )
}
