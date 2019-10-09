// Llamo los ID "Cajas de textos y botones" que creé en mi inihtml
let btnEncode = document.getElementById("cifrar");
let btnDecode = document.getElementById("descifrar");
let btnLimpiar = document.getElementById("botonLimpiar");
let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let provincia = document.getElementById("provincia");
let distrito = document.getElementById("distrito");
let direccion = document.getElementById("direccion");
let numeroDNI = document.getElementById("numeroDNI");
let telefono = document.getElementById("telefono");
let pagar = document.getElementById("pagar");
let cajadetexto = document.getElementById("cajadetexto");
let cajadetexto1 = document.getElementById("cajadetexto1"); //caja donde saldrá decodificado
let texto = document.getElementById("texto"); //para codificar
let codificado = document.getElementById("codificado"); //mandando los datos a la otra pagina
let desplazamiento = document.getElementById ("desplazamiento");
let desplazamiento1= document.getElementById("desplazamiento1"); //para decoodificar
//llamo al botón Encriptar
btnEncode.addEventListener("click", Encode);
function Encode() {
	let desplazamiento = document.getElementById("desplazamiento").value;
	cajadetexto.value = cipher.encode(desplazamiento,nombre.value + ' ' + edad.value + ' ' + provincia.value + ' '+ distrito.value + ' ' + direccion.value +' '+ numeroDNI.value + ' ' + telefono.value + ' ' + pagar.value);
 codificado.value=cipher.encode( desplazamiento,nombre.value + ' ' + edad.value + ' ' + provincia.value + ' '+ distrito.value + ' ' + direccion.value +' '+ numeroDNI.value + ' ' + telefono.value + ' ' + pagar.value);
}


//llamo al botón Desencriptar
btnDecode.addEventListener("click", Decode);
function Decode() {
	let desplazamiento1 = document.getElementById("desplazamiento1").value; //el segundo desplazamiento
	cajadetexto1.value = cipher.decode(desplazamiento1, texto.value); //donde quiero que me salga el resultado

}


//llamo al botón Limpiar
btnLimpiar.addEventListener("click", Limpiar );
function Limpiar() {
	document.getElementById("nombre").value = "";
	document.getElementById("desplazamiento").value = "";
	document.getElementById("cajadetexto").value = "";
  document.getElementById("nombre").value ="";
  document.getElementById("edad").value ="";
  document.getElementById("provincia").value = "";
  document.getElementById("distrito").value = "";
  document.getElementById("direccion").value = "";
  document.getElementById("numeroDNI").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("pagar").value ="";
  document.getElementById("cajadetexto").value ="";



}

// IMPORTANTE:
// document.getElementById("desplazamiento")==> Captura la caja de texto
// .value   ==> captura el valor de la caja de texto.
// cajadetexto ==> es variable de salida, no tiene un valor para capturar.
// el .value de cajadetexto ==> es igual al resultado que deseo mostrar.
// --------------------------------------------------------
