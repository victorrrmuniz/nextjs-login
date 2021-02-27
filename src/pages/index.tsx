import Head from 'next/head'
import { Login } from '../components/Login'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Login />
    </div>
  )
}
