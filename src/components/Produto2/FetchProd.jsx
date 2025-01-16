import React, { useState, useEffect } from "react";
import { Prod } from "../Produto2/Prod";    



export const FetchProd = () => {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const produtoLocal = window.localStorage.getItem("produto");
    if (produtoLocal !== null) {
      setProduto(produtoLocal);
    }
  }, []);

  useEffect(() => {
    if (produto !== null) window.localStorage.setItem("produto", produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <>
      <div>
        <h1>Preferência: {produto} </h1>
        <button onClick={handleClick} style={{ margin: ".5rem" }}>
          Notebook
        </button>
        <button onClick={handleClick} style={{ margin: ".5rem" }}>
          SmartPhone
        </button>

        <Prod produto={produto} />
      </div>
    </>
  );
};
