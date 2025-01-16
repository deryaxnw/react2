import React from "react";
import { useState, useRef } from "react";

export const Carrinho = () => {
    const [carrinho, setCarrinho] = useState(0)
    const [notificacao, setNotificacao] = useState(null)
    const timeOutRef = useRef();
  
  function handleClick(){
    setCarrinho(carrinho + 1)
    setNotificacao('item add ao carrinho');
  
    clearTimeout(timeOutRef.current)
  
    timeOutRef.current = setTimeout(() => {
        setNotificacao(null)
    }, 2000);
  }
  
   return (
    <>
    <p>{notificacao}</p>
      <button onClick={handleClick}>Adiciona carrinho </button>
  
      <div>
      {carrinho}
      </div>
    </>
   )


}