import { Container, ShinobiStore, Separator, Menu } from "./style";
import { CartOutline, EllipsisVerticalOutline } from 'react-ionicons'

export default function Header() {
    return (
        <>
            <Container>
                <ShinobiStore>ShinobiTool Store</ShinobiStore>
                <Menu>
                    <CartOutline
                        color={'#00000'}
                        title={'cart'}
                        height="30px"
                        width="30px"
                    />
                    <Separator />
                    <EllipsisVerticalOutline
                        color={'#00000'}
                        title={'menu'}
                        height="20px"
                        width="20px"
                    />
                </Menu>
            </Container>
        </>
    )
}