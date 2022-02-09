import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
    return (
        //aqui em baixo fica o contexto criado...
        <>
            <Provider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home></Home>} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;