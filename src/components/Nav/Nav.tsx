import React from 'react'

const Nav = () => {
  return (
    <>
      <nav className="bg-custom w-screen fixed">
        <div className="flex items-center h-20 container mx-auto">
          <img className="h-9" src="/LogoW.svg" alt="logow" />
        </div>
      </nav>
      {/* <nav className="bg-custom h-screen w-3/12 inline-block">
        <div className="flex items-center justify-end">
          <img className="h-9" src="/LogoW.svg" alt="logow" />
        </div>
      </nav> */}
    </>
  )
}

export default Nav
