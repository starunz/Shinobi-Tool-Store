import Header from "../../components/Header";
import { Container, ProductsTitle } from './style';
import Products from "../../components/Products";
import { useEffect, useState } from "react";
import * as api from '../../services/api'

export default function Home() {

    const [apiProducts, setApiProducts] = useState([]);

    useEffect(() => {
        api.getProducts().then((response) => {
            setApiProducts(response.data);
        }).catch(error => {
            alert('Algo deu errado. Tente novamente.');
        })
    }, []);

    if (apiProducts === []) {
        return <h1>Carregando...</h1>
    }

    return (
        <>
            <Container>
                <Header />
                <ProductsTitle>Nossos produtos: </ProductsTitle>
                {apiProducts.map((product) => (
                    <Products key={product._id} name={product.name} price={product.price} quantity={product.quantity} category={product.category}></Products>
                ))}

            </Container>
        </>
    )
}