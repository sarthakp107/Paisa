import React, { useEffect, useState } from 'react'
import { useFirestore } from '../../hooks/useFirestore.js'

export default function TransactionForm({ uid }) {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const { addDocument, response } = useFirestore('transactions'); //firestore makes it if not exists

    const handleSubmit = (e) => {
        e.preventDefault();
        addDocument({
            uid, //uid: uid
            name,
            amount
        });
    }

    useEffect(() => {
        if(response.success){
            //clear the form
            setName('');
            setAmount('');
        }
    }, [response.success])

    return (
        <>
            <h3>Add a Transaction</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Transaction name: </span>
                    <input
                        type="text"
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </label>

                <label>
                    <span>Amount </span>
                    <input
                        type="number"
                        required
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                    />
                </label>
                <button>Add Transaction</button>
            </form>
        </>
    )
}
