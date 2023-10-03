const Cards = ({ data }) => {

  const checkStatus = ({ status }) => {
    if (status == "unknown") {
      return <h2 className="flex items-center mx-1 text-font text-sm font-semibold">
        <span className="h-2 w-2 bg-zinc-400 rounded-full mr-2 hover:bg-zinc-300"></span>Desconhecido </h2>
    } else if (status == "Alive") {
      return <h2 className="flex items-center mx-1 text-font text-sm font-semibold">
        <span className="h-2 w-2 bg-button rounded-full mr-2 hover:bg-green-500"></span>Vivo</h2>
    } else {
      return <h2 className="flex items-center mx-1 text-font text-sm font-semibold">
        <span className="h-2 w-2 bg-red-600 rounded-full mr-2 hover:bg-red-500"></span>Morto</h2>
    }
  }

  const checkGender = ({gender}) => {
    if(gender == 'Female'){
      return <h2 className="mt-1 mx-1 text-font text-sm font-semibold">Gênero: Feminino</h2>
    }else if(gender == 'Male'){
      return <h2 className="mt-1 mx-1 text-font text-sm font-semibold">Gênero: Masculino</h2>
    } else {
      return <h2 className="mt-1 mx-1 text-font text-sm font-semibold">Gênero: {gender}</h2>
    }
  }

  const checkOrigin = ({ origin }) => {
    if (origin.name == 'unknown' || origin.name == '') {
      return <h2 className="flex items-center justify-center mt-1 mx-1 text-font text-sm font-semibold">Origem:<p className="text-fontForm mx-1">Desconhecido</p></h2>
    } else if (origin.name == 'Earth (Replacement Dimension)') {
      return <h2 className="flex items-center justify-center mt-1 mx-1 text-font text-sm font-semibold">Origem: <p className="text-button mx-1">Terra (rebot)</p></h2>
    } else {
      if (origin.name.includes('Earth')) {
        return <h2 className="flex items-center justify-center mt-1 mx-1 text-font text-sm font-semibold">Origem:<p className="text-button mx-1">{origin.name.replace('Earth', 'Terra')}</p></h2>
      }
      return <h2 className="flex items-center justify-center mt-1 mx-1 text-font text-sm font-semibold">Origem:<p className="text-button mx-1">{origin.name}</p></h2>
    }
  }
  return (
    <div className='flex flex-wrap items-center justify-center m-5 gap-5'>
      {data.map((personagem) => (
        <div className="flex overflow-hidden w-80 bg-input p-2 rounded-md" key={personagem.id}>
          <img className="rounded-lg shadow-lg w-32" src={personagem.image} alt={personagem.name} />
          <div className="flex flex-col mx-2">
            <h1 className="text-font font-semibold mt-1 mx-1 whitespace-wrap overflow-hidden">{personagem.name}</h1>
            {checkStatus(personagem)}
            {checkGender(personagem)}
            {checkOrigin(personagem)}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards
