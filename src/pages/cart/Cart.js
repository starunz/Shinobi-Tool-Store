import Header from "../../components/Header";
import {
    Container, Content, ProductCart,
    Data, Quantity, QuantityButton,
    Number, Price, Total,
    ConfirmButton, Buttons, ShopButton, DeleteButton
} from "./CartStyle";
import { AiFillDownCircle, AiFillUpCircle } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as api from '../../services/api';
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import pain from '../../assets/images/pain.png'

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
        }).catch((error) => {
            if (error.response.status !== 404)
                Swal.fire({
                    imageUrl: `${pain}`,
                    imageHeight: 140,
                    title: "OOPS...",
                    text: 'Algo deu errado. Será que destruiram nosso servidor?. Tente de novo em alguns instantes.',
                });
        })
    }

    function handleChangeQuantity(id, qty, change) {

        if (qty < 0) {
            return
        }

        const promise = api.updateCart(id, qty, change, auth.token);

        promise.then(() => setLever(!lever))
            .catch(() => {
                Swal.fire({
                    imageUrl: `${pain}`,
                    imageHeight: 140,
                    title: "OOPS...",
                    text: 'Algo deu errado. Será que destruiram nosso servidor?. Tente de novo em alguns instantes.',
                });
            })
    }

    function handleDelete(id, qty) {

        Swal.fire({
            text: "Deseja deletar este item do seu carrinho?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#E6814A',
            cancelButtonColor: '#b8b8b8',
            confirmButtonText: 'Deletar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                const promise = api.deleteItem(id, qty, auth.token);

                promise.then(() => setLever(!lever))
                    .catch(() => {
                        Swal.fire({
                            imageUrl: `${pain}`,
                            imageHeight: 140,
                            title: "OOPS...",
                            text: 'Algo deu errado. Será que destruiram nosso servidor?. Tente de novo em alguns instantes.',
                        });
                    })
            }
        })
    }

    function handleConfirm() {

        if (cartProducts.length === 0) {
            return;
        }

        navigate('/infos')
    }

    useEffect(
        loadCart

        // eslint-disable-next-line 
        , [lever])

    return (
        <>
            <Header />
            <Container>
                <Content>
                    <h1>Carrinho de compras</h1>
                    {cartProducts.map((cartProduct) => (
                        <ProductCart key={cartProduct.productId}>
                            <Data>
                                <img src={cartProduct.image} alt='' />
                                <div>
                                    <h3>{cartProduct.name}</h3>
                                    <Price>$ {cartProduct.price * cartProduct.quantity}</Price>
                                </div>
                            </Data>
                            <Quantity>
                                <QuantityButton
                                >
                                    <AiFillDownCircle onClick={() => handleChangeQuantity(cartProduct.productId, cartProduct.quantity - 1, -1)}
                                        color={'#E6814A'}
                                        size={20}
                                    />
                                </QuantityButton>
                                <Number>{cartProduct.quantity}</Number>
                                <QuantityButton >
                                    <AiFillUpCircle onClick={() => handleChangeQuantity(cartProduct.productId, cartProduct.quantity + 1, +1)}
                                        color={'#E6814A'}
                                        size={20}
                                    />
                                </QuantityButton>

                                <DeleteButton onClick={() => handleDelete(cartProduct.productId, cartProduct.quantity)}> <GrClose size={15}></GrClose> </DeleteButton>
                            </Quantity>
                        </ProductCart>
                    ))}
                    <Total>Total: $ {totalAmount}</Total>

                    <Buttons>
                        <ConfirmButton onClick={handleConfirm} >Avançar</ConfirmButton>
                        <ShopButton onClick={() => navigate('/')}>Continuar comprando</ShopButton>
                    </Buttons>
                </Content>
            </Container>
        </>
    )

}