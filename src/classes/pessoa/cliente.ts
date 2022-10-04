import { pessoa } from "./pessoa";

export class cliente extends pessoa{

    codAtendimento: number;

    constructor(nome: string, data_nasc: string, cpf: string, telefone: number, codAtendimento: number, email: string){
        super(nome, data_nasc, cpf, telefone, email);
        this.codAtendimento = codAtendimento;
        
    }
}