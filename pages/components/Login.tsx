import React from 'react'

function Login() {
  return (
    <div>
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
          <span className="cursor-pointer px-3 font-bold text-red-600 underline">
            Register Now
          </span>
        </p>
      </div>
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
          <span className="cursor-pointer px-3 font-bold text-red-600 underline">
            Register Now
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login
