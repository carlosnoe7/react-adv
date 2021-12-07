import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}



export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                <ProductCard product={ product } className="bg-dark text-white">
                    <ProductCard.Image className="custom-image"/>
                    <ProductCard.Title  title={ 'Hola Mundo' } className="text-white"/>
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>


                <ProductCard 
                    product={ product }
                    className="bg-dark text-white">
                    <ProductImage className="custom-image"/>
                    <ProductTitle className="text-white"/>
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>


                <ProductCard 
                    product={ product }
                    style={{
                        backgroundColor:'#70D1F8'
                    }}
                >
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons style={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}/>
                </ProductCard>
            </div>
        </div>
    )
}
