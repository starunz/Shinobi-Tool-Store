import Header from "../../components/Header";
import { ProductsTitle, Container } from '../Home/style';
import Products from "../../components/Products";

import { useEffect, useState } from "react";

import * as api from '../../services/api';
import Swal from "sweetalert2";

import pain from '../../assets/images/pain.png';


export default function Categories() {
    const [apiProducts, setApiProducts] = useState([]);

    useEffect(() => {
        api.getProducts().then((response) => {
            setApiProducts(response.data);
        }).catch(() => {
            Swal.fire({
                imageUrl: `${pain}`,
                imageHeight: 140,
                title: "OOPS...",
                text: 'Algo deu errado. Será que destruiram nosso servidor?. Tente de novo em alguns instantes.',
            })
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
                    <Products
                        key={product._id}
                        id={product._id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        quantity={product.quantity}
                        category={product.category}
                    />
                ))}
            </Container>
        </>
    );
}