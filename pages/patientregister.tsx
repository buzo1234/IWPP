import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { db, storage } from '../firebase'
import { addDoc, collection, serverTimestamp } from '@firebase/firestore'

function patientregister() {
  const [name, setName] = useState('')
  const [cnumber, setCnumber] = useState(0)
  const [address, setAddress] = useState('')
  const [gender, setGender] = useState('')
  const [spassword, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')
  const [status, setStatus] = useState(false)

  const confirmRouter = async () => {
    let text1 = spassword
    let text2 = cpassword
    let result = text1.localeCompare(text2)
    if (
      name === '' ||
      cnumber === null ||
      address === '' ||
      gender === '' ||
      spassword === '' ||
      cpassword === '' ||
      result !== 0
    ) {
      return
    }

    const patient_details = {
      patientname: name,
      patientcontact: cnumber,
      patientaddress: address,
      patientgender: gender,
      password: spassword,
      timestamp: serverTimestamp(),
    }

    const docRef = await addDoc(collection(db, 'patients'), patient_details)

    setStatus(true)
  }

  return (
    <div>
      <Head>
        <title>DocOp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="grid grid-cols-2 justify-center">
        <div
          className="col-span-2 flex justify-center lg:col-span-1 "
          style={{ backgroundColor: '#a6e7ff' }}
        >
          {!status ? (
            <>
              <div className=" flex w-full flex-col items-center rounded-md p-5 shadow-md">
                <p className="m-6 p-5 text-center font-sans text-4xl font-bold">
                  Register as a Patient
                </p>

                <input
                  type="text"
                  placeholder="Enter patient Name"
                  className="my-3 w-4/5 rounded-lg border-2 border-black px-3  py-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  type="number"
                  placeholder="Enter Contact Number"
                  className="my-3 w-4/5 rounded-lg border-2 border-black px-3  py-2"
                  value={cnumber}
                  onChange={(e) => setCnumber(parseInt(e.target.value))}
                />
                <input
                  type="text"
                  placeholder="Enter Address"
                  className="my-3 w-4/5 rounded-lg border-2 border-black px-3  py-2"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <div className="py-2">
                  <label className="font-semibold">Gender : </label>

                  <select
                    name="gender"
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="rounded-lg p-3"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="mercedes">Other</option>
                  </select>
                </div>

                <input
                  type="password"
                  placeholder="Set a Password"
                  className="my-3 w-4/5 rounded-lg border-2 border-black px-3 py-2"
                  value={spassword}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <input
                  type="password"
                  placeholder="Confirm password"
                  className="my-3 w-4/5 rounded-lg border-2 border-black px-3  py-2"
                  value={cpassword}
                  onChange={(e) => setCpassword(e.target.value)}
                />

                <button
                  className=" mb-10 mt-10 w-2/5 rounded-full bg-black px-6 py-2 text-white"
                  onClick={() => confirmRouter()}
                >
                  Register
                </button>

                <p className="text-md">
                  Already have an account?
                  <Link href="/">
                    <span className="cursor-pointer px-3 font-bold text-red-600 underline">
                      SignIn
                    </span>
                  </Link>
                </p>
              </div>
            </>
          ) : (
            <>
              <div>Done!!!</div>
            </>
          )}
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

export default patientregister
