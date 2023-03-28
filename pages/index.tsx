'use client'

import styles from '~@styles/page.module.scss'
import c from 'classnames'
import React from 'react'

export interface HomeProps {
  className?: string
}

const Home: React.FC<HomeProps> = ({ className }: HomeProps) => {
  return (
    <main className={c(styles.main, className)}>
    </main>
  )
}

export default Home
