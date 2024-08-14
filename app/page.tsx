import Image from "next/image";

export default function Home() {
  return (
    <>
        <nav className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[19px] px-11 py-[22px] bg-[#E9DFCC]">
          <Image
            src="/public/images/profile.png"
            width={99}
            height={50}
            alt="Picture of the author"
          />
          <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-center text-[#352630]">Início</p>
          <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-center text-[#352630]">Contato</p>
          <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-center text-[#352630]">Gerenciamento</p>
          <div className="flex justify-end items-center flex-grow overflow-hidden gap-2.5 p-2.5">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[91px] h-[46px] relative gap-2.5 rounded-[10px] bg-[#f6b180]">
              <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-[#2a1a25]">Login</p>
            </div>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-72 h-[46px] relative gap-2.5 rounded-[10px] bg-[#f6b180]">
              <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-[#2a1a25]">
                Conheça Nosso Catálogo
              </p>
            </div>
          </div>
        </nav>

        <div className="flex justify-center gap-1 items-center self-stretch text-[#E9DFCC] bg-[#6C4633]">
          <p className="font-bold text-[#F3A36B]"> CONFIRA</p> AGORA O BOX DO MÊS
        </div>
        
        <div className="flex flex-col ">
            <div className="flex">
              <div>
                <h1>
                  Clube de Ficção
                </h1>
                <h2>
                  Os melhores da literatura de ficção com qualidade excepcional e brindes exclusivos 
                </h2>
              </div>
              <Image
                src="/public/images/profile.png"
                width={99}
                height={50}
                alt="Picture of the author"
              />

            </div>
            <button>
              Faça parte do Clube
            </button>
        </div>

        <div>
          <h1>
            CONHEÇA NOSSOS PRODUTOS
          </h1>
          <div>
            Cards
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1>Somos unidos pela leitura!</h1>
          <div className="flex gap-6">
            <h2>seja exigente ao escolher a edição dos seus livros!</h2>
            <h2>Monte sua própria biblioteca em casa</h2>
          </div>
          <button>
            Garanta o seu
          </button>
        </div>

        <div className="flex flex-col">
          <h1>QUEM NÓS SOMOS</h1>
          <div>

          </div>
        </div>

        <footer className="flex flex-col">
          <div className = "flex">
            <img></img>
            <div></div>
            <div className="flex flex-col">
              <p>Contato:</p>
              <p>clubedeficcao@contato.br</p>
              <p>Avenida 10 de Setembro, 20, São Pedro, Juiz de Fora/MG</p>
            </div>
          </div>
          <p>Copyright R. Todos direitos reservados</p>
        </footer>
    </>
  );
}
