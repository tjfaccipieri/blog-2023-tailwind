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
link da página: [Tailwind Starter Kit](https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/regular)

foi usado o primeiro modal de exemplo (abaixo código ajustado)

```TS
function ModalPostagem() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className='rounded border hover:bg-white hover:text-blue-800 py-2 px-4'
        type="button"
        onClick={() => setShowModal(true)}
      >
        Nova postagem
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black "
          >
            <div className="relative my-6 mx-auto w-[50vw]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between border-b border-solid border-slate-200 rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black text-2xl block outline-none focus:outline-none">
                      <XSquare size={32} />
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <FormularioPostagem />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default ModalPostagem

```
