// import React, { useRef, useState } from "react";
// import { FetchProd } from "./components/Produto2/FetchProd";
// import { useRef, useState } from "react";
// import { useMemo, useState , useContext} from "react";
import "./App.css";
// import { Button } from "./components/Contexto/Button";
// import { Produto } from "./components/Contexto/Produto";
// import { StorageContexto } from "./components/Contexto/StorageContexto";
// import { Carrinho } from "./components/useRef/Carrinho";
// import Ref from "./components/useRef/Ref";

// import { Produto } from "./components/userContext/Produto";
// import { StorageContext } from "./components/userContext/UserContext";
import useLocalStorage from './components/meuHook/useLocalStorage'

function App() {
  const [produto , setProduto] = useLocalStorage('produto', '')

  function handleClick({target}) {
    setProduto(target.innerText)
  }

  return (
    <>

      <p>Produto preferido: {produto}</p>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartPhone</button>




      {/* <StorageContexto>
        <Produto />
        <Button />
      </StorageContexto> */}
    </>
  );
}

export default App;
