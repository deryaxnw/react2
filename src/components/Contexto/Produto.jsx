import { useContext} from "react";
import { UseContext } from "./StorageContexto";

export const Produto = () => {
  const {dados} = useContext(UseContext);

  console.log(dados);

  if(dados === null) {
    return null
  }

  return (
    <>
      
        <section >
            <h1>Produtos</h1>
            {dados.map((produto) => (
                <li key={produto.id}>{produto.nome}</li>
                
            ))}

        </section >
            <div  style={{width: '300px', height: '100px'}}>
                {dados.map((produto) => (
                    // <li key={produto.id}>{produto.fotos.src}</li>
                    <img style={{width: '300px', height: '300px', objectFit: 'cover'}} key={produto.id} src={produto.fotos[0].src} alt={produto.fotos.titulo} />
                  
                ))}
            </div>
      
      
      
      
      
      {/* <div>
        <h1>
        Produtos: 
        </h1>
            <h2>{dados.dados[0].nome}</h2>
            <p>preco : {dados.dados[0].preco}</p>
            <p>Descrição: {dados.dados[0].descricao}</p>
            <img src={dados.dados[0].fotos[0].src} alt={dados.dados[0].fotos[0].titulo} />
        </div> */}
    </>
  );
};
