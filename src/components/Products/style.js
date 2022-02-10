import styled from "styled-components"

const Product = styled.div`

    width: 90vw;
    height: 280px;
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
        width: 50vw;
        height: 18vh;
        
        border: 1px solid lightgray;
    }

    .image img {
        width: 100%;
        height: 100%;

        object-fit: cover;
    }

`

const Informations = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;

    width: 60vw;
    height: 14vh;

`

const ProductData = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    h2 {
        font-size: 20px;
    }

    p {
        font-size: 18px;
        color: green;
    }

    span {
        font-size:17px;
    }

`

const Button = styled.button`

    width: 140px;
    height: 40px;
    padding: 5px;
    
    font-size: 18px;
    
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    border-radius: 50px;
    background-color: #849173;

`

export {
    Product,
    Informations,
    ProductData,
    Button
}