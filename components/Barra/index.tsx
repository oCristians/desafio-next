export default function Barra() {
  return (
    <nav className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-6 px-11 py-2 bg-[#E9DFCC]">
      <a className="flex-grow-0 flex-shrink-0 text-xl font-bold text-center text-[#352630]">
        Início
      </a>
      <a className="flex-grow-0 flex-shrink-0 text-xl font-bold text-center text-[#352630]">
        Contato
      </a>
      <a className="flex-grow-0 flex-shrink-0 text-xl font-bold text-center text-[#352630]">
        Gerenciamento
      </a>
      <div className="flex justify-end items-center flex-grow overflow-hidden gap-2.5 p-2.5">
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[91px] h-[46px] relative gap-2.5 rounded-[10px] bg-[#f6b180]">
          <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-[#2a1a25]">
            Login
          </p>
        </div>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-72 h-[46px] relative gap-2.5 rounded-[10px] bg-[#f6b180]">
          <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-[#2a1a25]">
            Conheça Nosso Catálogo
          </p>
        </div>
      </div>
    </nav>
  );
}
