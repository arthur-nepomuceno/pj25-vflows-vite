import styled from 'styled-components'
import logo from '../assets/logo.png'

export default function Contracts() {
    return (
        <Container>
            <div id='title'>
                <img src={logo} alt='VFlows'/>
                <h1>PAGAMENTO DE FORNECEDOR</h1>
            </div>
            <div id='data'>
                <h2 id='company-name'>
                    Razão Social:
                </h2>
                <h2 id='commercial-name'>
                    Nome Fantasia:
                </h2>
                <h2 id='number'>
                    CNPJ: 00.000.000/0000-00
                </h2>
            </div>
            <div id='contracts'>
                <h2 id='title'>
                    Contratos Vinculados
                </h2>
                <div id='table'>
                    <table>
                        <tr id='header'>
                            <th id='checkbox'></th>
                            <th id='name'>Nome do Contrato</th>
                            <th id='code'>Código do Contrato</th>
                            <th id='retention'>Retenção Técnica</th>
                            <th id='details'>Detalhes</th>
                        </tr>
                        <tr id='data'>
                            <td id='checkbox'>box</td>
                            <td id='name'>Título do Primeiro Contrado de exemplo</td>
                            <td id='code'>11002200-01</td>
                            <td id='retention'>5%</td>
                            <td>detalhes</td>
                        </tr>
                        <tr id='data'>
                            <td id='checkbox'>box</td>
                            <td id='name'>Título do Segundo Contrado de exemplo</td>
                            <td id='code'>22003300-01</td>
                            <td id='retention'>7%</td>
                            <td id='details'>detalhes</td>
                        </tr>
                        <tr id='data'>
                            <td id='checkbox'>box</td>
                            <td id='name'>Título do Segundo Contrado de exemplo</td>
                            <td id='code'>22003300-01</td>
                            <td id='retention'>7%</td>
                            <td id='details'>detalhes</td>
                        </tr>
                        <tr id='data'>
                            <td id='checkbox'>box</td>
                            <td id='name'>Título do Segundo Contrado de exemplo</td>
                            <td id='code'>22003300-01</td>
                            <td id='retention'>7%</td>
                            <td id='details'>detalhes</td>
                        </tr>
                        <tr id='data'>
                            <td id='checkbox'>box</td>
                            <td id='name'>Título do Segundo Contrado de exemplo</td>
                            <td id='code'>22003300-01</td>
                            <td id='retention'>7%</td>
                            <td id='details'>detalhes</td>
                        </tr>
                        <tr id='data'>
                            <td id='checkbox'>box</td>
                            <td id='name'>Título do Segundo Contrado de exemplo</td>
                            <td id='code'>22003300-01</td>
                            <td id='retention'>7%</td>
                            <td id='details'>detalhes</td>
                        </tr>
                        <tr id='data'>
                            <td id='checkbox'>box</td>
                            <td id='name'>Título do Segundo Contrado de exemplo</td>
                            <td id='code'>22003300-01</td>
                            <td id='retention'>7%</td>
                            <td id='details'>detalhes</td>
                        </tr>
                        <tr id='data'>
                            <td id='checkbox'>box</td>
                            <td id='name'>Título do Segundo Contrado de exemplo</td>
                            <td id='code'>22003300-01</td>
                            <td id='retention'>7%</td>
                            <td id='details'>detalhes</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div id='footer'>
                <img src={logo} alt='VFlows'/>
                <button id='previous'>Anterior</button>
                <button id='next'>Próximo</button>
                <h5>© 2022-2022 Construindo Patrimônios</h5>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 93vw;
    height: 90vh;
    background-color: #FFFFFF;

    display: flex;
    flex-direction: column;
    align-items: center;

    div#title {
        width: 95%;
        height: 15%;

        margin-top: 2%;

        display: flex;

        border: 1px dashed black
    }

    div#title img {
        width: 8%;
        height: 77%;
        margin-left: 1%;
    }

    div#title h1 {
        width: 91%;

        font-size: 40px;
        text-align: center;
        padding-top: 1%;
    }

    div#data {
        width: 95%;
        height: 13%;

        margin-top: 10px;

        border: 1px solid #F26161;
        border-radius: 5px;

        position: relative;
    }

    div#data h2#company-name {
        font-weight: 600;
        position: absolute;

        top: 20%;
        left: 1%;
    }

    div#data h2#commercial-name {
        font-weight: 600;
        position: absolute;

        bottom: 20%;
        left: 1%
    }

    div#data h2#number {
        font-weight: 600;
        position: absolute;

        top: 20%;
        right: 1%
    }

    div#contracts {
        width: 95%;
        height: 40%;

        margin-top: 10px;

        overflow-y: scroll;

        border: 1px dashed black;
    }

    div#contracts::-webkit-scrollbar {
        display: none;
    }

    h2#title {
        width: 100%;
        height: 35px;

        border: 1px solid #F26161;
        border-radius: 5px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    table {
        width: 100%;
        height: 81%;

        margin-top: 5px;

        text-align: center;
    }

    tr#header {
        width: 100%;
        height: 28px;

        margin-bottom: 7px;

        background-color: #AAAAAA;
    }

    th {
        vertical-align: middle;

        color: #FFFFFF;
        font-weight: 600;
    }

    td {
        vertical-align: middle;
    }

    th#name, td#name {
        text-align: left;
        padding-left: 13px;
    }

    tr#data:nth-child(even) {
        width: 100%;
        height: 25px;
        background-color: #EEEEEE;
    }

    tr#data:nth-child(odd) {
        width: 100%;
        height: 25px;
        background-color: #DDDDDD;
    }

    div#footer {
        width: 95%;
        height: 20%;

        margin-top: 13px;
        margin-bottom: 2%;

        position: relative;

        border: 1px dashed black;
    }

    div#footer img {
        width: 8%;
        height: 60%;

        position: absolute;
        bottom: 0%;
    }

    div#footer h5 {
        font-size: 11px;
        color: #AAAAAA;

        position: absolute;
        left: 40%;
        top: 50%;
    }

    button {
        width: 33%;
        height: 30%;

        margin-left: 13px;

        position: absolute;

        color: #FFFFFF;
        font-size: 17px;
        font-weight: 600;

        border: none;
    }

    button:hover {
        cursor: pointer;
    }

    button#previous {
        background-color: #FFC043;
        right: 34%;

    }

    button#next {
        background-color: #448B48;
        right: 0%;
    }

`
