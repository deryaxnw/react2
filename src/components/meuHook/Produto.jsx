import { useEffect } from "react";
import useFetch from "./useFetch";
import useLocalStorage from "./useLocalStorage";



export const Produto = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");
  const {request, data , loading , err} = useFetch()

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  useEffect(() => {
    async function FecthData(){
      const {response, json} = await request(`https://ranekapi.origamid.dev/json/api/produto/`)
      
      console.log(response, json);
      
    }
    FecthData()
  }, [request]);

  if(err) {
    return <p>{err}</p>
  }
  if(loading){
    return <p>carregando...</p>
  }
  if(data)
  return <>
  
    <p>Produto: {produto}</p>
    <button onClick={handleClick}>notebook</button>
    <button onClick={handleClick}>smartPhone</button>


    {data.map((produto) => (
      <div key={produto.id}><h1>{produto.nome}</h1></div>
    ))}
  </>;
  else return null
};
