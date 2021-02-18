import React, { FC } from 'react'
import Head from 'next/head'

const PageWrap: FC<{ title: string; splash?: boolean }> = ({
  title,
  splash,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/pic1.svg" />
      </Head>
      <div className={`${!splash && 'page-wraper'}`}>{children}</div>
    </>
  )
}

export default PageWrap
