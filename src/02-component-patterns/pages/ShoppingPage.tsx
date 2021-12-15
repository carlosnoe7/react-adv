import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';



export const ShoppingPage = () => {

    
    const {shoppingCart,onProductCountChange}=useShoppingCart();


    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {/* <ProductCard product={ product } className="bg-dark text-white">
                    <ProductCard.Image className="custom-image"/>
                    <ProductCard.Title  title={ 'Hola Mundo' } className="text-white"/>
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard> */}
                
            {
                
                products.map(product=>(

                    <ProductCard 
                        product={ product }
                        className="bg-dark text-white"
                        key={product.id}
                        value={shoppingCart[product.id]?.count || 0}
                        onChange={onProductCountChange}>
                        <ProductImage className="custom-image"/>
                        <ProductTitle className="text-white"/>
                        <ProductButtons className="custom-buttons"/>
                    </ProductCard>
                ))
            }

            </div>

            <div className="shopping-cart">
                {
                    Object.values(shoppingCart).filter(obj=>obj.count>=1).map((x)=>(
                        <ProductCard 
                            product={ x}
                            className="bg-dark text-white"
                            style={{width:'100px'}}
                            key={x.id}
                            value={x.count}
                            onChange={onProductCountChange}
                            >
                            <ProductImage className="custom-image"/>
                            <ProductButtons 
                                className="custom-buttons"
                                style={{display:'flex',justifyContent:'center'}}/>
                        </ProductCard>

                    ))
                }
            </div>

            
        </div>
    )
}
