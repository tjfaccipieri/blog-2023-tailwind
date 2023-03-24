import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../utils/toastAlerta'

function Navbar() {
  let navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        toastAlerta('Usuário deslogado com sucesso', 'info')
        navigate('/login')
    }

    let componentNavbar

    if(usuario.token !== "") {
      componentNavbar = (
        <div className='w-full bg-blue-800 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <h2 className='text-2xl font-bold uppercase'>Blog Pessoal</h2>

            <div className='flex gap-4'>
              <Link to='' className='hover:underline'>Postagens</Link>
              <Link to='' className='hover:underline'>Temas</Link>
              <Link to='' className='hover:underline'>Cadastrar tema</Link>
              <Link to='' className='hover:underline'>Perfil</Link>
              <Link to='' className='hover:underline'>Sair</Link>
            </div>
          </div>
        </div>
      )
    }

  return (
    <>
      {componentNavbar}
    </>
  )
}

export default Navbar