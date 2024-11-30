"use client"
import { useState } from 'react'
import styles from './styles.module.css'
import Image from 'next/image'

type SliderNavProps = {
    handleSignOut: (otional?: any) => void
    session: any
}

const SliderNav = ({session, handleSignOut}: SliderNavProps) => {
    const [open, setOpen] = useState(false)

    const handleSlider = () => {
        setOpen(!open)
    }

    return (
        <div className={styles.sliderContainer}>
            <div className={`${styles.slideMenu} ${open ? styles.open : styles.closed}`}>
                <div></div>
                <div className={styles.image}>
                    <Image
                        width={80}
                        height={80}
                        src={session?.user?.image}
                        alt={'profile image'}
                    />
                </div>
                <div className={styles.title}>{session?.user?.name}</div>
                <button className={styles.btn} onClick={() => handleSignOut({ callbackUrl: '/' })}>Sign Out</button>
            </div>
            <div className={styles.slideBtn} onClick={handleSlider}>{'Menu'}</div>
        </div>
    )
}

export default SliderNav