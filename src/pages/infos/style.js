import styled from "styled-components";

const Form = styled.form`

    margin-bottom: 40px;

    select {
        margin-top: 12px;
        width: 190px;
        height: 30px;
    }

`

const Footer = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30px;

    button {
        width: 200px;
        margin-top: 12px;
    }

`

export {
    Form,
    Footer
}