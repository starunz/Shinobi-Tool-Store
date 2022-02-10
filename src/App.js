import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SignUp } from "./pages";

const App = () => {
    return (
        
            <BrowserRouter>
                <Routes>
                    <Route path='/sign-up' element={< SignUp />} />
                </Routes>
            </BrowserRouter>
       
    );
}

export default App;