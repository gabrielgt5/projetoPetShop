export class servico{
    protected tempo_de_servico: number;
    protected preco: number;
    codigo: number;
    descricao: string;

    constructor(tempo_de_servico: number, preco: number, codigo: number, descricao: string) {
        this.tempo_de_servico = tempo_de_servico;
        this.preco = preco;
        this.codigo = codigo;
        this.descricao = descricao;
    }

}