import React from 'react'

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="/logo.svg" alt="logo" />
      <h2 className="text-custom-twitter text-4xl capitalize mb-8">
        a twitter clone
      </h2>
      <button
        className="px-10 py-1 rounded-md text-white bg-custom hover:shadow-lg"
        onClick={() => console.log('Hey')}
      >
        Login
      </button>
    </div>
  )
}

export default LoginPage
