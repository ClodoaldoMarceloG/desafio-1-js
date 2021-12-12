window.onload = function() {


let produtos = [
	{descricao: 'Mamão Papaia', preco:4.50},
	{descricao: 'Laranja', preco:4.89},
	{descricao: 'Manga', preco:5.25},
	{descricao: 'Melão', preco:8.00},
	{descricao: 'Melancia', preco:6.75},

]

//content-produto = div da lista
//input total

const listaProdutos = document.querySelector("#produtos");
const total = document.querySelector("#mostraTotalCompra");
const cestaCliente = document.querySelector("#cestaDoCliente");

	(function() {
		

		for( let prod of produtos ){
			const filhoLi = document.createElement('li')

			for( listaP in prod ){
				if( listaP == 'preco' ){
					listaProdutos.appendChild(filhoLi).setAttribute('data-preco', prod[listaP]);
			
				}else {
					listaProdutos.appendChild(filhoLi).textContent = `${prod[listaP]}`;
			
				}

			}
			
		}

		})()

		listaProdutos.addEventListener('click',function(el){
			
			product = el.target.innerHTML

		
			cestaCliente.appendChild(document.createElement('li')).textContent = product
			

			// somatoria do total	
			let Val = Number(el.target.dataset.preco);

				valTotal = Val + Number(total.value)
				
				total.value = valTotal.toFixed(2);

		})
				
	}