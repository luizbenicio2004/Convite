import React, { useRef, useState, useEffect } from "react";
import RSVP from "./components/RSVP";
import Location from "./components/Location";
import GiftList from "./components/GiftList";
import { Gift, MapPin, Heart } from "lucide-react";

export default function App() {
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative bg-white min-h-screen overflow-x-hidden">
      {/* Navegação */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 bg-red-700 text-white px-6 py-4 shadow-md flex justify-center items-center gap-6 text-base sm:text-xl font-semibold"
      >
        <a href="#rsvp" className="flex items-center gap-2 hover:underline transition">
          <Heart className="w-5 h-5" /> Confirmação
        </a>
        <a href="#local" className="flex items-center gap-2 hover:underline transition">
          <MapPin className="w-5 h-5" /> Local
        </a>
        <a href="#presentes" className="flex items-center gap-2 hover:underline transition">
          <Gift className="w-5 h-5" /> Presentes
        </a>
      </nav>

      {/* Conteúdo com padding baseado na altura da nav */}
      <div
        style={{ paddingTop: `${navHeight}px` }}
        className="container relative z-10 font-serif bg-white rounded-2xl shadow-lg px-6 sm:px-10"
      >
        {/* Flor decorativa topo */}
        <div className="flex justify-center mb-6 select-none pointer-events-none">
          <img
            src="/flores.jpeg"
            alt="Decoração floral com tulipas"
            className="w-[150px] h-auto"
          />
        </div>

        {/* Cabeçalho COM foto e texto de pastores */}
        <header className="mt-4 mb-10 py-6 bg-white border border-borda rounded-2xl shadow-inner text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-vermelho">
            Gabriela Maria & Luiz Benicio
          </h1>
          <p className="text-lg sm:text-xl mb-1">28 de Setembro de 2025</p>
          <p className="text-sm sm:text-base mt-0 mb-4">Cerimônia e Celebração às 17h</p>
          <blockquote className="italic text-vermelho text-lg max-w-md mx-auto mb-6">
            "Quanto ao nosso acordo, o SENHOR é testemunha entre mim e você para sempre"
          </blockquote>
          <img
            src="/foto.jpeg"
            alt="Luiz Benicio e Gabriela Maria"
            className="w-40 h-40 mx-auto rounded-full border-4 border-vermelho object-cover mb-4"
          />
          <p className="text-base sm:text-lg text-vermelho italic max-w-xl mx-auto mt-2">
            Teremos a alegria de receber a bênção dos nossos amados pastores, Eliseu Silvério e Shirley Silvério, que estarão conosco nesse dia tão especial para celebrar o amor e a fidelidade de Deus.
          </p>
        </header>

        {/* Seções */}

        <section id="rsvp">
          <RSVP />
        </section>

        <section id="presentes">
          <GiftList />
        </section>

        <section id="local">
          <Location />
        </section>

        {/* Flor decorativa rodapé */}
        <div className="flex justify-center mt-10 mb-6 select-none pointer-events-none">
          <img
            src="/flores.jpeg"
            alt="Decoração floral com tulipas"
            className="w-[150px] h-auto rotate-180"
          />
        </div>

        <footer className="text-center text-black text-lg sm:text-xl mb-6">
          Com carinho, aguardamos você no nosso grande dia! 💍
        </footer>
      </div>
    </div>
  );
}
