export class pessoa{
    nome: string;
    data_nasc: string;
    protected cpf: string;
    telefone: number;

    constructor(nome: string, dat_nasc: string, cpf: string, telefone: number) {
        this.nome = nome;
        this.data_nasc = dat_nasc;
        this.cpf = cpf;
        this.telefone = telefone;
    }
}