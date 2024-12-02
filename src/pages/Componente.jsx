import "./Componente.css";
const Componente = () => {
  const diferente = true;
  return (
    <div>
      <h1 className="titulo">Título h1 do componente</h1>
      <h2 className={diferente
        ? "titulo-diferente"
        : "titulo-normal"
      }
      >esqueci de colocar texto </h2>
    </div>
  );
};

export default Componente;
