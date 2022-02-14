import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 80px;
    padding: 12px;
    
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    position: fixed;
    top: 0;
    left: 0;
    
    background-color: #1C1C1C;
    box-shadow: 0 4px 4px rgba(0,0,0,0.5);
`

const ShinobiStore = styled.div`

    font-size: 30px;
    font-family: 'Saira Stencil One', sans-serif;
    //font-weight: 400;

    color: #ffffff;

    margin-right: 8%
`

export {
    Container,
    ShinobiStore,
}