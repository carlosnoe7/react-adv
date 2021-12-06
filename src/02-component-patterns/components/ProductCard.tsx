<<<<<<< HEAD


import { useProduct } from '../hooks/useProduct';
import  { createContext } from 'react';
import { ProductContextProps, ProductCardProps } from '../interfaces/Interfaces';
import styles from '../styles/styles.module.css';





export const ProductContext=createContext({

} as ProductContextProps);
const{Provider}=ProductContext; 



export const ProductCard = ({product,children}:ProductCardProps) => {

    const {counter,increaseBy}=useProduct();
=======
import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({ children, product }: ProductCardProps ) => {

    const { counter, increaseBy } = useProduct();
>>>>>>> 6df85033d2a9e0f7800393aaafb12290dfb52ffa

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
<<<<<<< HEAD

            <div className={styles.productCard}>
                {children}
                
=======
            <div className={ styles.productCard }>
                { children }
>>>>>>> 6df85033d2a9e0f7800393aaafb12290dfb52ffa
            </div>
        </Provider>
    )
}
<<<<<<< HEAD

=======
>>>>>>> 6df85033d2a9e0f7800393aaafb12290dfb52ffa
