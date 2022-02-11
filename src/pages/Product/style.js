import styled from "styled-components";

const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding-top: 115px;
    padding-bottom: 30px;

`

const ProductContent = styled.div`

    width: 80%;
    height: auto;
    padding: 12px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #fff;

    box-shadow: 0px 0px 2px rgba(0,0,0,0.7);
    border-radius: 5px;

`

const ProductImage = styled.div`

    width: 100%;
    text-align: center;

    img{
        width: 80%;
        object-fit: cover;
    }


`

const ProductData = styled.div`

    width: 100%;
    height: auto;
    margin-bottom: 35px;

`

const DataHeader = styled.div`

    width: 100%;
    height: 30px;
    margin-bottom: 8px;
    
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 5px;
    
    font-size: 13px;
    p{
        color: ${props => !props.unavailable ? 'green' : 'red'};
    }

`

const ProductName = styled.h1`

    font-size: 30px;

`

const ProductCategory = styled.span`

    font-size: 14px;

`

const ProductDescription = styled.h2`

    padding-top: 12px;
    font-size: 18px;

`

const ProductQuantity = styled.h3`

    padding-top: 20px;
    font-style: italic;

    color: #545454;

`

const ProductFooter = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`

const AddCart = styled.button`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    width: 80%;
    height: 40px;
    padding: 20px;

    border-radius: 25px;
    background-color: orangered;

    font-size: 17px;
    color: #fff;

    img{
        width: 30px;
    }

    :disabled{
        background-color: #545454;
        opacity: 0.5;
    }

`

export {
    Container,
    ProductContent,
    ProductImage,
    ProductData,
    DataHeader,
    ProductName,
    ProductCategory,
    ProductDescription,
    ProductQuantity,
    AddCart,
    ProductFooter,
}