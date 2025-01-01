import React, { useEffect, useReducer, useState } from 'react'
import {projectFirestore} from "../firebase/config" 

let initalState = {
    document : null,
    isPending: false,
    error: null,
    success: null
}

const firestoreReducer = (state , action) => {
    switch (action.type){

        default: 
        return state
    }
}
//to add or remove data from the collection
export const useFirestore = (collection) => {
    const [response , dispatch] = useReducer(firestoreReducer , initalState);
    const [isCancelled , setIsCancelled] = useState(false);

    //collection ref
    const ref = projectFirestore.collection(collection)

    //add a document
    const addDocument = (doc) => {

    }

    //delete a document
    const deleteDocument = (id) => {

    }

    useEffect(() => {
        return () => setIsCancelled(true);
    },[])

    return {addDocument , deleteDocument , response}
}

