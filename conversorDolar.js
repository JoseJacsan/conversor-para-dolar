var valorEmDolarTexto = prompt("Digite o valor em dólar que você quer converter");

var valorEmDolarNumero = Number(valorEmDolarTexto);

var valorEmReal = valorEmDolarNumero * 5.64;
var valorEmRealFixado = valorEmReal.toFixed(2);
alert(valorEmRealFixado);