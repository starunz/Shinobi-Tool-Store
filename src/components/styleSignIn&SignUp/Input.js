import styled from "styled-components";

const Input = styled.input`
  width: calc(100vw - 50px);
  height: 58px;
  
  margin-bottom: 13px;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #1C1C1C;

  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  font-family: 'Raleway', sans-serif;

  &::placeholder {
    font-weight: 400;
    color: #000000;
  }

  &:focus {
    outline: none;
  }
`;

export default Input;