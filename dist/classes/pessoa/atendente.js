"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.atendente = void 0;
var pessoa_1 = require("./pessoa");
var atendente = /** @class */ (function (_super) {
    __extends(atendente, _super);
    function atendente(nome, data_nasc, cpf, telefone, codEmpregado, email) {
        var _this = _super.call(this, nome, data_nasc, cpf, telefone, email) || this;
        _this.codDeEmpregado = codEmpregado;
        return _this;
    }
    return atendente;
}(pessoa_1.pessoa));
exports.atendente = atendente;
