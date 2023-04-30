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
      <main className='flex flex-col items-center px-6 py-3 pb-10 bg-kitchen-orange/5'>
        <Image src="/logo1.png" height={200} width={200} alt='Paris Ghost Kitchen' className='md:mx-auto' />
        <h2 className='text-2xl font-semibold mt-6 md:mx-auto'>Menu</h2>
        <div className='flex flex-col items-center'>
          <div className='w-[250px] h-[250px] rounded-full relative mt-10'>
            <Image
              src="/bowls.jpg"
              fill
              className='object-cover rounded-full'
              alt='bowls'
            />
          </div>
          <h3 className='text-kitchen-green text-2xl font-semibold mt-5 uppercase'>Boules / Bowls</h3>
        </div>
        <div className='w-full md:w-1/4 h-[2px] bg-kitchen-green mt-2' />
        <div className='flex flex-col md:flex md:flex-row md:justify-center md:flex-wrap w-full items-center mt-10 gap-y-10 md:font-normal'>
          <MenuItem name="Bol De Saumon / Salmon Bowl" price={19.90} category={"soup"} />
          <MenuItem name="Bol Falafel / Falafel Bowl" price={17.90} category={"soup"} />
          <MenuItem name="Bol de Fruits De Mer / Seafood ( Poke ) Bowl" price={19.90} category={"soup"} />
          <MenuItem name="Bol De Légumes / Veggie Bowl" price={17.90} category={"soup"} />
          <MenuItem name="Bol Forêt Noire / Black Forest ( Acai ) Bowl" price={18.90} category={"soup"} />
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-[250px] h-[250px] rounded-full relative mt-10'>
            <Image
              src="/bagels.jpg"
              fill
              className='object-cover rounded-full'
              alt='bowls'
            />
          </div>
          <h3 className='text-kitchen-green text-2xl font-semibold mt-5 uppercase'>Bagels</h3>
        </div>
        <div className='w-full md:w-1/4 h-[2px] bg-kitchen-green mt-2' />
        <div className='flex flex-col md:flex md:flex-row md:justify-center md:flex-wrap w-full items-center mt-10 gap-y-10'>
          <MenuItem name="Begel Au Saumon Fumé Au Fromage / Cheese Smoked Salmon Bagel" price={19.90} category={"bagel"} />
          <MenuItem name="Bagel De Faux-Filet Fumé / Smoked Ribeye Bagel" price={19.90} category={"bagel"} />
          <MenuItem name="Bagel Méditerranéen / Mediterranean Bagel" price={17.90} category={"bagel"} />
          <MenuItem name="Bagel Oeuf Avocat / Egg Avocado Bagel" price={18.90} category={"bagel"} />
          <MenuItem name="Bagels à La Bruschetta / Bruschetta Bagel" price={17.90} category={"bagel"} />

        </div>
        <div className='flex flex-col items-center'>
          <div className='w-[250px] h-[250px] rounded-full relative mt-10'>
            <Image
              src="/wraps.jpeg"
              fill
              className='object-cover rounded-full'
              alt='bowls'
            />
          </div>
          <h3 className='text-kitchen-green text-2xl font-semibold mt-5 uppercase'>ENVELOPPES / Wraps</h3>
        </div>
        <div className='w-full md:w-1/4 h-[2px] bg-kitchen-green mt-2' />
        <div className='flex flex-col md:flex md:flex-row md:justify-center md:flex-wrap w-full items-center mt-10 gap-y-10'>
          <MenuItem name="Wrap Aux Falafels / Falafel Wrap" price={17.90} category={"wrap"} />
          <MenuItem name="Wrap Burritos / Burrito Wrap" price={19.90} category={"wrap"} />
          <MenuItem name="Wrap Méditerranéen / Mediterranean Wrap" price={17.90} category={"wrap"} />
          <MenuItem name="Wrap Au Crabe Royal / King Crab Wrap" price={24.90} category={"wrap"} />
          <MenuItem name="Deli Wrap De Katz’s / Katz’s Deli Wrap" price={24.90} category={"wrap"} />
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-[250px] h-[250px] rounded-full relative mt-10'>
            <Image
              src="/drinks.jpg"
              fill
              className='object-cover rounded-full'
              alt='bowls'
            />
          </div>
          <h3 className='text-kitchen-green text-2xl font-semibold mt-5 text-center uppercase'>QUELQUE CHOSE À BOIRE / Something to Drink</h3>
        </div>
        <div className='w-full md:w-1/4 h-[2px] bg-kitchen-green mt-2' />
        <div className='flex flex-col md:flex md:flex-row md:justify-center md:flex-wrap w-full items-center mt-10 gap-y-10'>
          <MenuItem name="Smoothie" price={6.90} category={"drink"} />
          <MenuItem name="Jus Frais / Fresh Juice" price={6.90} category={"drink"} />
          <MenuItem name="Perrier" price={4.90} category={"drink"} />
          <MenuItem name="Évian" price={4.90} category={"drink"} />
        </div>
      </main>
      <Footer />


    </>
  )
}
