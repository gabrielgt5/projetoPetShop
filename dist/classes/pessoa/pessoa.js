"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoa = void 0;
var pessoa = /** @class */ (function () {
    function pessoa(nome, dat_nasc, cpf, telefone, email) {
        this.nome = nome;
        this.data_nasc = dat_nasc;
        this.cpf = cpf;
        this.telefone = telefone;
        this.email = email;
    }
    pessoa.prototype.registraPessoa = function () {
        var nome = this.nome;
        var idade = this.data_nasc;
        var telefone = this.telefone;
        var email = this.email;
        console.log("Cliente " + nome + ", Nascido em " + idade + ". Contatos:" + telefone + "||" + email + ". Foi registrado com sucesso!");
    };
    return pessoa;
}());
exports.pessoa = pessoa;
