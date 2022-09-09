const nombre = prompt("Ingrese su nombre");
console.log("Bienvenido",nombre);
    alert("Bienvenido " + nombre);


    function imc(){
        let altura = prompt("Ingrese su altura en metros");
         while (altura == 0) {
             alert("Ingrese un valor distinto de 0 ");
             altura = prompt("Ingrese su altura en metros");
     }
         let peso = prompt("Ingrese su peso");
         while (peso == 0) {
             alert("Ingrese un valor distinto de 0 ");
             peso = prompt("Ingrese su peso");
     }
     let i= peso/(altura*altura);
     alert("Tu indice de masa corporal es de  "+i);
     }

     imc();

function CalculaImc(peso,altura) {
    return =i=peso/(altura*altura);
}


 