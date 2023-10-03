import { useState } from "react";

const Form = ({search}) => {
  const [person, setPerson] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    search(person)
    setPerson('')

  }

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h1 className="text-3xl text-font font-bold mb-10">Rick & Morty</h1>
      <form className="flex flex-row gap-2" onSubmit={(e) => handleSubmit(e)}>
        <input
        className="bg-input text-sm text-font w-64 outline-none p-2 rounded-lg"
        placeholder="Digite o nome do personagem"
        type="text"
        value={person}
        onChange={(e) => setPerson(e.target.value)} />
        <button className="flex items-center justify-center text-font bg-button rounded-full p-3">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  )
}

export default Form
