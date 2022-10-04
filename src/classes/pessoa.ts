export class pessoa{
    private nome: string;
    private data_nasc: string;
    private cpf: string;
    private telefone: number;

    constructor(nome: string, dat_nasc: string, cpf: string, telefone: number) {
        this.nome = nome;
        this.data_nasc = dat_nasc;
        this.cpf = cpf;
        this.telefone = telefone;
    }
}