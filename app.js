// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Función para agregar los nombres a la lista "amigos". También valida que no se ingrese un valor vacío o con sólo espacios
function agregarAmigo(){
    let nombreIngresado = document.getElementById("amigo").value.trim(); //El trim se utiliza para quitar espacios en blanco antes y después del nombre, también evita que se ingrese solo espacios vacíos
    if (nombreIngresado !== ""){
        amigos.push(nombreIngresado);
        console.log("Amigos: ", amigos);
        document.getElementById("amigo").value = "";//Limpia el imput después de agregar el nombre del amigo
    } else{
        alert("Por favor, ingrese un valor válido");
    }
}

