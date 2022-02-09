import Header from "../../components/Header";
import { Container, ProductsTitle } from './style';
import Products from "../../components/Products";

export default function Home() {
    return (
        <>
            <Container>
                <Header />
                <ProductsTitle>Nossos produtos: </ProductsTitle>
                <Products></Products>
                <Products></Products>
                <Products></Products>
                <Products></Products>
                <Products></Products>
            </Container>
        </>
    )
}