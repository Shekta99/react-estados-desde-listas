function Elemento(props) {
  const { setElemento, datos } = props;

  return (
    <>
      <h3>{datos.name}</h3>
      <p>{String(datos.done)}</p>
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
