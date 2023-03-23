import React from 'react'
import './Cadastro.css'

function Cadastro() {
  return (
    <>
      <div className="grid grid-cols-2 place-items-center font-bold">
        <div className="fundoCadastro"></div>
        <form className='flex justify-center items-center flex-col w-2/3 gap-3'>
          <h2 className='text-slate-900 text-5xl'>Cadastrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default Cadastro