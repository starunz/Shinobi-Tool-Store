import styled from "styled-components";

const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding-top: 115px;

`

const Content = styled.div`

    background-color: #fff;
    width: 90vw;
    padding: 10px;
    box-shadow: 0px 0px 2px rgba(0,0,0,0.7);

`

const ProductsTitle = styled.div`

    width: 90vw;
    height: auto;

    font-size: 26px;
    font-weight: 700;
    margin-bottom: 18px;


`

export {
    Container,
    ProductsTitle,
    Content
}