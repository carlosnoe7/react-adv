import { useEffect, useRef, useState } from 'react'
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs{
    product:Product;
    onChange?: (args:onChangeArgs)=>void;
    value?:number;
}

<<<<<<< HEAD
export const useProduct = ({onChange,product,value=0}:useProductArgs) => {

    const [ counter, setCounter ] = useState(value);

    const isControlled = useRef(!!onChange);

    const increaseBy = ( value: number ) => {
        
        if (isControlled.current) {
            return onChange!({count:value,product});
        }

        const newValue=Math.max(counter+value,0);
        setCounter( newValue )
        
        onChange && onChange({count:newValue, product});
        
    }

    useEffect(() => {
        setCounter(value);

    }, [value])
=======
interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
}


export const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {

    const [ counter, setCounter ] = useState( value );

    const isControlled = useRef( !!onChange )

    const increaseBy = ( value: number ) => {

        if( isControlled.current ) {
            return onChange!({ count: value, product });
        }
        
        const newValue = Math.max( counter + value, 0 )
        setCounter( newValue );

        onChange && onChange({ count: newValue, product });
    }

    useEffect(() => {
        setCounter( value );
    }, [ value ])
>>>>>>> c1d06e5fe525f48ecbe29092cd63c566fd3e7329

    return {
        counter,
        increaseBy
    }
}