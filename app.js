// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Función para agregar los nombres a la lista "amigos". También valida que no se ingrese un valor vacío o con sólo espacios, y ni que tampoco haya nombres repetidos
function agregarAmigo(){
    let nombreIngresado = document.getElementById("amigo").value.trim(); //El trim se utiliza para quitar espacios en blanco antes y después del nombre, también evita que se ingrese solo espacios vacíos
    let regex = /^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s]+$/;
    //Verificamos si el input no está vacío y si el nombre pasa la validación del regex
    if (nombreIngresado !== "" && regex.test(nombreIngresado)){
        //Verifica si el nombre del amigo ingresado ya está en la lista para evitar duplicados
        if(!amigos.includes(nombreIngresado)){
        amigos.push(nombreIngresado);
        console.log("Amigos: ", amigos);
        document.getElementById("amigo").value = "";//Limpia el imput después de agregar el nombre del amigo
        mostrarAmigos();//Llama a la función para mostrar la lista actualizada de amigos
        }else{
            alert("Este amigo ya está en la lista. Ingrese otro");
        }
        
    } else{
        alert("Por favor, ingrese un valor válido");
    }
}
//Función para mostrar
function mostrarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; //Limpia la lista actual
    
    let listaActualizada = "";// Variable para almacenar la lista completa para el HTML
    for (let i = 0; i < amigos.length; i++) {
        listaActualizada += `<li>${amigos[i]}</li>`; //Construye los li
    }
    listaAmigos.innerHTML = listaActualizada;//Asigna todos los valores de la iteración de una sola vez en el contenedor ul
}

//Función para sortear un nombre dentro de la lista amigos[]
function sortearAmigo(){
    if(amigos.length > 0){
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);//Genera un número aleatorio entre 0 y el largo del array
        let resultadoSorteo = document.getElementById("resultado");
        resultadoSorteo.innerHTML = `El amigo secreto sorteado es: ${amigos[numeroAleatorio]}`; //Se imprime el nombre del amigo sorteado de la lista, de acuerdo al indice aleatorio que salió 
        listaAmigos.innerHTML = ""; //limpia la lista una vez que se sortea el amigo
        console.log(numeroAleatorio);
        console.log(amigos[numeroAleatorio]);
    }else{
        alert("No hay ningún amigo para sortear. Por favor ingresa los nombres");
    }
}