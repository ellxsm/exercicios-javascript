class ContaCliente {
  constructor(numeroConta, saldoConta, credito, debito) {
    this.numeroConta = numeroConta;
    this.saldoConta = saldoConta;
    this.credito = credito;
    this.debito = debito;
  }

  calcularSaldoAtual() {
    return this.saldoConta + this.credito - this.debito;
  }

  verificarSaldo() {
    let saldoAtual = this.calcularSaldoAtual();
    if (saldoAtual >= 0) {
      alert("Saldo positivo R$ " + saldoAtual);
    } else {
      alert("Saldo negativo R$ " + saldoAtual);
    }
  }
}

let numeroConta = prompt("Digite o número da sua conta: ");
let saldoConta = parseFloat(prompt("Digite o seu saldo: "));
let credito = parseFloat(prompt("Quanto deseja adicionar?"));
let debito = parseFloat(prompt("Quando deseja retirar?"));

let conta = new ContaCliente(numeroConta, saldoConta, credito, debito);
conta.verificarSaldo();
