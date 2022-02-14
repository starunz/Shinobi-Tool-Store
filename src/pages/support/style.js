import styled from "styled-components";

const MessageInput = styled.textarea`

    width: 100%;
    height: 250px;
    margin-bottom: 40px;

    border-radius: 5px;
    border: 1px solid #1C1C1C;
    padding: 10px;

    ::placeholder{
        font-style: italic;
        font-size: 14px;
    }

`

export {
    MessageInput
}