import { useState } from "react";
import Elemento from "./Elemento";

const datosIniciales = [
  { id: 1, nombre: "primer elemento", estado: true },
  { id: 2, nombre: "segundo elemento", estado: true },
  { id: 3, nombre: "tercer elemento", estado: true },
  { id: 4, nombre: "cuarto elemento", estado: true },
  { id: 5, nombre: "quinto elemento", estado: true },
];

function Lista() {
  const [miLista, setMiLista] = useState(datosIniciales);

  const setElemento = (id) => {
    if (id) {
      const listaAuxiliar = miLista.map((elemento) => {
        if (elemento.id === id) {
          return { ...elemento, estado: !elemento.estado };
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
