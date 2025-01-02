import React from 'react'
import styles from './Home.module.css'
import TransactionForm from './TransactionForm'
import { useAuthContext } from '../../hooks/useAuthContext.js'


export default function Home() {

  const { user } = useAuthContext();
  console.log('user in home:', user);
  console.log('UID in home:', user.uid);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        Transaction list
        
      </div>

      <div className={styles.sidebar}>
        
        <TransactionForm uid= {user.uid}/>
      </div>

    </div>
  )
}
