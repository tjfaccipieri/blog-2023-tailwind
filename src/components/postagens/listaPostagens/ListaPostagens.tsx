import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Postagem from '../../../models/Postagem';
import { buscar } from '../../../services/Service';
import { toastAlerta } from '../../../utils/toastAlerta';
import CardPostagem from '../cardPostagem/CardPostagem';

function ListaPostagens() {
  const [postagens, setPostagens] = useState<Postagem[]>([]);

  let navigate = useNavigate();

  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/');
    }
  }, [token]);

  async function buscarPostagens() {
    await buscar('/postagens', setPostagens, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    buscarPostagens();
  }, [postagens.length]);

  return (
    <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {postagens.map((postagem) => (
        <CardPostagem key={postagem.id} post={postagem} />
      ))}
    </div>
  );
}

export default ListaPostagens;
