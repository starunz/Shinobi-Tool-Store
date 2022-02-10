import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { SignUp } from "./pages";

const App = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home></Home>} />
                <Route path='/sign-up' element={< SignUp />} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;