import Image from "next/image";
export default function Footer() {
    return(
        <footer className="flex flex-col gap-4 justify-center items-center p-6 h-full text-[#E9DFCC] bg-[#6c4633]">
            <div className="flex gap-5 flex-row md:gap-10 justify-center">
                <div className="flex justify-center items-center text-2xl flex-col sm:flex-row gap-2">
                    <aside className="flex flex-row sm:flex-row gap-2">
                        <i className="bi bi-whatsapp"></i>
                        <i className="bi bi-facebook"></i>
                    </aside>
                    <aside className="flex flex-row sm:flex-row gap-2">
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-youtube"></i>
                    </aside>
                </div>
                <div className="flex flex-col justify-center items-start">
                    <p>Contato:</p>
                    <p>clubedeficcao@contato.br</p>
                    <div><p>Avenida 10 de Setembro, 20,</p> São Pedro, Juiz de Fora/MG</div>
                </div>
            </div>
            <p className="text-center">Copyright R. Todos direitos reservados</p>
        </footer>
    );
}