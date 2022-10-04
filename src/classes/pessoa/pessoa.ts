export class pessoa{
    nome: string;
    data_nasc: string;
    protected cpf: string;
    telefone: number;
    email: string

    constructor(nome: string, dat_nasc: string, cpf: string, telefone: number, email: string) {
        this.nome = nome;
        this.data_nasc = dat_nasc;
        this.cpf = cpf;
        this.telefone = telefone;
        this.email = email;
    }

    registraPessoa(){

        const nome = this.nome;
        const idade = this.data_nasc;
        const telefone = this.telefone;
        const email = this.email;
        console.log("Cliente " + nome + ", Nascido em " + idade + ". Contatos:" + telefone + "||" + email + ". Foi registrado com sucesso!")

    }
}