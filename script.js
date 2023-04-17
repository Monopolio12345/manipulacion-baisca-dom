const h1 = document.querySelector('h1');
const input1 = document.querySelector('#Calculo1');
const input2 = document.querySelector('#Calculo2');
const btn = document.querySelector('#btnCalcular');
const pRE = document.querySelector('#Result');
function sumarInputValues(event) { 
    console.log({event});
    const sumaInputns = input1.value + input2.value
 pResult.innerText = "Resultado: "+ sumaInputns;
}
