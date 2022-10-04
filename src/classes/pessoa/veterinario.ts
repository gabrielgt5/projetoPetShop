import { pessoa } from "./pessoa";

export class veterinario extends pessoa{
    
    protected crmv: number;

    constructor(nome: string, data_nasc: string, cpf: string, telefone: number, crmv: number){
        super(nome, data_nasc, cpf, telefone)
        this.crmv = crmv;
    }

}