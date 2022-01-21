import Navbar from '../components/Navbar'
import '../styles/globals.css'
import {UserContext} from '../lib/context'
import { Toaster } from 'react-hot-toast'
import {useEffect, useState} from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserContext.Provider value={{user: {}, username: 'jeff123'}}>
        <Navbar />
        <Component {...pageProps} />
        <Toaster/>
      </UserContext.Provider>
    </>
  )
}

export default MyApp
