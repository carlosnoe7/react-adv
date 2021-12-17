import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css';

const product=products[0];


export const ShoppingPage = () => {


    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

                {/* <ProductCard product={ product } className="bg-dark text-white">
                    <ProductCard.Image className="custom-image"/>
                    <ProductCard.Title  title={ 'Hola Mundo' } className="text-white"/>
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard> */}
                

                <ProductCard 
                    product={ product }
                    className="bg-dark text-white"
                    key={product.id}
                    initialValues={{
                        count:4,
                        maxCount:10,

                    }}
                    >
                        {
                            ({reset,increaseBy,isMaxCountReached})=>(
                                <>

                                    <ProductImage className="custom-image"/>
                                    <ProductTitle className="text-white"/>
                                    <ProductButtons className="custom-buttons"/>
                                    <button onClick={reset}>Reset</button>
                                    <button onClick={()=>increaseBy(-2)}>-2</button>
                                    {/* SI no se llega al maxCount, ocultar */}
                                    {
                                       !isMaxCountReached&& <button onClick={()=>increaseBy(2)}>+2</button>

                                    }
                                    <span>count</span>
                                </>
                            )
                        }
                </ProductCard>
                
            

            

            

            
        </div>
    )
}
