import { Product, Informations, ProductData, Button } from './style';
import { useNavigate } from 'react-router-dom';

export default function Products({ id, image, name, price, quantity, category }) {

    const navigate = useNavigate();

    return (
        <>
            <Product onClick={() => navigate(`/product/${id}`)}>
                <div className="image">
                    <img src={`${image}`} alt={name} />
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