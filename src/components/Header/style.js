import styled from 'styled-components';

const Container = styled.div`

    width: 100%;
    height: 80px;
    padding: 12px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    position: fixed;
    top: 0;
    left: 0;
    
    background-color: #849173;
    box-shadow: 0 4px 4px rgba(0,0,0,0.5);
`

const ShinobiStore = styled.div`

    font-size: 30px;

`

const Menu = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 90px;


`

const Separator = styled.div`

    width: 1px;
    height: 40px;
    background-color: #000;

`

export {
    Container,
    ShinobiStore,
    Separator,
    Menu
}