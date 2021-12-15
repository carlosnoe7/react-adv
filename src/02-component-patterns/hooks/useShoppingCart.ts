import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";


export  const useShoppingCart=()=>{
    const [shoppingCart, setShoppingCart] = useState<{[key:string]:ProductInCart}>({});
    const onProductCountChange=({count,product}:{count:number,product:Product})=>{
        // console.log('onProductCountChange')
        
        // if (count===0) {
            
        //     let nuevoarray=Object.values(oldShoppingCart).filter(obj=>obj.count>=1 && obj.id!==product.id);
        //     let nuevoobjeto={};
        //       nuevoarray.forEach(x=>{
        //           Object.assign(nuevoobjeto,{[x.id]:{...x}});
        //          return({[x.id]:{...x}})})
        //     return {...nuevoobjeto};
            
        // }

        
        setShoppingCart(oldShoppingCart=>{

            const productInCart:ProductInCart=oldShoppingCart[product.id] || {...product,count:0};

            if (Math.max(productInCart.count + count,0)>0) {
                productInCart.count +=count;    

                return {
                    ...oldShoppingCart,
                    [product.id]:productInCart
                }
            }
            else{
                const shoppingCart = {...oldShoppingCart}
                delete shoppingCart[product.id]
                return {...shoppingCart}
            }


            // if (count===0) {
            //     const shoppingCart = {...oldShoppingCart}
            //     delete shoppingCart[product.id]
            //     return shoppingCart
            // }
            // else{

            //     return {
            //         ...oldShoppingCart,
            //         [product.id]:{...product,count},
            //     }
            // }


        })

    }
    
    return { 
        onProductCountChange,
        shoppingCart

    }
}