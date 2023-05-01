import Image from 'next/image'
import Head from 'next/head'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { useState } from 'react'
import { sendContactForm } from '@/lib/api'

export default function ContactUs() {

    const initValues = { name: "", email: "", phone: "", message: "" };

    const initState = { isLoading: false, error: "", values: initValues };

    const [nameInput, setNameInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [phoneInput, setPhoneInput] = useState("")
    const [messageInput, setMessageInput] = useState("")

    const [nameBlur, setNameBlur] = useState(true)
    const [emailBlur, setEmailBlur] = useState(true)
    const [phoneBlur, setPhoneBlur] = useState(true)
    const [messageBlur, setMessageBlur] = useState(true)

    const [state, setState] = useState(initState);
    const { values, isLoading, error } = state;


    const onSubmit = async () => {
        values.name = nameInput
        values.email = emailInput
        values.phone = phoneInput
        values.message = messageInput
        setState(() => ({
            isLoading: true,
        }));
        try {
            await sendContactForm(values);

            setState(initState);
            setMessageInput("");
            setState(() => ({
                isLoading: false,
            }));
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message,
            }));
            console.log(error);
        }
    };




    return (
        <>
            <Head>
                <title>Paris Ghost Kitchen - Bize Ulaşın</title>
            </Head>
            <div>
                <Navbar />
                <main className='flex flex-col items-center px-6 py-3 bg-kitchen-orange/5'>
                    <Image src="/logo1.png" height={160} width={160} alt='Paris Ghost Kitchen' className='md:hidden' />
                    <Image src="/logo1.png" height={200} width={200} alt='Paris Ghost Kitchen' className='md:block hidden' />
                    <div className='flex flex-col items-center gap-y-6 mt-6 w-full'>
                        <h3 className='text-kitchen-green text-2xl font-semibold text-center md:text-black md:mb-5'>Bize Ulaşın</h3>
                        <div className='w-full h-[2px] bg-kitchen-green md:hidden' />
                        <div className='flex flex-col md:flex-row w-full gap-y-6 md:justify-center gap-x-8 mb-10'>
                            <div className='flex flex-col w-full gap-y-3 md:w-5/12'>
                                <div className='flex flex-col gap-y-2 w-full items-center md:items-start'>
                                    <label className='text-xl font-semibold text-center'>İsim Soyisim</label>
                                    <input
                                        value={nameInput}
                                        onChange={(e) => setNameInput(e.target.value)}
                                        onBlur={(e) => e.target.value === '' ? setNameBlur(false) : setNameBlur(true)}
                                        type='text'
                                        className={`${nameBlur ? "" : "border-red-500"} w-full p-2 bg-[#f5f5f5]/70 transition-colors duration-150 rounded-lg border-2 border-[#e0e0e0] focus:outline-none focus:border-kitchen-green`}
                                    />
                                    <p className={`${nameBlur ? "opacity-0" : ""} text-sm text-red-500 italic bottom-0`}>Lütfen bir isim ve soyisim giriniz.</p>

                                </div>
                                <div className='flex flex-col gap-y-2 w-full items-center md:items-start'>
                                    <label className='text-xl font-semibold text-center'>Telefon Numarası</label>
                                    <input
                                        value={phoneInput}
                                        onChange={(e) => setPhoneInput(e.target.value)}
                                        onBlur={(e) => e.target.value.length >= 4 && e.target.value.length <= 18 && e.target.value.match(/^[0-9]*$/) ? setPhoneBlur(true) : setPhoneBlur(false)}
                                        maxLength={18}
                                        type='text'
                                        className={`${phoneBlur ? "" : "border-red-500"} w-full p-2 bg-[#f5f5f5]/70 transition-colors duration-150 rounded-lg border-2 border-[#e0e0e0] focus:outline-none focus:border-kitchen-green`}
                                    />
                                    <p className={`${phoneBlur ? "opacity-0" : ""} text-sm text-red-500 italic bottom-0`}>Lütfen bir telefon numarası giriniz. </p>

                                </div>
                                <div className='flex flex-col gap-y-2 w-full items-center md:items-start'>
                                    <label className='text-xl font-semibold text-center'>Email</label>
                                    <input
                                        value={emailInput}
                                        onChange={(e) => setEmailInput(e.target.value)}
                                        onBlur={(e) => e.target.value.includes(".") && e.target.value.includes("@") ? setEmailBlur(true) : setEmailBlur(false)}
                                        type='text'
                                        className={`${emailBlur ? "" : "border-red-500"} w-full p-2 bg-[#f5f5f5]/70 transition-colors duration-150 rounded-lg border-2 border-[#e0e0e0] focus:outline-none focus:border-kitchen-green`}
                                    />
                                    <p className={`${emailBlur ? "opacity-0" : ""} text-sm text-red-500 italic bottom-0`}>Lütfen geçerli bir mail adresi giriniz. </p>

                                </div>
                            </div>
                            <div className='flex flex-col gap-y-2 w-full items-center md:w-5/12 md:items-start'>
                                <label className='text-xl font-semibold text-center'>Mesaj</label>
                                <textarea
                                    value={messageInput}
                                    onChange={(e) => setMessageInput(e.target.value)}
                                    onBlur={(e) => e.target.value === '' ? setMessageBlur(false) : setMessageBlur(true)}
                                    rows={5}
                                    type='text'
                                    className={`${messageBlur ? "" : "border-red-500"} md:h-full resize-none w-full p-2 bg-[#f5f5f5]/70 transition-colors duration-150 rounded-lg border-2 border-[#e0e0e0] focus:outline-none focus:border-kitchen-green`}
                                />
                                <p className={`${messageBlur ? "opacity-0" : ""} text-sm text-red-500 italic bottom-0`}>Lütfen bir mesaj giriniz</p>

                                <button
                                    disabled={nameInput === "" || emailInput === "" || phoneInput === "" || messageInput === "" || !nameBlur || !phoneBlur || !emailBlur || !messageBlur}
                                    onClick={onSubmit}
                                    className='bg-kitchen-green text-white p-2 rounded-lg text-center w-full font-semibold transition-colors duration-200 disabled:bg-kitchen-green/50'>
                                    <p className={`${isLoading ? "hidden" : ""}`}>
                                        GÖNDER
                                    </p>
                                    <div
                                        className={`${isLoading ? "" : "hidden"} h-1 w-1 border-4 p-2.5 rounded-full border-t-agent-gray border-agent-gray/30 animate-spin`}></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}
