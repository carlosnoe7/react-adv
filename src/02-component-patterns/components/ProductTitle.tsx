import { useContext } from 'react';
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'

<<<<<<< HEAD
export interface Props{ 
    className?: string,
    title?: string,
    style?: React.CSSProperties;
}

export const ProductTitle = ({ title,className,style }:Props ) => {
=======

export interface Props {
    className?: string 
    title?: string, 
    activeClass?: string;
    style?: React.CSSProperties 
}

export const ProductTitle = ({ title, className, style }: Props) => {
>>>>>>> c1d06e5fe525f48ecbe29092cd63c566fd3e7329

    const { product } = useContext( ProductContext )

    return (
        <span 
<<<<<<< HEAD
        className={ `${styles.productDescription} ${className}`}
         style={style}>
=======
            className={ `${ styles.productDescription } ${ className }` }
            style={ style }
        >
>>>>>>> c1d06e5fe525f48ecbe29092cd63c566fd3e7329
            { title ? title : product.title }
        </span>
    );
}