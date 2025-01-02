import React from 'react'
import styles from './Home.module.css'
import TransactionForm from './TransactionForm'
import { useAuthContext } from '../../hooks/useAuthContext.js'
import { useCollection } from '../../hooks/useCollection.js'
import TransactionList from './TransactionList.js'

export default function Home() {

  const { user } = useAuthContext();
  const {documents, error} = useCollection(
    'transactions',
    ["uid", "==", user.uid]
    
  );
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions= {documents}/>}
       
        
      </div>

      <div className={styles.sidebar}>
        
        <TransactionForm uid= {user.uid}/>
      </div>

    </div>
  )
}
