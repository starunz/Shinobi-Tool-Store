import Header from "../../components/Header";
import { Container, Content } from '../cart/CartStyle';
import Input from '../../components/styleSignIn&SignUp/Input';
import { MessageInput } from "./style";
import { Footer } from "../infos/style";
import { useState } from "react";
import { Button } from "../../components/Products/style";
import { useNavigate } from "react-router-dom";
import { ReturnButton } from "../Product/style";
import * as api from '../../services/api';
import Swal from "sweetalert2";
import pain from '../../assets/images/pain.png';
import lee from '../../assets/images/lee.jpg';

export default function Support() {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [clientMessage, setClientMessage] = useState({
        name: '', email: '', message: ''
    });

    function handleChange(e) {
        setClientMessage({ ...clientMessage, [e.target.name]: e.target.value })
    }

    function handleConfirm(e) {
        e.preventDefault();

        if (!clientMessage.name || !clientMessage.email || !clientMessage.message) {
            alert('pereencha')
            return
        }
        setIsLoading(true);
        const promise = api.sendMessage(clientMessage)

        promise.then(() => {
            Swal.fire({
                imageUrl: `${lee}`,
                imageHeight: 140,
                title: "Obrigado!!",
                text: 'Entraremos em contato em breve!',
            });
            navigate('/');
        })
            .catch(() => {
                Swal.fire({
                    imageUrl: `${pain}`,
                    imageHeight: 140,
                    title: "OOPS...",
                    text: 'Algo deu errado. Será que destruiram nosso servidor?. Tente de novo em alguns instantes.',
                });
                setIsLoading(false)
            })
    }

    return (
        <>
            <Header />
            <Container>
                <Content>
                    <h1>Suporte</h1>
                    <h2>Precisa de ajuda ou está com alguma dúvida? <br />
                        Não encontrou o produto que você queria? <br />
                        Tem alguma sugestão para que possamos melhorar sempre? <br /><br />
                    </h2>

                    <h2>Nos mande uma mensagem e entraremos em contato!</h2><br /><br /><br />

                    <h2>Nome:</h2>
                    <Input placeholder="Nome "
                        type='text'
                        name='name'
                        onChange={handleChange}
                        value={clientMessage.name}
                        disabled={isLoading}
                        required >
                    </Input>

                    <h2>Email</h2>
                    <Input
                        type='email'
                        placeholder='E-mail'
                        name='email'
                        onChange={handleChange}
                        value={clientMessage.email}
                        disabled={isLoading}
                        required
                    />

                    <h2>Mensagem:</h2>
                    <MessageInput placeholder="Escreva aqui sua mensagem..."
                        type='text'
                        name='message'
                        onChange={handleChange}
                        value={clientMessage.message}
                        disabled={isLoading}
                        required >
                    </MessageInput>

                    <Footer>
                        <Button onClick={handleConfirm}> Enviar </Button>
                        <ReturnButton onClick={() => navigate(-1)}> Voltar </ReturnButton>
                    </Footer>
                </Content>
            </Container>
        </>
    )
}