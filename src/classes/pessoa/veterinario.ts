import { pessoa } from "./pessoa";

export class veterinario extends pessoa{
    
    private crmv: number;

    constructor(nome: string, data_nasc: string, cpf: string, telefone: number, crmv: number, email: string){
        super(nome, data_nasc, cpf, telefone, email)
        this.crmv = crmv;
    }

}