import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import Tema from '../../../models/Tema'
import { buscar } from '../../../services/Service'
import { toastAlerta } from '../../../utils/toastAlerta'
import CardTemas from '../cardTemas/CardTemas'

function ListaTemas() {
  const [temas, setTemas] = useState<Tema[]>([])

  let navigate = useNavigate()

  const { usuario } = useContext(AuthContext)
  const token = usuario.token

  async function buscarTemas() {
      await buscar('/temas', setTemas, {
          headers: { 'Authorization': token }
      })
  }

  useEffect(() => {
      if (token === '') {
          toastAlerta('Você precisa estar logado', 'info')
          navigate('/login')
      }
  }, [token])

  useEffect(() => {
      buscarTemas()
  }, [temas.length])
  return (
    <div className='flex justify-center'>
      <div className="container flex flex-col">
        <h1 className='text-4xl text-center my-8'>Temas Cadastrados</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {temas.map((tema) => (
          <>
            <CardTemas key={tema.id} tema={tema} />
          </>
        ))}
        </div>
      </div>
    </div>
  )
}

export default ListaTemas