export class animal{
    private nome: string;
    private raca: string;
    private porte: string;
    private dat_nasc_animal: string;
    private ultima_vacina: string;

    constructor(nome: string, raca: string, porte: string, dat_nasc_animal: string, ultima_vacina:string) {
        this.nome = nome;
        this.raca = raca;
        this.porte = porte;
        this.dat_nasc_animal= dat_nasc_animal;
        this.ultima_vacina = ultima_vacina;
    }
}