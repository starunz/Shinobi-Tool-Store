import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        //aqui em baixo fica o contexto criado...
        <Provider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<> </>} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;