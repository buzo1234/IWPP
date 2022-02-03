import Head from 'next/head'
import Image from 'next/image'
import Footer from './components/Footer'
import Header from './components/Header'
import Link from 'next/link'

export default function Register() {
  return (
    <div className="w-full">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="grid w-full grid-cols-2 justify-center">
        <div
          className="col-span-2 w-full flex-col justify-center lg:col-span-1"
          style={{ backgroundColor: '#a6e7ff' }}
        >
          <div className="flex flex-col items-center justify-center">
            <Link href="/clinicregister">
              <div className="mb-10 mt-20 w-3/5 cursor-pointer  rounded-full bg-black  px-5 py-3 text-center text-2xl text-white shadow-lg">
                Register as a Clinic
              </div>
            </Link>
            <Link href="/patientregister">
              <div className="mt-10 mb-20 w-3/5 cursor-pointer  rounded-full bg-black px-5 py-3 text-center text-2xl text-white shadow-lg">
                Register as a Patient
              </div>
            </Link>
          </div>
        </div>
        <div className="mx-auto hidden flex-col items-center lg:col-span-1 lg:block">
          <Image
            src="/doctor.jfif"
            width={500}
            height={500}
            objectFit="contain"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}
