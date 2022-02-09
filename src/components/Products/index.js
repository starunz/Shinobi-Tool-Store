import { Product, Informations, ProductData, Button } from './style';
import { CashOutline } from 'react-ionicons';

export default function Products() {
    return (
        <>
            <Product>
                <div className="image">
                    <img src='https://img.joomcdn.net/19aa34e749cab8a3c251114385d098c3ac86b8ba_original.jpeg' alt='' />
                </div>
                <Informations>
                    <ProductData>
                        <h2>Kunai23</h2>
                        <p>R$ 20,00</p>
                        <span>Disponíveis: 50</span>
                    </ProductData>
                </Informations>
                <Button>
                    Comprar
                    <CashOutline
                        color={'#00000'}
                        title={'buy'}
                        height="25px"
                        width="25px"
                    />
                </Button>
            </Product>
        </>
    )
}