import React from 'react'
import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemaProps {
  tema: Tema
}

function CardTemas({tema}: CardTemaProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Tema</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{tema.descricao}</p>
      <div className="flex">
        <Link to={`/editarTema/${tema.id}`} className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center'>
          <button>Editar</button>
        </Link>
        <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'>Deletar</button>
      </div>
    </div>
  )
}

export default CardTemas