import React from 'react'
import styles from './Home.module.css'
import TransactionForm from './TransactionForm'



export default function home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        Transaction list
        
      </div>

      <div className={styles.sidebar}>
        
        <TransactionForm/>
      </div>

    </div>
  )
}
