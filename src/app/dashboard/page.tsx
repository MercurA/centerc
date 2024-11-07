"use client"

import { signOut } from "next-auth/react"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import SliderNav from '../components/slider/SliderNav';

import styles from './styles.module.css'

const Page = () => {
    const { data: session, status } = useSession();
    console.log(session, status)
    const router = useRouter()
    useEffect(() => {
        if (status === 'unauthenticated') {
          router.push('/');
        }
      }, [status]);
    
      if (status === 'loading') return <p>Loading...</p>;
    
    return (
        <div>
            <SliderNav session={session} handleSignOut={signOut}/>
        </div>
    )
}

export default Page