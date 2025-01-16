export const Produto = ({dados}) => {
    return ( <>
        <div>
            <h1>{dados.nome}</h1>
            <p>{dados.descricao}</p>
            <p>R$ {dados.preco}</p>
            <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
        </div>
    
    </> );
}