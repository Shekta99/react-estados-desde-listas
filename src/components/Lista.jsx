import { useEffect, useState } from "react";
import Elemento from "./Elemento";

const datosIniciales = [
  { id: 1, name: "primer elemento", done: true },
  { id: 2, name: "segundo elemento", done: true },
  { id: 3, name: "tercer elemento", done: true },
  { id: 4, name: "cuarto elemento", done: true },
  { id: 5, name: "quinto elemento", done: true },
];

function Lista() {
  //cargamos datos iniciales por si esta vacia la lista
  const [miLista, setMiLista] = useState(datosIniciales);

  //revisamos el local storage al montar el componente y si existe el item lo cargamos en la lista en lugar de los datos iniciales
  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem("list"));
    if (datos) {
      console.log(datos);
      setMiLista(datos);
    }
  }, []);

  const setElemento = (id) => {
    if (id) {
      const listaAuxiliar = miLista.map((elemento) => {
        if (elemento.id === id) {
          return { ...elemento, done: !elemento.done };
        } else {
          return elemento;
        }
      });

      setMiLista(listaAuxiliar);
    }
  };
  return (
    <>
      {miLista.map((elemento) => (
        <Elemento datos={elemento} setElemento={setElemento} />
      ))}
    </>
  );
}

export default Lista;
