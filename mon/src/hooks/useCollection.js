//subscribing to a real time data
import React, { useEffect, useState } from 'react'
import {projectFirestore } from "../firebase/config" 

export const useCollection = (collection , query) => {

    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ref = projectFirestore.collection(collection);

        if(query){
            ref = ref.where(...query);
        }

        const unsubscribe = ref.onSnapshot((snapshot) => { //listens real time data
            let results = [];
            snapshot.docs.forEach((doc) => {
                results.push({...doc.data(), id: doc.id })//data = uid, name, amount .... id : id of the doc itself
            })

            setDocuments(results);
            setError(null);
        }, (error) => {
            console.log(error);
            setError('Could not Fetch the Data');
        })

        //unsubscribe on unmount
        return () => unsubscribe(); //will no longer get the snapshot and update it after we move on to the next new page

    } , [collection]);

    return {documents, error}
    
}
