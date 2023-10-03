import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form';

function App() {
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character')
  const [data, setData] = useState([])

  const search = (personagem) => {
    setUrl(`https://rickandmortyapi.com/api/character/?name=${personagem}`)
  }

  useEffect(() => {
    async function dataApi(url){
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Falha ao buscar dados');
        }

        const data = await response.json();
        setData(data.results);
        
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }

    dataApi(url);
  }, [url]);



  return (
    <div>
      <Form search={search} />
      <div>
        {data.map((personagem) => (
          <div key={personagem.id}>
            <img src={personagem.image} alt="" />
            <h1>Name:{personagem.name}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
