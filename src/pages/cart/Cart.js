import Header from "../../components/Header";
import {
    Container, Content, ProductCart,
    Data, Quantity, QuantityButton,
    Number, Price, Total,
    ConfirmButton, Buttons, ShopButton
} from "./CartStyle";
import { ChevronUpCircleSharp, ChevronDownCircleSharp } from 'react-ionicons'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as api from '../../services/api';
import useAuth from "../../hooks/useAuth";

export default function Cart() {

    const { auth } = useAuth();
    const [cartProducts, setCartProducts] = useState([]);
    const [lever, setLever] = useState(false);
    const navigate = useNavigate();
    const [totalAmount, setTotalAmount] = useState(0);
    let sum = 0;

    function loadCart() {
        const promise = api.getUserCart(auth.token);

        promise.then((response) => {
            setCartProducts(response.data.products);

            for (let i = 0; i < response.data.products.length; i++) {
                let price = parseInt(response.data.products[i].price * response.data.products[i].quantity);
                sum += price;
            }
            setTotalAmount(sum);
        })
    }

    function handleChangeQuantity(id, qty) {

        if (qty < 0) {
            return
        }

        const promise = api.updateCart(id, qty, auth.token);

        promise.then(setLever(!lever))
    }

    useEffect(loadCart, [lever])

    return (
        <>
            <Header />
            <Container>
                <Content>
                    <h1>Carrinho de compras</h1>
                    {cartProducts.map((cartProduct) => (
                        <ProductCart key={cartProduct.productId}>
                            <Data>
                                <img src='https://img.joomcdn.net/19aa34e749cab8a3c251114385d098c3ac86b8ba_original.jpeg' alt='' />
                                <div>
                                    <h3>{cartProduct.name}</h3>
                                    <Price>$ {cartProduct.price * cartProduct.quantity}</Price>
                                </div>
                            </Data>
                            <Quantity>
                                <QuantityButton
                                >
                                    <ChevronDownCircleSharp onClick={() => handleChangeQuantity(cartProduct.productId, cartProduct.quantity - 1)}
                                        color={'#E6814A'}
                                        title={'minus'}
                                        height="20px"
                                        width="20px" />
                                </QuantityButton>
                                <Number>{cartProduct.quantity}</Number>
                                <QuantityButton >
                                    <ChevronUpCircleSharp onClick={() => handleChangeQuantity(cartProduct.productId, cartProduct.quantity + 1)}
                                        color={'#E6814A'}
                                        title={'plus'}
                                        height="20px"
                                        width="20px"
                                    />
                                </QuantityButton>
                            </Quantity>
                        </ProductCart>
                    ))}
                    <Total>Total: $ {totalAmount}</Total>

                    <Buttons>
                        <ConfirmButton onClick={() => navigate('/infos')} >Continuar</ConfirmButton>
                        <ShopButton onClick={() => navigate('/')}>Continuar comprando</ShopButton>
                    </Buttons>
                </Content>
            </Container>
        </>
    )

}