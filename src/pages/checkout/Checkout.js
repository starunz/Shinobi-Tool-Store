import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { 
    Container,
    ContainerProducts,
    ProductContent,
    Products,
    Product, 
    Infos,
    Info, 
    Title, 
    Button
} from './style';

import * as api from '../../services/api'
import useAuth from '../../hooks/useAuth';

import Swal from 'sweetalert2';
import pain from '../../assets/images/pain.png'
import lee from '../../assets/images/lee.jpg';

export default function Checkout() {
    const [products, setproducts] = useState([]);
    const [infos, setInfos] = useState([]);
    const { auth } = useAuth();
    const navigate = useNavigate()

    const body = [
        {
            produts: [...products],
            infoName: infos.name,
            infoAdress: infos.adress,
            infoPayment: infos.payment,
            infoVillage: infos.village
        }
    ]

    function getOrderInfos() {
        const promise = api.getOrder(auth.token);

        promise.then((res) => { 

            setproducts(res.data.userCart.products)
            setInfos(res.data.userInfos) 
        }).catch(() => {
            Swal.fire({
                imageUrl: `${pain}`,
                imageHeight: 140,
                title: "OOPS...",
                text: 'Algo deu errado. Será que destruiram nosso servidor?. Tente de novo em alguns instantes.',
            });
        })
    }
    
    function confirmOrder() {
        const promise = api.postOrder(body, auth.token);
        
        promise.then(() => {

            Swal.fire({
                imageUrl: `${lee}`,
                imageHeight: 140,
                title: 'Arigatou Gozaimasu',
                text: 'Volte sempre!',
            });

            setTimeout(() => { navigate('/')}, 1500);

        }).catch(() => {
            
            Swal.fire({
                imageUrl: `${pain}`,
                imageHeight: 140,
                title: "OOPS...",
                text: 'Algo deu errado. Será que destruiram nosso servidor?. Tente de novo em alguns instantes.',
                timer: 15000
            });
        })
    }

    useEffect(
        getOrderInfos

        // eslint-disable-next-line 
    ,[])

    return(
        <>
            <Container>
                <ProductContent>

                    <ContainerProducts>
                        <Title>Confirme seu pedido <br /> ଘ(੭ˊᵕˋ)੭* ੈ✩‧₊˚</Title>
                        {
                            products.map((item, index) => {
                                return ( <Confirm item={item} key={index} /> )
                            })
                        }

                        <Infos>

                            <Info>
                                <p>Nome: </p>
                                <span> {infos.name}</span>
                            </Info>

                            <Info>
                                <p>Aldeia: </p>
                                <span> {infos.village}</span>

                            </Info>

                            <Info> 
                                <p>Endereço: </p>
                                <span> {infos.adress}</span>
                            </Info>

                            <Info>
                                <p>Forma de pagamento: </p>
                                <span> {infos.payment}</span>
                            </Info>

                        </Infos>

                    </ContainerProducts>

                    <Button onClick={confirmOrder}>confirmar compra </Button>
                    <Button onClick={() => navigate(-1)}>voltar</Button>
                </ProductContent>
            </Container>
        </>
    );
}

function Confirm({item}) {
    return(
        <>
            
            <Products>
                <Product>
                    <p>Produto:</p>
                    <span>{item.name}</span>
                </Product>
                
                <Product>
                    <p>Preço:</p>
                    <span>${item.price} </span>
                </Product>
                <Product>
                    <p>Quantidade:</p>
                    <span>{item.quantity}</span>
                </Product>
            </Products>
        </>
    )
}
