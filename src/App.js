import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SignUp, Login, Home, Support, Team, Categories, ShortDistance, LongDistance, Product, Cart, Infos } from "./pages";

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
                    <Route path='/curtadistancia' element={< ShortDistance />} />
                    <Route path='/longadistancia' element={< LongDistance />} />
                    <Route path='/product/:productId' element={< Product />} />
                    <Route path='/cart' element={< Cart />} />
                    <Route path='/infos' element={< Infos />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;