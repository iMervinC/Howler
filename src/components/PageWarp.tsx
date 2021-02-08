import React, { FC } from 'react'
import Head from 'next/head'

const PageWarp: FC<{ title: string }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/pic1.svg" />
      </Head>
      <div className="max-w-main w-main border-r-4 border-l-4 border-custom">
        {children}
      </div>
    </>
  )
}

export default PageWarp
