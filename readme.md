# Projeto Blog Pessoal - 2023

### Projeto criado com Vite + ContextAPI

Libs necessárias para o projeto:
### Dependencies
* react-router-dom
* react-toastify
* react-use-localstorage
* axios
* phosphor-icons
* react-loader-spinner

### Dev Dependencies
* tailwindcss
* postcss
* autoprefixer
> Executar a configuração padrão do Tailwind, seguindo a documentação oficial


### Configuração do modal
link da página: [Reacrjs-Popup](https://react-popup.elazizi.com/)



```TS
import React, { useState } from 'react';
import FormularioPostagem from '../formularioPostagem/FormularioPostagem';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

function ModalPostagem() {
  return (
    <>
      <Popup trigger={<button className='border rounded px-2 hover:bg-white hover:text-indigo-800'> Nova postagem</button>} modal>
        <div >
          <FormularioPostagem />
        </div>
      </Popup>
    </>
  );
}

export default ModalPostagem;

```
