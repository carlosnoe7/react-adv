import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { products } from '../data/products';

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
                    key={product.id}
                    initialValues={{
                        count:4,
                        maxCount:10,

                    }}
                    >
                        {
                            ({reset,increaseBy,isMaxCountReached})=>(
                                <>

                                    <ProductImage />
                                    <ProductTitle />
                                    <ProductButtons />
                                </>
                            )
                        }
                </ProductCard>
                
            

            

            

            
        </div>
    )
}
