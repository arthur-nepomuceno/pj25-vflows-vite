import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import logo from '../assets/logo.png'
import InputMask from 'react-input-mask';
import { checkCNPJ } from '../utilities/checkCNPJ';

export default function Login() {
    const [CNPJ, setCNPJ] = useState(null);
    const navigate = useNavigate();

    function login(input) {
        const check = checkCNPJ(input);
        
        setCNPJ('');

        if(check){
            navigate('/contracts');
        } else {
            alert('CNPJ Inválido.')
        }

    }

    return (
        <Container>
            <img src={logo} alt='VFlows' />
            <h1>PAGAMENTO DE FORNECEDOR</h1>
            <div>
                <h2>CNPJ</h2>
                <InputMask value={CNPJ} onChange={(e) => { setCNPJ(e.target.value) }} mask='99.999.999/9999-99' required />
                <button onClick={() => {login(CNPJ)}}>Acessar</button>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 500px;
    height: 420px;

    background-color: #FFFFFF;

    border: 2px solid rgb(207, 207, 201);
    border-radius: 11px;

    box-shadow: 3px 3px 3px rgb(92, 91, 96);

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 30%;
        height: 21%;

        margin-top: 7%;
    }

    h1 {
        font-size: 19px;
        font-weight: 600;

        margin-top: 5%;
        margin-bottom: 1%;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;

        border: 2px solid rgb(247, 247, 241);

        width: 70%;
        height: 37%;
        
        padding-top: 3%;
    }

    div h2 {
        font-family: 'Roboto', sans-serif;
        font-size: 15px;

        width: 81%;
        margin-bottom: 3px;
    }

    div input {
        width: 85%;
        height: 18%;
        border: 2px solid rgb(227, 227, 221);
        border-radius: 3px;

        outline: none;
    }

    div button {
        width: 75%;
        height: 22%;
        margin-top: 20px;

        background-color: #54A74E;

        color: #FFFFFF;
        font-weight: 500;
        font-size: 15px;

        border: none;
        box-shadow: 3px 3px 3px rgb(112, 111, 106);
    }

    div button:hover {
        cursor: pointer;
    }
`