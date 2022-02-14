import * as api from '../../services/api'

import Button from '../../components/styleSignIn&SignUp/Button';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

export default function Checkout() {
    const [confirm, setconfirm] = useState();

    function confirmOrder() {
        const promise = api.getOrder(useAuth.token);

        promise.then((res) => { 
            setconfirm(res.data) 
            console.log(confirm)
        })
    }

    return(
        <>
            < Button onClick={confirmOrder}>ue</Button>
        </>
    );
}