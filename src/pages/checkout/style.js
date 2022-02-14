import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin-top: calc((100vh - 350px) / 2);
`
const ProductContent = styled.div`
    width: 85%;
    height: auto;

    padding: 12px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #fff;

    box-shadow: 0px 0px 2px rgba(0,0,0,0.7);

    border-radius: 5px;
`
const ContainerProducts = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 20px;
`
const Products = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-bottom: 20px;

    margin-left: 10%;
    
`
const Product = styled.div`
    display: flex;
    align-items: center;


    span {
        font-weight: bold;
        margin-left: 4px;

        font-size: 17px;
    }

    p{
        font-size: 18px;
    }

`
const Info = styled.div`
    display: flex;
    align-items: center;

    span {
        font-weight: bold;
        margin-left: 4px;

        font-size: 17px;
    }

    p{
        font-size: 18px;
    }

`
const Infos = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-left: 10%;

`
const Title = styled.div`
    //width: 50px;

    font-size: 20px;
    font-family: sans-serif;
    font-weight: 400;

    margin: 15px 0;

    color: #000000;
    text-align: center;

    letter-spacing: 2px;
    line-height: 25px;
`

const Button = styled.button`
    width: 80%;
    height: 40px;

    margin-bottom: 10px;

    border-radius: 25px;
    background: none;

    font-size: 14px;
    color: #ffffff;
    background-color: #1C1C1C;
`  
export {
    Container,
    ContainerProducts,
    ProductContent,
    Products,
    Product, 
    Infos,
    Info, 
    Title, 
    Button
}