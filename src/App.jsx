import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form';
import Cards from './components/Cards';

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

  console.log(data)

  return (
    <div className='m-0 p-0'>
      <Form search={search} />
      <div className='flex flex-col'>
        <Cards data={data}/>
      </div>
    </div>
  )
}

export default App
