const Cards = ({ data }) => {

  const checkStatus = ({ status }) => {
    if (status == "unknown") {
      return <h2 className="flex items-center text-font text-sm font-semibold">
        <span className="h-2 w-2 bg-zinc-400 rounded-full mr-2 hover:bg-zinc-300"></span>Desconhecido</h2>
    } else if (status == "Alive") {
      return <h2 className="flex items-center text-font text-sm font-semibold">
        <span className="h-2 w-2 bg-button rounded-full mr-2 hover:bg-green-500"></span>Vivo</h2>
    } else {
      return <h2 className="flex items-center text-font text-sm font-semibold">
        <span className="h-2 w-2 bg-red-600 rounded-full mr-2 hover:bg-red-500"></span>Morto</h2>
    }
  }

  return (
    <div className='flex flex-wrap gap-5 mx-5 mt-10 mb-5 items-center justify-center'>
      {data.map((personagem) => (
        <div className="bg-input p-2 rounded-md h-full" key={personagem.id}>
          <img className="rounded-lg shadow-lg " src={personagem.image} alt="" />
          <div>
            <h1 className="text-font font-semibold mt-1 mx-1 whitespace-nowrap overflow-hidden">{personagem.name}</h1>
            <div className="text-font mx-1">
              {checkStatus(personagem)}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards
