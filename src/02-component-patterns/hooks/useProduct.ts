<<<<<<< HEAD
import { useState } from "react";


export const useProduct=() => {


    const [counter, setCounter] = useState(0);

    const increaseBy=(value: number) =>{
        setCounter(prev=>Math.max(prev+value,0))
=======
import { useState } from 'react'



export const useProduct = () => {

    const [ counter, setCounter ] = useState(0)

    const increaseBy = ( value: number ) => {
        setCounter( prev => Math.max( prev + value, 0 ) )
>>>>>>> 6df85033d2a9e0f7800393aaafb12290dfb52ffa
    }

    return {
        counter,
        increaseBy
    }
<<<<<<< HEAD
=======

>>>>>>> 6df85033d2a9e0f7800393aaafb12290dfb52ffa
}