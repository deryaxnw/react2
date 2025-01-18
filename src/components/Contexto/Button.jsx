import { useContext } from "react";
import { UseContext } from "./StorageContexto";

export const Button = () => {
    const {LimaparDados, VoltarDados} = useContext(UseContext)
    // const {VoltarDados} = useContext(UseContext)
    // console.log(LimparDados);
    

    return ( <>
        <button onClick={LimaparDados}>Limpar Dados</button>
        <button onClick={VoltarDados}>VOLTAR Dados</button>
    </> );
}