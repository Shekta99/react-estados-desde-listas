function Elemento(props) {
  const { setElemento, datos } = props;
  console.log(datos);

  return (
    <>
      <h3>{datos.nombre}</h3>
      <p>{String(datos.estado)}</p>
      <button
        onClick={() => {
          setElemento(datos.id);
        }}
      >
        Cambiar datos
      </button>
    </>
  );
}

export default Elemento;
