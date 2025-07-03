import React, { useRef, useState, useEffect } from "react";
import RSVP from "./components/RSVP";
import Location from "./components/Location";
import GiftList from "./components/GiftList";
import Countdown from "./components/Countdown";
import { Gift, MapPin, Heart } from "lucide-react";

function CountdownInline() {
  const weddingDate = new Date("2025-09-20T17:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = weddingDate - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    const totalSeconds = Math.floor(diff / 1000);
    return {
      days: Math.floor(totalSeconds / 86400),
      hours: Math.floor((totalSeconds % 86400) / 3600),
      minutes: Math.floor((totalSeconds % 3600) / 60),
      seconds: totalSeconds % 60,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-inline">
      <span role="img" aria-label="Relógio de areia" className="animate-pulse">
        ⏳
      </span>
      <span>
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </span>
    </div>
  );
}

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
      {/* Navegação fixa no topo, centralizada e baixa */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 bg-red-700 text-white px-4 sm:px-6 py-0.5 sm:py-1
                   flex flex-col items-center text-center text-lg sm:text-xl font-semibold"
      >
        {/* Links da navegação */}
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 mb-0">
          <a href="#rsvp" className="flex items-center gap-1 hover:underline transition leading-none">
            <Heart className="w-5 h-5" /> Confirmação
          </a>
          <a href="#local" className="flex items-center gap-1 hover:underline transition leading-none">
            <MapPin className="w-5 h-5" /> Local
          </a>
          <a href="#presentes" className="flex items-center gap-1 hover:underline transition leading-none">
            <Gift className="w-5 h-5" /> Presentes
          </a>
        </div>

        {/* Countdown inline */}
        <CountdownInline />
      </nav>

      {/* Conteúdo principal com padding topo dinâmico */}
      <div
        style={{ paddingTop: `${navHeight}px` }}
        className="container relative z-10 font-serif bg-white rounded-2xl shadow-lg px-6 sm:px-10"
      >
        {/* Flores topo */}
        <div className="flex justify-center mb-6 select-none pointer-events-none">
          <img src="/flores.jpeg" alt="Decoração floral com tulipas" className="w-[150px] h-auto" />
        </div>

        {/* Cabeçalho com foto e texto */}
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

        {/* Contagem regressiva principal */}
        <Countdown />

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

        {/* Flores rodapé */}
        <div className="flex justify-center mt-10 mb-6 select-none pointer-events-none">
          <img src="/flores.jpeg" alt="Decoração floral com tulipas" className="w-[150px] h-auto rotate-180" />
        </div>

        {/* Rodapé */}
        <footer className="text-center text-black text-lg sm:text-xl mb-6">
          Com carinho, aguardamos você no nosso grande dia! 💍
        </footer>
      </div>
    </div>
  );
}
