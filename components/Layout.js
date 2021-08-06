// Packages
import { ReactNode } from 'react'
import Head from 'next/head'

export default function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="An example of containerized redux for beginners."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  )
}
