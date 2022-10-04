export class servico{
    private tempo_de_servico: number;
    private preco: number;
    private codigo: number;
    private descricao: string;

    constructor(tempo_de_servico: number, preco: number, codigo: number, descricao: string) {
        this.tempo_de_servico = tempo_de_servico;
        this.preco = preco;
        this.codigo = codigo;
        this.descricao = descricao;
    }

}