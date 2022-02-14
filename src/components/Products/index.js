import { Product, Informations, ProductData, Button } from './style';
import { useNavigate } from 'react-router-dom';

export default function Products({ id, name, price, quantity, category }) {

    const navigate = useNavigate();

    return (
        <>
            <Product onClick={() => navigate(`/product/${id}`)}>
                <div className="image">
                    <img src='https://img.joomcdn.net/19aa34e749cab8a3c251114385d098c3ac86b8ba_original.jpeg' alt='' />
                </div>
                <Informations>
                    <ProductData>
                        <h2>{name}</h2>
                        <p>R$ {price}</p>
                        <span>Disponíveis: {quantity}</span>
                    </ProductData>
                </Informations>
                <Button>
                    Visualizar Item
                </Button>
            </Product>
        </>
    )
}