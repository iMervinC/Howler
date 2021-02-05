import React, { FC } from 'react'
import Head from 'next/head'

interface Layout {
  title: string
}

const PageWarp: FC<Layout> = ({ title, children }) => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/pic1.svg" />
      </Head>
      <main>{children}</main>
    </div>
  )
}

export default PageWarp
