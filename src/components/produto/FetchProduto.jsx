import { useState } from "react";
import { Produto } from "./Produto";
import "../../../src/App.css";

export const FetchProduto = () => {
    const [dados, setDados] = useState(null);
    const [carregando, setCarregando] = useState(null);
  
  
  
  
    async function handleClick(e) {
      setCarregando(true)
  
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`
      );
  
      const json = await response.json()
      // console.log(json)
      setDados(json)
      setCarregando(false)
    }
  
  
    
    return (
      <>
        <div>
          <button  style={{ margin: ".5rem" }} onClick={handleClick}>
            notebook
          </button>
          <button style={{ margin: ".5rem" }} onClick={handleClick}>
            SmartPhone
          </button>
          <button style={{ margin: ".5rem" }} onClick={handleClick}>
            tablet
          </button>
        </div>
      
        <section>
          {carregando && <p>carregando....</p> }
          { !carregando && dados && <Produto dados={dados} />} 
  
        </section>
      </>
    );
}