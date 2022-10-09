import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainPage from './MainPage/MainPage'
import LoginPage from './MainPage/LoginPage'

function App() {
  return(
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
          </Routes>
    </BrowserRouter>
  )
}

export default App;
