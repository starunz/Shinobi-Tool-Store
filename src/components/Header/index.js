import { Container, ShinobiStore } from "./style";

import { IoCartOutline } from 'react-icons/io5'

import Sidebar from "./sideBar/SideBar";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import kakashi from '../../assets/images/kakashin.png';
import useAuth from "../../hooks/useAuth";

export default function Header() {

    const { auth } = useAuth();
    const navigate = useNavigate();

    function handleCart() {
        if (auth) {
            navigate('/cart')
        } else {

            Swal.fire({
                title: 'OOPS...',
                text: "Você precisa estar logado para visualizar o carrinho.",
                imageUrl: `${kakashi}`,
                imageHeight: 140,
                showCancelButton: true,
                confirmButtonColor: '#1C1C1C',
                cancelButtonColor: '#b8b8b8',
                confirmButtonText: 'Logar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login');
                }
            })
        }
    }

    return (
        <Container>
            <Sidebar />

            <ShinobiStore>Shinobi Tool Store</ShinobiStore>

            <IoCartOutline onClick={handleCart}
                color={'#ffffff'}
                title={'cart'}
                height="30px"
                width="30px"
                fontSize="35px"
            />
        </Container>
    );
}