import Image from "next/image";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PhoneIcon } from "@heroicons/react/24/outline";

export default function AboutUs() {
    return (
        <>
            <Head>
                <title>Paris Ghost Kitchen - Hakkımızda</title>
            </Head>
            <div className="overflow-x-hidden flex flex-col bg-kitchen-orange/5">
                <Navbar />
                <main className="lg:hidden flex flex-col items-center px-6 py-3">
                    <Image
                        src="/logo1.png"
                        height={160}
                        width={160}
                        alt="Paris Ghost Kitchen"
                    />
                    <div className="flex flex-col items-center gap-y-3 mt-6 w-full">
                        <h3 className="text-kitchen-green text-2xl font-semibold text-center">
                            Hakkımızda
                        </h3>
                        <div className="w-full h-[2px] bg-kitchen-green" />
                        <h3 className="font-semibold text-xl mt-5">Paris Ghost Kitchen</h3>
                        <p className="text-kitchen-dark text-center">
                            Paris Ghost Kitchen sadece yemek teslimatı yapacak şekilde çalışan
                            restoran işletmesidir. Müşterilerin mobil uygulama, internet
                            sitesi veya çevrimiçi yemek sipariş sistemleri
                            üzerinden vermiş olduğu yiyecek-içecek siparişlerini
                            kurye ile teslim edecek şekilde yada gel-al
                            şeklinde çalışmaktadır. Daha az yatırım maliyeti ve daha az
                            çalışanla yüksek karlılık avantajı sağlar.
                        </p>
                        <div className="relative w-full sm:w-9/12 h-60 rounded-2xl">
                            <Image
                                src="/kitchen.jpeg"
                                fill
                                className="object-cover rounded-2xl"
                                alt="Ghost Kitchen"
                            />
                        </div>
                        <p className="text-kitchen-dark text-center">
                            Paket gıda dağıtım endüstrisinde pazarın gelecek yıl
                            35 milyar dolara
                            ulaşacağı tahmin ediliyor. Pazar araştırma şirketi Euromonitor’un
                            verilerine göre, ‘hayalet mutfak’ pazarının 2030 yılına kadar 1 trilyon dolara
                            ulaşması bekleniyor.
                        </p>
                        <p className="text-kitchen-dark text-center">
                            Avrupa’da ghost kitchen operasyonel olarak güçlü olduğumuz Paris şehrinde
                            başlayacak ve sonrasında birden fazla lokasyonda şubeleşmeye devam edecektir.
                        </p>
                        <div className="flex flex-wrap gap-y-5 justify-center gap-x-9">
                            <p className="text-lg font-semibold text-center mt-5 w-full">Fransa Çevrimiçi Yemek Sipariş Partnerleri</p>
                            <div className="relative h-32 w-32">
                                <Image
                                    src="/glovo.png"
                                    fill
                                    className="object-cover rounded-2xl"
                                    alt="Getir"
                                />
                            </div>
                            <div className="relative h-32 w-32">
                                <Image
                                    src="/justeat.png"
                                    fill
                                    className="object-cover rounded-2xl"
                                    alt="Getir"
                                />
                            </div>
                            <div className="relative h-32 w-32">
                                <Image
                                    src="/getir.jpg"
                                    fill
                                    className="object-cover rounded-2xl"
                                    alt="Getir"
                                />
                            </div>
                            <div className="relative h-32 w-32">
                                <Image
                                    src="/ubereats.png"
                                    fill
                                    className="object-cover rounded-2xl"
                                    alt="Getir"
                                />
                            </div>
                            <div className="relative h-32 w-32">
                                <Image
                                    src="/delivero.png"
                                    fill
                                    className="object-cover rounded-2xl"
                                    alt="Getir"
                                />
                            </div>
                        </div>
                    </div>
                </main>
                <main className="hidden lg:flex flex-col p-5 mx-auto  min-[1500px]:w-9/12">
                    {/* <h3 className='text-kitchen-green text-2xl font-semibold'>Hakkımızda</h3>
                <div className='w-full h-[2px] bg-kitchen-green' /> */}
                    <Image
                        src="/logo1.png"
                        height={200}
                        width={200}
                        alt="Paris Ghost Kitchen"
                        className="mx-auto mb-10"
                    />
                    <h3 className="font-semibold text-xl mt-5">Paris Ghost Kitchen</h3>
                    <div className="flex w-full mt-10 gap-x-32 justify-center">
                        <div className="text-left flex flex-col gap-y-8 w-1/2 text-lg">
                            <p className="text-kitchen-dark">
                                Paris Ghost Kitchen sadece yemek teslimatı yapacak şekilde çalışan
                                restoran işletmesidir. Müşterilerin mobil uygulama, internet
                                sitesi veya çevrimiçi yemek sipariş sistemleri
                                üzerinden vermiş olduğu yiyecek-içecek siparişlerini
                                kurye ile teslim edecek şekilde yada gel-al
                                şeklinde çalışmaktadır. Daha az yatırım maliyeti ve daha az
                                çalışanla yüksek karlılık avantajı sağlar.
                            </p>
                            <p className="text-kitchen-dark">
                                Paket gıda dağıtım endüstrisinde pazarın gelecek yıl 35 milyar dolara
                                ulaşacağı tahmin ediliyor. Pazar araştırma şirketi Euromonitor’un
                                verilerine göre, ‘hayalet mutfak’ pazarının 2030 yılına kadar 1 trilyon dolara
                                ulaşması bekleniyor.
                            </p>
                            <p className="text-kitchen-dark">
                                Avrupa’da ghost kitchen operasyonel olarak güçlü olduğumuz Paris
                                şehrinde başlayacak ve sonrasında birden fazla lokasyonda şubeleşmeye devam edecektir.

                            </p>
                        </div>

                        <div className="relative w-1/2 rounded-2xl ml-auto">
                            <Image
                                src="/kitchen.jpeg"
                                fill
                                className="object-cover rounded-2xl"
                                alt="Ghost Kitchen"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-y-5 justify-center gap-x-9 w-1/2 mx-auto mt-14 mb-14">
                        <p className="text-lg font-semibold text-center mt-5 w-full">Fransa Çevrimiçi Yemek Sipariş Partnerleri</p>
                        <div className="relative h-48 w-48">
                            <Image
                                src="/glovo.png"
                                fill
                                className="object-cover rounded-2xl"
                                alt="Getir"
                            />
                        </div>
                        <div className="relative h-48 w-48">
                            <Image
                                src="/justeat.png"
                                fill
                                className="object-cover rounded-2xl"
                                alt="Getir"
                            />
                        </div>
                        <div className="relative h-48 w-48">
                            <Image
                                src="/getir.jpg"
                                fill
                                className="object-cover rounded-2xl"
                                alt="Getir"
                            />
                        </div>
                        <div className="relative h-48 w-48">
                            <Image
                                src="/ubereats.png"
                                fill
                                className="object-cover rounded-2xl"
                                alt="Getir"
                            />
                        </div>
                        <div className="relative h-48 w-48">
                            <Image
                                src="/delivero.png"
                                fill
                                className="object-cover rounded-2xl"
                                alt="Getir"
                            />
                        </div>
                    </div>
                </main>
                <div className="w-full bg-kitchen-green py-4 text-center text-white">
                    Telif Hakkı © 2023 Paris Ghost Kitchen - Tüm Hakları Saklıdır.
                </div>
            </div>
        </>
    );
}
