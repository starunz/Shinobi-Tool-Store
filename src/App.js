import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SignUp, Login, } from "./pages";

import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={< Login />} />
                    <Route path='/sign-up' element={< SignUp />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider> 
    );
}

export default App;