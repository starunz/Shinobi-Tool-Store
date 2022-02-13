import { Container, ShinobiStore } from "./style";

import { IoCartOutline } from 'react-icons/io5'

import Sidebar from "./sideBar/SideBar";

export default function Header() {
    return (
        <Container>
            <Sidebar />

            <ShinobiStore>Shinobi Tool Store</ShinobiStore>

            <IoCartOutline
                color={'#ffffff'}
                title={'cart'}
                height="30px"
                width="30px"
                fontSize="35px"
            />
        </Container>
    );
}