import Hero from '@/components/hero/hero'
import styles from './page.module.css'
import Navbar from '@/components/navbar/navbar'
import Social from '@/components/social/social'
import React from 'react';

export default function Home() {


  return (
    <main className={styles.main}>
     <Navbar />
     <div className={styles.bodyContainer}>
     <Hero />
     <Social />
     </div>
    </main>
  )
}
