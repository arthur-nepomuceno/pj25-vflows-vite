import './styles/reset.css';
import './styles/styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './containers/Login';
import Contracts from './containers/Contracts';
import NewContract from './containers/NewContract';

function App() {

  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/contracts' element={<Contracts/>}/>
        <Route path='/new-contract' element={<NewContract/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
