function filtroDePersonas(parametro) {
    console.log("nombre ".concat(parametro.nombre));
    console.log("edad ".concat(parametro.edad));
    if (parametro.email) {
        console.log("email ".concat(parametro.email));
    }
    return "La información está completa";
}
var resultado = {
    nombre: "Fernando",
    edad: 34,
    email: "Fer.almada@hotmail.com",
};
console.log(filtroDePersonas(resultado));
