var abacates = prompt("Quantos abacates deseja comprar?")

var preço;

if(abacates < 12){
	preço = abacates * 5;
	console.log("R$ " + preço.toFixed(2));
	
}else if(abacates > 12){
	preço = abacates * 4;
	console.log("R$ " + preço.toFixed(2));
}
