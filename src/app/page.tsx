"use client"
import styles from "./page.module.css";
import { signIn } from "next-auth/react"

export default function Home() {
  return (
    <div className={styles.page}>
       <button className={styles.btn} onClick={() => signIn("google", { callbackUrl: '/dashboard' })}>Sign In</button>
       
    </div>
  );
}
