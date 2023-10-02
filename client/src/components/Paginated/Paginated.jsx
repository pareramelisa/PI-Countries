import style from "./Paginated.module.css";

const Paginated = ({ paisesPagina, paises, paginado }) => {
  //valores que pasamos por props desestructuradas que vienen del componente countries
  const numPags = [];

  for (let i = 0; i <= Math.ceil(paises / paisesPagina); i++) {
    numPags.push(i + 1);
  }

  numPags.pop();

  return (
    <nav className={style.paginado}>
      <div className={style.paginadoList}>
        {numPags &&
          numPags.map((num) => {
            return (
              <div className={style.button} key={num}>
                <button
                  onClick={() => {
                    paginado(num);
                  }}
                >
                  {num}
                </button>
              </div>
            );
          })}
      </div>
    </nav>
  );
};

export default Paginated;
