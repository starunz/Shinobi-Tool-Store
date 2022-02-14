import Header from "../../components/Header";
import { ProductsTitle, Container } from '../Home/style';

import styled from "styled-components";

export default function Team() {
    return (
        <>
            <Container>
                <Header />
                <ProductsTitle>Equipe: </ProductsTitle>

                <Product>
                    <div className="image">
                        <img src='https://avatars.githubusercontent.com/u/87653713?v=4' alt='' />
                    </div>

                    <Informations>
                        <ProductData>
                            <h2>Bruna Souza</h2>
                            <p>Dev Full Stack <br /> Student</p>
                            <span>📂 Projetos: </span>
                            <a href="https://github.com/starunz" > github.com/starunz</a>
                        </ProductData>
                    </Informations>
                </Product>

                <Product>
                    <div className="image">
                        <img src='https://avatars.githubusercontent.com/u/93613278?v=4' alt='' />
                    </div>

                    <Informations>
                        <ProductData>
                            <h2>Luis Garbelotti</h2>
                            <p>Dev Full Stack <br /> Student</p>
            
                            <span >📂 Projetos:</span>
                            <a href="https://github.com/luis-garbelotti" > github.com/luis-garbelotti</a>
                        </ProductData>
                    </Informations>
                </Product>
            </Container>
        </>
    );
}

const Product = styled.div`
    
    //width: 90vw;
    height: 320px;
    
    padding: 12px;
    margin-bottom: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    background-color: #fff;
    box-shadow: 0px 0px 2px rgba(0,0,0,0.7);

    border-radius: 5px;

    .image {
        width: 45vw;
        height: 25vh;
        
        //border: 1px solid lightgray;
        border-radius: 5px;
    }

    .image img {
        width: 100%;
        height: 100%;

        object-fit: contain;

        border-radius: 5px ;
    }

`

const Informations = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;

    width: 60vw;
    height: 40vh;

`

const ProductData = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    h2 {
        font-size: 22px;
        margin-top: 5px;

        font-weight: bold;

    }

    p {
        font-size: 18px;
        color: black;

        font-style: italic;
        margin-top: 5px;

        text-align: center;
    }

    span {
        font-size:17px;
        margin-top: 5px;

        //font-style: oblique;
        //font-weight: 0;

    }

    a {
        color: #1C1C1C;
        margin-top: 5px;
        
    }

`