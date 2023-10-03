import { useState } from "react";

const Form = ({ search }) => {
  const [person, setPerson] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    search(person)
    setPerson('')

  }

  return (
    <div className="flex flex-col h-60 bg-form items-center justify-center p-5">
      <h1 className="text-6xl md:text-8xl text-fontForm font-extrabold mb-5">Rick & Morty</h1>
      <form className="flex flex-row gap-2" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="bg-input text-base text-font w-72 font-semibold outline-none p-2 px-5 rounded-lg"
          placeholder="Digite o nome do personagem"
          type="text"
          value={person}
          onChange={(e) => setPerson(e.target.value)} />
        <button
          className="flex items-center justify-center text-font bg-button hover:bg-green-500 duration-500 cursor-pointer rounded-full w-12 h-12">
          <i
            className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  )
}

export default Form
