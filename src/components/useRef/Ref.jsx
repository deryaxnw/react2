import { useState, useRef } from "react";


const Ref = () => {
    const [comentarios, setComentarios] = useState([]);
  const [input, setInput] = useState("");

  const inputElement = useRef('');



  function handleClick(){
    setComentarios([...comentarios, input])
    setInput('');
    inputElement.current.focus()
  }


  return (
    <>
      <div>
        <ul>
          {comentarios.map((comentario) => (
            <li key={comentario}>{comentario}</li>
          ))}
        </ul>
        <input
          type="text"
          value={input}
          ref={inputElement}
          onChange={({ target }) => setInput(target.value)}
        />
        <button onClick={handleClick}>Enviar</button>
      </div>
    </>
  );
}
 
export default Ref;