import Header from "../../components/Header";
import { Container, Content } from '../cart/CartStyle';
import Input from '../../components/styleSignIn&SignUp/Input';
import { Form, Footer } from "./style";
import { useState } from "react";
import { Button } from "../../components/Products/style";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { ReturnButton } from "../Product/style";
import * as api from '../../services/api';
import Swal from "sweetalert2";
import pain from '../../assets/images/pain.png';

export default function Infos() {

    const { auth } = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [buyerData, setBuyerData] = useState({
        name: '', adress: '', village: '', payment: ''
    });

    function handleChange(e) {
        setBuyerData({ ...buyerData, [e.target.name]: e.target.value })
    }

    function handleConfirm(e) {
        e.preventDefault();

        if (!buyerData.name || !buyerData.adress || !buyerData.village || !buyerData.payment || buyerData.payment === 'default') {
            alert('pereencha')
            return
        }
        setIsLoading(true);

        const promise = api.sendInfos(auth.token, buyerData)

        promise.then(navigate('/checkout'))
            .catch(() => {
                Swal.fire({
                    imageUrl: `${pain}`,
                    imageHeight: 140,
                    title: "OOPS...",
                    text: 'Algo deu errado. Será que destruiram nosso servidor?. Tente de novo em alguns instantes.',
                });
            })
    }

    return (
        <>
            <Header />
            <Container>
                <Content>
                    <h1>Dados do comprador:</h1>

                    <h2>Nome:</h2>
                    <Input placeholder="Nome "
                        type='text'
                        name='name'
                        onChange={handleChange}
                        value={buyerData.name}
                        disabled={isLoading}
                        required >
                    </Input>

                    <h2>Endereço de entrega (e complemento, se houver):</h2>
                    <Input placeholder="Ex: Av. Batatinha, 123, apto 1 bl 2, Bairro Batata"
                        type='text'
                        name='adress'
                        onChange={handleChange}
                        value={buyerData.adress}
                        disabled={isLoading}
                        required >
                    </Input>

                    <h2>Aldeia:</h2>
                    <Input placeholder="Ex: Av. Batatinha, 123, apto 1 bl 2, Bairro Batata"
                        type='text'
                        name='village'
                        onChange={handleChange}
                        value={buyerData.village}
                        disabled={isLoading}
                        required >
                    </Input>

                    <h2>Forma de pagamento:</h2>

                    <Form >
                        <label>
                            <select name='payment' onChange={handleChange}>
                                <option value="default">Selecione uma opção...</option>
                                <option value="Débito">Débito</option>
                                <option value="Crédito">Crédito</option>
                                <option value="Boleto bancario">Boleto</option>
                                <option value="Pix">Pix</option>
                            </select>
                        </label>
                    </Form>

                    <Footer>
                        <Button onClick={handleConfirm}> Continuar compra</Button>
                        <ReturnButton onClick={() => navigate(-1)}> Voltar </ReturnButton>
                    </Footer>
                </Content>
            </Container>
        </>
    )

}