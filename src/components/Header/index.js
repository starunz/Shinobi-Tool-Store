import { Container, ShinobiStore } from "./style";

import Sidebar from "./sideBar/SideBar";

export default function Header() {

    return (
        <Container>
            <Sidebar />

            <ShinobiStore>Shinobi Tool Store</ShinobiStore>

        </Container>
    );
}