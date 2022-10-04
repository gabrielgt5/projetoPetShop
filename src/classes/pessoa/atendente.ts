import { pessoa } from "./pessoa";

export class atendente extends pessoa {

    protected codDeEmpregado: number;

    constructor(nome: string, data_nasc: string, cpf: string, telefone: number, codEmpregado: number, email:string){
        super(nome, data_nasc, cpf, telefone, email);
        this.codDeEmpregado = codEmpregado;
        
    }

}