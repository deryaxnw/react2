import { useContext } from "react";
import { UserContext} from "./UserContext";

export const Produto = () => {
    const dados = useContext(UserContext)

    console.log(dados);
    
    // function handleClick(){

    //     dados.setContar((contar) => contar + 1)

    // }



    return ( <>
    <div>
        <h1>
        Produto : {dados.contar}
        </h1>
        <button onClick={() => dados.handleClick()}>Adicionar 1</button>
        <button onClick={() => dados.handleClickDois()}>Adicionar 2</button>
        <button onClick={() => dados.handleClickTres()}>Adicionar 3</button>
    </div>
    
    </> );
}