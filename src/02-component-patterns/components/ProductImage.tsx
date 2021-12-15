import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg';

<<<<<<< HEAD
export interface Props{
    img?: string;
    className?: string;
    style?: React.CSSProperties;
}


export const ProductImage = ({ img,className,style }:Props) => {
=======
export interface Props {
    img?: string;
    className?: string;
    style?: React.CSSProperties 
}


export const ProductImage = ({ img, className, style }: Props ) => {
>>>>>>> c1d06e5fe525f48ecbe29092cd63c566fd3e7329

    const { product } = useContext( ProductContext );
    let imgToShow: string;

    if ( img ) {
        imgToShow = img;
    } else if ( product.img ) {
        imgToShow = product.img
    } else {
        imgToShow = noImage;
    }


    return (
<<<<<<< HEAD
        <img className={ `${styles.productImg} ${className}` } style={style} src={ imgToShow } alt="Product" />
=======
        <img 
            className={ `${ styles.productImg } ${ className }` } 
            src={ imgToShow } 
            style={ style }
            alt="Product" 
        />
>>>>>>> c1d06e5fe525f48ecbe29092cd63c566fd3e7329
    );
}