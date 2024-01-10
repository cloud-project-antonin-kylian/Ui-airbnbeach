import Home from './pages/Home.tsx';
import Log from './pages/Log.tsx';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./pages/SignUp.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route index element={<Home/>} />
                    <Route path={"/LogIn"} element={<Log/>} />
                    <Route path={"/SignUp"} element={<SignUp/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;
