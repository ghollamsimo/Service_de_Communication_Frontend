import './App.css'
import HomePage from "./pages/HomePage.tsx";
import {Route, Routes} from "react-router-dom";
import Login from "./auth/LoginAuth.tsx";
function App() {

  return (
    <>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </>
  )
}

export default App
