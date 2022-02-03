import Head from 'next/head'
import Image from 'next/image'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './components/Login'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="grid grid-cols-2 justify-center">
        <div
          className="col-span-2 flex justify-center lg:col-span-1 "
          style={{ backgroundColor: '#a6e7ff' }}
        >
          <div className=" flex w-full flex-col items-center rounded-md p-5 shadow-md">
            <p className="m-6 p-5 text-center font-sans text-4xl font-bold">
              Log In
            </p>

            <input
              type="text"
              placeholder="Enter Contact Number"
              className="my-3 w-4/5 rounded-lg border-2 border-black px-3  py-2"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="my-3 w-4/5 rounded-lg border-2 border-black px-3 py-2"
            />

            <button className=" mb-10 mt-10 w-2/5 rounded-full bg-black px-6 py-2 text-white">
              Login
            </button>

            <p className="text-md">
              Don't have an account?
              <Link href="/register">
                <span className="cursor-pointer px-3 font-bold text-red-600 underline">
                  Register Now
                </span>
              </Link>
            </p>
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
