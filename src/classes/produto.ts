export class produto {
    private codigo: string;
    private nome: string;
    private data_val: string;
    private preco: number;

    constructor(nome: string, dat_val: string, codigo: string, preco: number) {
        this.nome = nome;
        this.data_val = dat_val;
        this.codigo = codigo;
        this.preco = preco;
    }

}