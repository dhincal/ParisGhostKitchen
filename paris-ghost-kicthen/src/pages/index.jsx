import Image from 'next/image'
import Head from 'next/head'
import Navbar from '@/components/navbar'
import MenuItem from '@/components/menuItem'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Paris Ghost Kitchen - Menü</title>
      </Head>
      <Navbar />
      <main className='flex flex-col items-center px-6 py-3 bg-kitchen-orange/5'>
        <Image src="/logo1.png" height={160} width={160} alt='Paris Ghost Kitchen'/>
        <h2 className='text-2xl font-semibold mt-6'>Menu</h2>
        <div className='w-[250px] h-[250px] rounded-full relative mt-10'>
          <Image 
            src="/bowls.jpg" 
            fill
            className='object-cover rounded-full'
            alt='bowls'
          />
        </div>
        <h3 className='text-kitchen-green text-2xl font-semibold mt-5 uppercase'>Bowls / Boules</h3>
        <div className='w-full h-[2px] bg-kitchen-green mt-2' />        
        <div className='flex flex-col items-center mt-10 gap-y-10'>
          <MenuItem  name="Salmon Bowl / Bol De Saumon" price={19.90} category={"soup"}/>
          <MenuItem  name="Falafel Bowl / Bol Falafel" price={17.90} category={"soup"}/>
          <MenuItem  name="Seafood ( Poke ) Bowl / Bol de Fruits De Mer"  price={19.90} category={"soup"}/>
          <MenuItem  name="Veggie Bowl / Bol De Légumes" price={17.90} category={"soup"}/>
          <MenuItem  name="Black Forest ( Acai ) Bowl / Bol Forêt Noire" price={18.90} category={"soup"}/>
        
        </div>
        <div className='w-[250px] h-[250px] rounded-full relative mt-10'>
          <Image 
            src="/bagels.jpg" 
            fill
            className='object-cover rounded-full'
            alt='bagels'
          />
        </div>      
        <h3 className='text-kitchen-green text-2xl font-semibold mt-5 uppercase'>Bagels</h3>
        <div className='w-full h-[2px] bg-kitchen-green mt-2' />        
        <div className='flex flex-col items-center mt-10 gap-y-10'>
          <MenuItem name="Egg Avocado Bagel / Bagel Oeuf Avocat" price={18.90} category={"bagel"} />
          <MenuItem name="Cheese Smoked Salmon Bagel / Begel Au Saumon Fumé Au Fromage" price={19.90} category={"bagel"} />
          <MenuItem name="Mediterranean Bagel / Bagel Méditerranéen" price={17.90} category={"bagel"} />
          <MenuItem name="Smoked Ribeye Bagel / Bagel De Faux-Filet Fumé" price={19.90} category={"bagel"} />
          <MenuItem name="Bruschetta Bagel / Bagels à La Bruschetta" price={17.90} category={"bagel"} />
        
        </div>
        <div className='w-[250px] h-[250px] rounded-full relative mt-10'>
          <Image 
            src="/wraps.jpeg" 
            fill
            className='object-cover rounded-full'
            alt='wraps'
          />
        </div>      
        <h3 className='text-kitchen-green text-2xl font-semibold mt-5 uppercase'>Wraps / ENVELOPPES</h3>
        <div className='w-full h-[2px] bg-kitchen-green mt-2' />        
        <div className='flex flex-col items-center mt-10 gap-y-10'>
          <MenuItem name="Falafel Wrap / Wrap Aux Falafels" price={17.90} category={"wrap"} />
          <MenuItem name="Burrito Wrap / Wrap Burritos" price={19.90} category={"wrap"} />
          <MenuItem name="Mediterranean Wrap / Wrap Méditerranéen" price={17.90} category={"wrap"} />
          <MenuItem name="King Crab Wrap / Wrap Au Crabe Royal" price={24.90} category={"wrap"} />
          <MenuItem name="Katz’s Deli Wrap / Deli Wrap De Katz’s" price={24.90} category={"wrap"} />      
        </div>
        <div className='w-[250px] h-[250px] rounded-full relative mt-10'>
          <Image 
            src="/drinks.jpg" 
            fill
            className='object-cover rounded-full'
            alt='drinks'
          />
        </div>      
        <h3 className='text-kitchen-green text-2xl font-semibold mt-5 text-center uppercase'>Something to Drink / QUELQUE CHOSE À BOIRE</h3>
        <div className='w-full h-[2px] bg-kitchen-green mt-2' />        
        <div className='flex flex-col items-center mt-10 gap-y-10'>
          <MenuItem name="Smoothie" price={6.90} category={"drink"} />
          <MenuItem name="Fresh Juice / Jus Frais" price={6.90} category={"drink"} />
          <MenuItem name="Basil Mint Ayran / Basilic Menthe Ayran" price={4.90} category={"drink"} />
          <MenuItem name="Perrier" price={4.90} category={"drink"} />
          <MenuItem name="Évian" price={4.90} category={"drink"} />
        </div>              
      </main>
      <Footer />
    </>
  )
}
