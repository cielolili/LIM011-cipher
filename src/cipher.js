window.cipher = {
//Si necesitamos incluir varias instrucciones en nuestra función se incluyen las llaves y el retorno.
encode: (offset, string) => {
  let nuevoTexto = '';
  for (let i = 0; i < string.length; i++) {
    let convAscii = string.charCodeAt(i); //para sacarle su código ascii

    if (convAscii >= 65 && convAscii <= 90) { //fromCharCode es para pasarlo a una letra
      nuevoTexto += String.fromCharCode((convAscii - 65 + parseInt(offset)) % 26 + 65); // Mayus Ascii: 65 - 90
    } else if (convAscii >= 97 && convAscii <= 122) {
      nuevoTexto += String.fromCharCode((convAscii - 97 + parseInt(offset)) % 26 + 97); // Minus Ascii: 97 - 122
    } else if (convAscii >= 48 && convAscii <= 57) { //numeros
      nuevoTexto += String.fromCharCode((convAscii - 48 + parseInt (offset)) %10 +48); //es 10 porque empieza del 0 al 9
    } else {
      nuevoTexto += string[i];       // concateno los números, signos, espacios y caracteres especiales
    }
  }
  return nuevoTexto; //retorno
},


decode: (offset, string) => {
  let nuevoTexto = '';
  // let key = parseInt(offset);
  for (let i = 0; i < string.length; i++) {
    let convAscii = string.charCodeAt(i);
    if (convAscii >= 65 && convAscii <= 90) { //Mayus Ascii: 65-90
      nuevoTexto += String.fromCharCode((convAscii - 90 - parseInt(offset)) % 26 + 90);
    } else if (convAscii >= 97 && convAscii <= 122) { //Minus Ascii: 97-122
      nuevoTexto += String.fromCharCode((convAscii - 122 - parseInt(offset)) % 26 + 122); //desde el 122 porque retrocede, empieza desde la Z
    } else if (convAscii >= 48 && convAscii <= 57) { //numeros
      nuevoTexto += String.fromCharCode((convAscii - 57 - parseInt(offset)) %10 + 57);
    } else {
      nuevoTexto += string[i]; // concateno los números, signos, espacios y caracteres especiales
    }
  }
  return nuevoTexto;
}

}
