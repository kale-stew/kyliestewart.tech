import React, { useState } from 'react'
import Router from 'next/router'
import Footer from './Footer'
import Loading from './Loading'
import Navigation from './Navigation'

import styles from './Layout.module.css'

export default function Layout({ children, home }) {
  const [loading, setLoading] = useState(false)
  Router.events.on('routeChangeStart', (url) => setLoading(true))
  Router.events.on('routeChangeComplete', (url) => setLoading(false))

  return (
    <>
      <Navigation />
      <div className={styles.wrapper}>
        <main>{!loading ? children : <Loading />}</main>
      </div>
      <Footer />
    </>
  )
}
