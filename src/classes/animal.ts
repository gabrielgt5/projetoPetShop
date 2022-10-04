export class animal{
    tipo: string;
    nome: string;
    raca: string;
    peso: string;
    protected dat_nasc_animal: string;
    protected ultima_vacina: string;

    constructor(tipo: string, nome: string, raca: string, peso: string, dat_nasc_animal: string, ultima_vacina:string) {
        this.tipo = tipo;
        this.nome = nome;
        this.raca = raca;
        this.peso = peso;
        this.dat_nasc_animal= dat_nasc_animal;
        this.ultima_vacina = ultima_vacina;
    }
}