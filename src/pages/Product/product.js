import Header from "../../components/Header";
import {
    Container, ProductContent, ProductImage,
    ProductData, DataHeader, ProductName,
    ProductDescription, ProductQuantity,
    AddCart, ProductFooter, ProductCategory,
    ProductPrice, ReturnButton
}
    from "./style";
import { IoCheckmarkCircle, IoCloseCircle } from 'react-icons/io5'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as api from '../../services/api';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import kakashi from '../../assets/images/kakashin.png';
import narutin from '../../assets/images/narutin.png';
import pain from '../../assets/images/pain.png';

export default function Product() {

    const { productId } = useParams();
    const { auth } = useAuth();
    const [unavailable, setUnavailable] = useState(false);
    const [apiProduct, setApiProduct] = useState();
    const navigate = useNavigate();

    function loadProduct() {

        const promise = api.getProduct(productId);

        promise.then((response) => {

            setApiProduct(response.data);

            if (response.data[0].quantity === 0) {
                setUnavailable(true);
            }

        }).catch(() => {
            Swal.fire({
                imageUrl: `${pain}`,
                imageHeight: 140,
                title: "OOPS...",
                text: 'Algo deu errado. Será que destruiram nosso servidor?. Tente de novo em alguns instantes.',
            });
        })
    }

    useEffect(
        loadProduct

        // eslint-disable-next-line 
        , []);

    function handleAddToCart() {
        if (auth && auth.token) {

            const promise = api.sendToCart({ name: apiProduct[0].name, quantity: 1, price: apiProduct[0].price }, auth.token, apiProduct[0]._id,);

            promise.then(() => {

                navigate('/cart');

            }).catch((error) => {

                if (error.response.status === 409) {
                    Swal.fire({
                        imageUrl: `${narutin}`,
                        imageHeight: 140,
                        title: "OOPS...",
                        text: 'Você já possui este item no seu carrinho.',
                    });
                }
            })

        } else {

            Swal.fire({
                title: 'OOPS...',
                text: "Você precisa estar logado para continuar.",
                imageUrl: `${kakashi}`,
                imageHeight: 140,
                showCancelButton: true,
                confirmButtonColor: '#1C1C1C',
                cancelButtonColor: '#b8b8b8',
                confirmButtonText: 'Logar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login');
                }
            })
        }
    }

    if (!apiProduct) {
        return <h1>Carregando</h1>
    }

    return (
        <>
            <Header />
            <Container>
                <ProductContent>

                    <ProductImage>
                        <img src={apiProduct[0].image} alt='product' />
                    </ProductImage>

                    <ProductData>
                        <DataHeader unavailable={unavailable}>
                            {!unavailable ?
                                <IoCheckmarkCircle
                                    color={'green'}
                                    title={'check'}
                                    height="15px"
                                    width="15px"
                                />
                                :
                                <IoCloseCircle
                                    color={'red'}
                                    title={'check'}
                                    height="15px"
                                    width="15px"
                                />
                            }
                            {!unavailable ?
                                <p>Produto Disponível</p> :
                                <p>Produto Indisponível</p>
                            }
                        </DataHeader>

                        <ProductName>{apiProduct[0].name}</ProductName>
                        <ProductCategory>Categoria: {apiProduct[0].category[0].type}</ProductCategory>
                        <ProductDescription>{apiProduct[0].description}</ProductDescription>
                        <div className="numbers">
                            <ProductQuantity>{!unavailable ? `Disponível: ${apiProduct[0].quantity}` : 'Aguarde nosso Chunnin retornar com novas unidades deste item.'}</ProductQuantity>
                            <ProductPrice>{!unavailable ? `$ ${apiProduct[0].price}` : null}</ProductPrice>
                        </div>
                    </ProductData>

                    <ProductFooter>
                        <AddCart disabled={unavailable} onClick={handleAddToCart}>
                            <p>Adicionar ao carrinho</p>
                        </AddCart>
                        <ReturnButton onClick={() => navigate(-1)}>Voltar para loja</ReturnButton>
                    </ProductFooter>

                </ProductContent>
            </Container>
        </>
    )
}