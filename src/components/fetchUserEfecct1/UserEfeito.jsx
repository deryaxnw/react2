import React from "react";


export const UserEfeito = () => {
    const [contar, setContar] = useState(0);
    const [dados, setDados] = useState(null);
  
    React.useEffect(() => {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/notebook`)
        .then((response) => response.json())
        .then((json) => setDados(json));
    }, []);
  
    return (
      <>
      <div>
       {dados && (
        <div>
          
            <h1>
              {dados.nome}
            </h1>
              <h2> R$ {dados.preco * contar}</h2>
        
        </div>
       )}
      </div>
        <button onClick={() => setContar(contar + 1)}>{contar}</button>
      </>
    );
}