import { CNPJ_List } from "../database/database"

function checkCNPJ(cnpj){
    let check = false;

    CNPJ_List.map(element => {
        if (element.number === cnpj) check = true;
    })

    return check;
}

export {
    checkCNPJ
}