'use client'
import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import { AppContext } from '@/context/AppContextProvider'
export default function Home() {
  const { allInformation, setAllInformation } = useContext(AppContext)

  return (
    <div>

    </div>
  )
}
