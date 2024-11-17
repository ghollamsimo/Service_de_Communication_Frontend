import './App.css'
import HomePage from "./pages/HomePage.tsx";
import {Route, Routes} from "react-router-dom";
import Login from "./auth/LoginAuth.tsx";
import {NotfoundPage} from "./pages/NotfoundPage.tsx";
import SocketProvider from './helper/SocketContext.tsx';
function App() {

  return (
    <>
        <Routes>
            <Route path='/home' element={
                    <SocketProvider>
                      <HomePage/>
                    </SocketProvider>

              
              }/>
            <Route path='/' element={<Login/>}/>
            <Route path='*' element={<NotfoundPage/>}/>
        </Routes>
    </>
  )
}

export default App
