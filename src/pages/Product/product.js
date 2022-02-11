import Header from "../../components/Header";
import {
    Container, ProductContent, ProductImage,
    ProductData, DataHeader, ProductName,
    ProductDescription, ProductQuantity,
    AddCart, ProductFooter, ProductCategory
}
    from "./style";
import { CheckmarkCircle, CloseCircle } from 'react-ionicons'
import { useState } from "react";
import cart from '../../assets/images/cart.png';

export default function Product() {

    const [unavailable, setUnavailable] = useState(false);

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

                        <ProductName>Kunai</ProductName>
                        <ProductCategory>Categoria: longa distância</ProductCategory>
                        <ProductDescription>Uma espécie de Adaga negra com o objetivo de pressionar e esfaquear, pode também causar danos ao ser lançada, apesar de não ser esse o seu objetivo.</ProductDescription>
                        <ProductQuantity>{!unavailable ? `Disponível: 50` : 'Aguarde nosso Chunnin retornar com novas unidades deste item.'}</ProductQuantity>

                    </ProductData>

                    <ProductFooter>
                        <AddCart disabled={unavailable}>
                            <p>Adicionar ao carrinho</p>
                            <img src={cart} alt="" />
                        </AddCart>
                    </ProductFooter>

                </ProductContent>
            </Container>
        </>
    )
}