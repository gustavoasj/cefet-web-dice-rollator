// Faça seu exercício neste arquivo


// Alguns elementos importantes na página (index.html):
// #rolar: Botão rolar
//	 - você deve atribuir um _handler_ de evento a ele para fazer o cálculo da rolagem dos dados
// #resultado: Elemento cujo conteúdo deve ser uma string com os resultados
//	 - você deve definir seu conteúdo (.innerHTML) com a string de resultados
// #recipienteResultados: "Container" do elemento dos resultados: 
//	 - você deve torná-lo visível removendo a classe "oculto" dele
// .quantidade: todos os input[type=number] com a quantidade de dados a serem rolados
// #quantidadeD{4,6,8,10,12,20}: um ID para cada input[type=number] com a quantidade


var resultado = Math.ceil(Math.random()*20);
var valor1 = document.getElementById("quantidadeD4");
var valor2 = document.getElementById("quantidadeD6");
var valor3 = document.getElementById("quantidadeD8");
var valor4 = document.getElementById("quantidadeD10");
var valor5 = document.getElementById("quantidadeD12");
var valor6 = document.getElementById("quantidadeD20");
var resultArea = document.getElementById("resultado");
var recipiente = document.getElementById("recipienteResultados");


var soma1=0,soma2=0,soma3=0,soma4=0,soma5=0,soma6=0;

rolar.addEventListener("click", function(){

	var somaFinal ="Soma Total: ";
	for(i=0; i < valor1.value;i++){
		var resultado = Math.ceil(Math.random()*4);  
		if(i ==0)
			somaFinal = somaFinal + resultado;
		else
			somaFinal = somaFinal + " + " + resultado;

		soma1 = soma1 + resultado;
	}

   for(i=0; i < valor2.value;i++){
   		var resultado = Math.ceil(Math.random()*6);      		
		somaFinal = somaFinal + " + " + resultado;
		soma2 = soma2 + resultado;
   }
   
   for(i=0; i < valor3.value;i++){
		var resultado = Math.ceil(Math.random()*8);      		
		somaFinal = somaFinal + " + " + resultado;
		soma3 = soma3 + resultado;
   }
   
   for(i=0; i < valor4.value;i++){
		var resultado = Math.ceil(Math.random()*10);      		
		somaFinal = somaFinal + " + " + resultado;
		soma4 = soma4 + resultado;
   }
   
   for(i=0; i < valor5.value;i++){
		var resultado = Math.ceil(Math.random()*12);      		
		somaFinal = somaFinal + " + " + resultado;
		soma5 = soma5 + resultado;
   }
   
   for(i=0; i < valor6.value;i++){
		var resultado = Math.ceil(Math.random()*20);      		
		somaFinal = somaFinal + " + " + resultado;
		soma6 = soma6 + resultado;
   }

	recipiente.classList.remove('oculto');

	var somatotal = soma1+soma2+soma3+soma4+soma5+soma6;

	somaFinal = somaFinal + " = " + somatotal;

	resultArea.innerHTML = somaFinal;

},false);
