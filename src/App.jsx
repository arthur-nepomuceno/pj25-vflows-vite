import './styles/reset.css';
import './styles/styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './containers/Login';
import Contracts from './containers/Contracts';
import NewContract from './containers/NewContract';
import DataContext from './contexts/DataContext'

function App() {
    const [CNPJ, setCNPJ] = useState(null);
    const [contract, setContract] = useState(null);
    const contextData = {CNPJ, setCNPJ, contract, setContract};

  return (
    <BrowserRouter>
        <DataContext.Provider value={contextData}>
            <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/contracts' element={<Contracts/>}/>
            <Route path='/new-contract' element={<NewContract/>}/>
            </Routes>
        </DataContext.Provider>
    </BrowserRouter>
  )
}

export default App
