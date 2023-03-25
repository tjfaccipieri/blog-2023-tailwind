import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Tema from '../../../models/Tema'

function FormularioTema() {
  
  const [tema, setTema] = useState<Tema>({} as Tema)

  let navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  return (
    <>

    </>
  )
}

export default FormularioTema