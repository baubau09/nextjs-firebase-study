import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { UserContext } from '../lib/context'
import { Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../lib/firebase'
import { doc, onSnapshot, getFirestore } from 'firebase/firestore';

function MyApp({ Component, pageProps }) {
    const [user] = useAuthState(auth)
    const [user, username] = useState(null)

    useEffect(() => {
        let unsubscribe;

        if (user) {
            const ref = doc(getFirestore(), 'users', user.uid)
        }

        return () => {
            second;
        };
    }, [third]);


    return (
        <>
            <UserContext.Provider value={{ user: {}, username: 'jeff123' }}>
                <Navbar />
                <Component {...pageProps} />
                <Toaster />
            </UserContext.Provider>
        </>
    )
}

export default MyApp
