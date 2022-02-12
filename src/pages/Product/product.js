import Header from "../../components/Header";
import {
    Container, ProductContent, ProductImage,
    ProductData, DataHeader, ProductName,
    ProductDescription, ProductQuantity,
    AddCart, ProductFooter, ProductCategory,
    ProductPrice, ReturnButton
}
    from "./style";
import { CheckmarkCircle, CloseCircle } from 'react-ionicons'
import { useEffect, useState } from "react";
import cart from '../../assets/images/cart.png';
import { useNavigate, useParams } from "react-router-dom";
import * as api from '../../services/api';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

export default function Product() {

    const { productId } = useParams();
    const { auth } = useAuth();
    const [unavailable, setUnavailable] = useState(false);
    const [apiProduct, setApiProduct] = useState();
    const [category, setCategory] = useState('');
    const navigate = useNavigate();
    let cat = '';

    function loadProduct() {

        const promise = api.getProduct(productId);

        promise.then((response) => {

            setApiProduct(response.data);

            for (let i = 0; i < response.data[0].category.length; i++) {
                if (i === response.data[0].category.length - 1) {
                    cat += response.data[0].category[i].distância;
                } else {
                    cat += response.data[0].category[i].distância + ', ';
                }
            }
            setCategory(cat);

            if (response.data[0].quantity === 0) {
                setUnavailable(true);
            }

        }).catch(() => {
            alert('Algo deu errado. Tente Novamente.')
        })
    }

    useEffect(loadProduct, []);

    function handleAddToCart() {
        if (auth && auth.token) {
            navigate('/cart');
        } else {
            Swal.fire({
                title: 'OPS!',
                text: "Você precisa estar logado para continuar.",
                imageUrl: 'https://res.cloudinary.com/dzdgpwtox/image/upload/w_450,c_scale/v1612287799/designer-tool-uploads/bucket_4155/1612287796191.png',
                imageHeight: 200,
                showCancelButton: true,
                confirmButtonColor: '#E6814A',
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
                        <img src='https://img.joomcdn.net/19aa34e749cab8a3c251114385d098c3ac86b8ba_original.jpeg' alt='product' />
                    </ProductImage>

                    <ProductData>
                        <DataHeader unavailable={unavailable}>
                            {!unavailable ?
                                <CheckmarkCircle
                                    color={'green'}
                                    title={'check'}
                                    height="15px"
                                    width="15px"
                                />
                                :
                                <CloseCircle
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
                        <ProductCategory>Categoria: {category}</ProductCategory>
                        <ProductDescription>{apiProduct[0].description}</ProductDescription>
                        <div className="numbers">
                            <ProductQuantity>{!unavailable ? `Disponível: ${apiProduct[0].quantity}` : 'Aguarde nosso Chunnin retornar com novas unidades deste item.'}</ProductQuantity>
                            <ProductPrice>{!unavailable ? `$ ${apiProduct[0].price}` : null}</ProductPrice>
                        </div>
                    </ProductData>

                    <ProductFooter>
                        <AddCart disabled={unavailable} onClick={handleAddToCart}>
                            <p>Adicionar ao carrinho</p>
                            <img src={cart} alt="" />
                        </AddCart>
                        <ReturnButton onClick={() => navigate(-1)}>Voltar para loja</ReturnButton>
                    </ProductFooter>

                </ProductContent>
            </Container>
        </>
    )
}