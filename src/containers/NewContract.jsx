import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import { useNavigate } from 'react-router';
import { useContext, useState } from 'react';
import DataContext from '../contexts/DataContext';
import { CNPJ_List } from '../database/database';
import { Form } from '@unform/web';
import Input from '../components/Input';

export default function NewContract() {

    const {CNPJ, contract} = useContext(DataContext);
    const [taxRetention, setTaxRetention] = useState(true);
    const [technicalRetention, setTechnicalRetention] = useState(true);
    const [techRetentionValue, setTechRetentionValue] = useState(null);
    const navigate = useNavigate();

    let company_name;
    let commercial_name;

    function getCompanyData(CNPJ){
        const data = CNPJ_List.filter(e => e.number === CNPJ);
        company_name = data[0].company_name;
        commercial_name = data[0].commercial_name;
    }
    getCompanyData(CNPJ);

    function showTaxRetention(){
        if(taxRetention === false){
            setTaxRetention(true);
        }

        if(taxRetention === true){
            setTaxRetention(false);
        }
    }

    function showTechnicalRetention(){
        if(technicalRetention === false){
            setTechnicalRetention(true);
        }

        if(technicalRetention === true){
            setTechnicalRetention(false);
        }
    }

    function returnToContracts(){
        navigate('/contracts');
    }

    function attachInvoice(){
        alert('...em construção...')
    }

    function sendData(data){

        if(data.invoice_number === '') alert('Número da Nota obrigatório.')
        if(data.issue_date === '') alert('Data de Emissão obrigatória.')
        if(data.due_date === '') alert('Data de Vencimento obrigatório.')
        if(data.invoice_value === '') alert('Valor obrigatório.')

        if(data.ISSQN === '') alert('ISSQN deve ser maior do que zero.')
        if(data.IRRF === '') alert('IRRF deve ser maior do que zero.')
        if(data.CSLL === '') alert('CSLL deve ser maior do que zero.')
        if(data.COFINS === '') alert('COFINS deve ser maior do que zero.')
        if(data.INSS === '') alert('INSS deve ser maior do que zero.')
        if(data.PIS === '') alert('PIS deve ser maior do que zero.')

        if(
            data.invoice_number !== '' &&
            data.issue_date !== '' &&
            data.due_date !== '' &&
            data.invoice_value !== '' &&
            data.ISSQN !== '' &&
            data.IRRF !== '' &&
            data.CSLL !== '' &&
            data.COFINS !== '' &&
            data.INSS !== '' &&
            data.PIS !== ''
        ){
            alert('Solicitação 999999 foi enviada com sucesso.')
            console.log({
                numero_da_nota: data.invoice_number,
                data_de_emissao: data.issue_date,
                data_de_vencimento: data.due_date,
                valor_da_nota: data.invoice_value,
                ISSQN: data.ISSQN,
                IRRF: data.IRRF,
                CSLL: data.CSLL,
                COFINS: data.COFINS,
                INSS: data.INSS,
                PIS: data.PIS,
                porcentagem_retencao_tecnica: data.percentage,
                valor_retencao_tecnica: data.final_value
            })
        }
    }

    function calculateTechnicalRetention(invoice_value){
        const value = (contract.retention / 100 * invoice_value).toFixed(2)
        setTechRetentionValue(value);
    }

    return (
        <Container>
            <div id='title'>
                <img src={logo} alt='VFlows' />
                <h1>PAGAMENTO DE FORNECEDOR</h1>
            </div>
            <div id='data'>
                <h2 id='company-name'>
                    Razão Social: <p>{company_name}</p>
                </h2>
                <h2 id='commercial-name'>
                    Nome Fantasia: <p>{commercial_name}</p>
                </h2>
                <h2 id='number'>
                    CNPJ: <p>{CNPJ}</p>
                </h2>
            </div>
            <div id='invoice'>
                <h2 id='title'>
                    Dados da Nota Fiscal
                </h2>

                <Form onSubmit={sendData}>
                    <div id='invoice-data'>
                        <div id='invoice-head'>
                            <div>
                                <h2 id='contract-title'>
                                    {contract.title}
                                </h2>
                            </div>
                            <div>
                                <h2 id='contract-code'>
                                    Código do Contrato: <p>11002200-01</p>
                                </h2>
                            </div>


                            <div id='invoice-fields'>
                                <div id='invoice_number'>
                                    <h3>Número da Nota</h3>
                                    <Input type='number' name='invoice_number'/>
                                </div>
                                <div id='issue_date'>
                                    <h3>Data de Emissão</h3>
                                    <Input type='date' name='issue_date'/>
                                </div>
                                <div id='due_date'>
                                    <h3>Data de Vencimento</h3>
                                    <Input type='date' name='due_date' />
                                </div>
                                <div id='invoice_value'>
                                    <h3>Valor</h3>
                                    <Input
                                         type='number'
                                         name='invoice_value'
                                         step='.01'
                                         onChange={e => calculateTechnicalRetention(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div id='tax-retention'>
                            <div>
                                <input type='checkbox' onClick={showTaxRetention}/>
                                <h3>Retenção de Impostos</h3>
                            </div>
                            {
                                !taxRetention ?
                                <div id='tax-retention-data'>
                                <div id='ISSQN'>
                                    <h3>ISSQN</h3>
                                    <Input type='number' name='ISSQN' step='.01'/>
                                </div>
                                <div id='IRRF'>
                                    <h3>IRRF</h3>
                                    <Input type='number' name='IRRF' step='.01'/>
                                </div>
                                <div id='CSLL'>
                                    <h3>CSLL</h3>
                                    <Input type='number' name='CSLL' step='.01'/>
                                </div>
                                <div id='COFINS'>
                                    <h3>COFINS</h3>
                                    <Input type='number' name='COFINS' step='.01'/>
                                </div>
                                <div id='INSS'>
                                    <h3>INSS</h3>
                                    <Input type='number' name='INSS' step='.01'/>
                                </div>
                                <div id='PIS'>
                                    <h3>PIS</h3>
                                    <Input type='number' name='PIS' step='.01'/>
                                </div>
                                </div> : ''
                            }
                        </div>

                        <div id='technical-retention'>
                            <div>
                                <input type='checkbox' onClick={showTechnicalRetention}/>
                                <h3>Retenção Técnica</h3>
                            </div>
                            {
                                !technicalRetention ?
                                <div id='technical-retention-data'>
                                    <div id='value'>
                                        <h3>Valor</h3>
                                        <Input name='final_value' value={techRetentionValue}/>
                                    </div>
                                    <div id='percentage'>
                                        <h3>Percentual</h3>
                                        <Input name='percentage' value={contract.retention}/>
                                    </div>
                                </div> : ''
                            }

                        </div>

                        <div id='invoice-footer'>
                            <div id='attach-document'>
                                <button id='attach' type='button' onClick={attachInvoice}>Anexar Nota Fiscal</button>
                            </div>
                            <div id='buttons'>
                                <button id='previous' type='button' onClick={returnToContracts}>Anterior</button>
                                <button id='next' type='submit'>Próximo</button>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
            <div id='footer'>
                <img src={logo} alt='VFlows' />
                <h5>© 2022-2022 Construindo Patrimônios</h5>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 73vw;
    height: fit-content;
    background-color: #FFFFFF;

    display: flex;
    flex-direction: column;
    align-items: center;

    div#title {
        width: 95%;
        height: 100px;

        display: flex;
        align-items: center;

        margin-top: 240px;
    }

    div#title img {
        width: 10%;
        height: 60%;
    }

    div#title h1 {
        width: 91%;

        font-size: 40px;
        text-align: center;
        padding-top: 1%;
    }

    div#data {
        width: 95%;
        height: 80px;

        margin-top: 10px;

        border: 1px solid #F26161;
        border-radius: 5px;

        position: relative;
    }

    div#data h2 {
        display: flex;
    }

    div#data h2 p {
        font-weight: 400;
        font-style: italic;
        margin-left: 20px;
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

    div#invoice {
        width: 95%;
        height: 40%;

        margin-top: 10px;
    }

    h2#title {
        width: 100%;
        height: 35px;

        font-weight: 600;

        border: 1px solid #F26161;
        border-radius: 5px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    div#invoice-data {
        border: 1px solid #F26161;
        border-radius: 5px;

        margin-top: 10px;
        padding: 15px;
        padding-top: 20px;
    }

    div#invoice-head > div, div#tax-retention > div, div#technical-retention > div {
        display: flex;
        margin-bottom: 20px;
    }

    /* //dev
    div#invoice-head > div {
        border: 1px dashed black;
    } */

    h2#contract-code {
        font-weight: 600;
        display: flex;
    }

    h2#contract-code p {
        font-weight: 400;
        margin-left: 10px;
    }

    h2#contract-title {
        width: 100%;
        text-align: center;
        font-size: 15px;
    }

    div#invoice-fields {
        display: flex;
        justify-content: space-between;
    }

    div#invoice-fields div {
        width: 24%;
    }

    div#invoice-fields h3 {
        margin-bottom: 5px;
    }

    div#invoice-fields input {
        width: 100%;
        height: 25px;
        font-size: 17px;
    }

    div#invoice-number {
        display: flex;
        flex-direction: column;
    }

    div#issue-date {
        display: flex;
        flex-direction: column;
    }

    div#due-date {
        display: flex;
        flex-direction: column;
    }

    div#invoice-value {
        display: flex;
        flex-direction: column;
    }

    div#tax-retention {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        margin-bottom: 50px;
    }

    div#tax-retention div {
        display: flex;
    }

    div#tax-retention-data {
        height: 110px;
        flex-wrap: wrap;
    }

    div#ISSQN {
        display: flex;
        flex-direction: column;
    }

    div#IRRF {
        display: flex;
        flex-direction: column;
    }

    div#CSLL {
        display: flex;
        flex-direction: column;
    }

    div#COFINS {
        display: flex;
        flex-direction: column;
    }

    div#INSS {
        display: flex;
        flex-direction: column;
    }

    div#PIS {
        display: flex;
        flex-direction: column;
    }

    div#technical-retention div{
        display: flex;
    }

    div#technical-retention-data {
        height: 80px
    }

    div#technical-retention-data div{
        width: 48%;
    }

    div#technical-retention-data input {
        height: 25px;
        font-size: 17px;
        background-color: #BBBBBB;
    }

    div#value {
        display: flex;
        flex-direction: column;
    }

    div#percentage {
        display: flex;
        flex-direction: column;
    }

    div#tax-retention-data, div#technical-retention-data {
        border: 1px solid #F26161;
        border-radius: 5px;

        align-items: center;
        justify-content: space-between;
        padding-right: 15px;
        padding-left: 15px;
    }

    div#tax-retention-data h3, div#technical-retention-data h3 {
        margin-bottom: 5px;
    }

    div#invoice-footer {
        height: 90px;

        display: flex;
        flex-direction: column;

        position: relative;
    }

    button {
        width: 26%;
        height: 30px;

        color: #FFFFFF;
        font-size: 17px;
        font-weight: 600;

        position: absolute;

        border: none;
    }

    button#attach {
        background-color: #67685A;
    }

    button#previous {
        background-color: #FFC043;
        right: 27%;
        bottom: 0%;
    }

    button#next {
        background-color: #448B48;
        right: 0%;
        bottom: 0%;
    }

    button:hover, td#details div:hover {
        cursor: pointer;
    }

    div#footer {
        width: 95%;
        height: 20%;

        margin-top: 13px;
        margin-bottom: 2%;

        display: flex;
        position: relative;
    }

    div#footer img {
        height: 35px;
        width: 60px;
        margin-left: 10px;
    }

    div#footer h5 {
        font-size: 11px;
        color: #AAAAAA;

        position: absolute;
        left: 40%;
    }

`
