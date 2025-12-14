interface Persona {
  nombre: string;
  edad: number;
  email?: string; //signo de pregunta xq el campo no es obligatorio
}

function filtroDePersonas(parametro: Persona) {
  console.log(`nombre ${parametro.nombre}`);
  console.log(`edad ${parametro.edad}`);
  if (parametro.email) {
    console.log(`email ${parametro.email}`);
  }
  return "La información está completa";
}

const resultado: Persona = {
  nombre: "Fernando",
  edad: 34,
  email: "Fer.almada@hotmail.com",
};

console.log(filtroDePersonas(resultado));
