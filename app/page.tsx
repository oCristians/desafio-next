import Image from "next/image";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <button className="flex justify-center gap-1 p-2 items-center w-max self-stretch text-[#E9DFCC] bg-[#6C4633]">
        <p className="font-bold text-[#F3A36B]"> CONFIRA</p> AGORA O BOX DO MÊS
      </button>
      <div className="flex flex-col h-auto p-12 bg-[#352630] ">
        <div className="flex">
          <div>
            <h1>Clube de Ficção</h1>
            <h2>
              Os melhores da literatura de ficção com qualidade excepcional e
              brindes exclusivos
            </h2>
          </div>
          <Image
            src="/public/images/profile.png"
            width={99}
            height={50}
            alt="Picture of the author"
          />
        </div>
        <button>Faça parte do Clube</button>
      </div>

      <div>
        <h1>CONHEÇA NOSSOS PRODUTOS</h1>
        <div>Cards</div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1>Somos unidos pela leitura!</h1>
        <div className="flex gap-6">
          <h2>seja exigente ao escolher a edição dos seus livros!</h2>
          <h2>Monte sua própria biblioteca em casa</h2>
        </div>
        <button>Garanta o seu</button>
      </div>

      <div className="flex flex-col">
        <h1>QUEM NÓS SOMOS</h1>
        <div></div>
      </div>

      <footer className="flex flex-col">
        <div className="flex">
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
