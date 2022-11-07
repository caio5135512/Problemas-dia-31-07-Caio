var segundos = parseInt(prompt("Digite um valor para segundos"))
var restosegundos = segundos % 60
var minutos = (segundos - restosegundos) / 60
var restominutos = minutos % 60
var horas = (minutos - restominutos) / 60


console.log(restosegundos + " segundo")
console.log(restominutos + " minuto")
console.log(horas + " hora")
