import React, { FC } from 'react'
import Head from 'next/head'

const PageWarp: FC<{ title: string }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/pic1.svg" />
      </Head>
      {children}
    </>
  )
}

export default PageWarp
