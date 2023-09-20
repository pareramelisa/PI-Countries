const Paginated = ( {paisesPagina, paises, paginado} ) => {
    const numPags = [];

    for (let i = 0; i <= Math.ceil(paises / paisesPagina); i++) {
        numPags.push(i + 1)}
        
      numPags.pop();

      return(
        <nav>
            <div>
                {numPags &&
                numPags.map(num =>{
                  return  <div key={num}>
                    <button onClick={()=>{paginado(num)}}>{num}</button>
                    </div>
             })}
            </div>
        </nav>
    )

}


export default Paginated