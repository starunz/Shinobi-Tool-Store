import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SignUp, Login, Home, Support, Team, Categories, Tools, Product, Checkout, Cart, Infos, Utensils } from "./pages";

import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={< Login />} />
                    <Route path='/sign-up' element={< SignUp />} />
                    <Route path='/' element={< Home />} />
                    <Route path='/support' element={< Support />} />
                    <Route path='/team' element={< Team />} />
                    <Route path='/categorias' element={< Categories />} />
                    <Route path='/categorias/utensils' element={< Utensils />} />
                    <Route path='/categorias/tools' element={< Tools />} />
                    <Route path='/product/:productId' element={< Product />} />
                    <Route path='/checkout' element={< Checkout />} />
                    <Route path='/cart' element={< Cart />} />
                    <Route path='/infos' element={< Infos />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;