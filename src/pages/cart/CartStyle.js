import styled from "styled-components";

const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding-top: 115px;

`

const Content = styled.div`

    width: 90vw;
    height: auto;
    padding: 12px;

    background-color: #fff;
    box-shadow: 0px 0px 2px rgba(0,0,0,0.7);
    border-radius: 5px;

    h1{

        font-size: 24px;
        margin-bottom: 35px;
        font-style: italic;
        font-weight: 600;
    }

`

const ProductCart = styled.div`

    width: 100%;
    padding: 8px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 15px;

    border-radius: 5px;
    background-color: #ebebeb;
    box-shadow: 0px 0px 2px rgba(0,0,0,0.4);

    img {
        width: 60px;
        border-radius: 10px;
        object-fit: cover;
    }

`

const Data = styled.div`

    font-size: 20px;
    color: #1c1c1c;
    display: flex;
    align-items: center;

    h3 {
        margin-left: 15px;
        margin-bottom: 8px;
        font-size: 18px;
        font-style: italic;
    }

`

const Quantity = styled.p`

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    font-size: 18px;

`

const QuantityButton = styled.button`

    justify-content: center;
    background: none;

`

const Number = styled.span`

    width: 28px;
    text-align: center;
    font-size: 22px;
    padding: 5px;

`

const Price = styled.span`

    font-size: 18px;
    margin-left: 15px;

`

const Total = styled.div`

    text-align: right;
    font-size: 25px;
    margin-top: 15px;
`

const Buttons = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

`

const ConfirmButton = styled.button`

    background-color: #E6814A;
    margin-top: 35px;
    height: 45px;
    width: 200px;

    border-radius: 50px;
    font-size: 20px;

    color: #fff;

`

const ShopButton = styled.button`

    background-color: #ebebeb;
    margin-top: 10px;
    height: 45px;
    width: 200px;

    border-radius: 50px;
    font-size: 14px;

    color: #000;

`

export {
    Container,
    Content,
    ProductCart,
    Data,
    Quantity,
    QuantityButton,
    Number,
    Price,
    Total,
    Buttons,
    ConfirmButton,
    ShopButton,
}