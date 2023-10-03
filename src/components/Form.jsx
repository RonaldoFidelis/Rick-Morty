import { useState } from "react";

const Form = ({ search }) => {
  const [person, setPerson] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    search(person)
    setPerson('')

  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-5xl md:text-8xl text-center mb-5 text-font font-extrabold mt-5">Rick & Morty</h2>
      <form className="flex flex-row gap-2 mb-2" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="bg-input text-base text-font w-64 font-semibold outline-none px-3 rounded-lg"
          placeholder="Digite o nome do personagem"
          type="text"
          value={person}
          onChange={(e) => setPerson(e.target.value)} />
        <button
          className="flex items-center justify-center text-font bg-button hover:bg-green-500 duration-500 cursor-pointer rounded-full p-4">
          <i
            className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  )
}

export default Form
