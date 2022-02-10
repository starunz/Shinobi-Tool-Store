import Header from "../../components/Header";
import { Container, ProductsTitle } from './style';
import Products from "../../components/Products";
import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Home() {

    const [apiProducts, setApiProducts] = useState([]);

    useEffect(() => {
        api.getProducts().then((response) => {
            setApiProducts(response.data);
        })
    })

    return (
        <>
            <Container>
                <Header />
                <ProductsTitle>Nossos produtos: </ProductsTitle>
                {apiProducts.map(({ name, price, quantity, category, _id }) =>
                    <Products key={_id} name={name} price={price} quantity={quantity} category={category}></Products>
                )}

            </Container>
        </>
    )
}