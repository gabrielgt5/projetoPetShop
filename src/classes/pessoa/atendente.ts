import { pessoa } from "./pessoa";

export class atendente extends pessoa {

    codDeEmpregado: number;

    constructor(nome: string, data_nasc: string, cpf: string, telefone: number, codEmpregado: number){
        super(nome, data_nasc, cpf, telefone);
        this.codDeEmpregado = codEmpregado;
        
    }

}