import { useEffect, useState } from "react";

export const Prod = ({ produto }) => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    if (produto !== null)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setDados(json));
  } ,[produto]);

  if (dados === null) {
    return null;
  }

  return (
    <>
      <div>
        <h1>{dados.nome}</h1>
        <p> R$ {dados.preco}</p>
        <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
      </div>
    </>
  );
};
