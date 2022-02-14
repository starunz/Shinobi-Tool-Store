import styled from "styled-components";

const Button = styled.button`
  width: calc(100vw - 50px);
  height: 46px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  
  font-family: 'Raleway', sans-serif;

  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};

  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;

  background-color: #ffffff;
  color: #1C1C1C;
`;

export default Button;