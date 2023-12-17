import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateComponent from './components/PrivateComponent';
import Register from './components/Register';
import Login from './components/Login';
import ResMenu from './components/ResMenu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <div className='content'>
            <Routes>
              <Route element={<PrivateComponent/>}>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/restaurant/:id' element={<ResMenu/>}></Route>
              </Route>
              <Route path='/register' element={<Register/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
            </Routes>
          </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
