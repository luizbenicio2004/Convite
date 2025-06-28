import React from "react";
import RSVP from "./components/RSVP";
import Location from "./components/Location";
import GiftList from "./components/GiftList";
import { Gift, MapPin, Heart } from "lucide-react";

export default function App() {
  return (
    <div className="relative bg-white min-h-screen overflow-x-hidden">

      {/* Flores laterais GRANDES */}
      <img
        src="/florzinha.jpeg"
        alt="Flor decorativa esquerda"
        className="hidden sm:block fixed top-0 left-0 h-full w-auto pointer-events-none select-none z-0"
      />
      <img
        src="/florzinha.jpeg"
        alt="Flor decorativa direita"
        className="hidden sm:block fixed top-0 right-0 h-full w-auto pointer-events-none select-none rotate-180 z-0"
      />

      {/* Navegação fixa */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-red-700 text-white py-3 sm:py-4 px-6 shadow-md flex justify-center gap-8 sm:gap-12 text-lg sm:text-xl font-semibold">
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

      {/* Conteúdo abaixo da navbar com padding no topo */}
      <div className="pt-[100px] container relative z-10 font-serif bg-white rounded-2xl shadow-lg px-6 sm:px-10">

        {/* Flor decorativa no topo */}
        <div className="flex justify-center mb-6 select-none pointer-events-none">
          <img
            src="/flor.png"
            alt="Decoração floral com tulipas"
            className="w-[150px] h-auto"
          />
        </div>

        {/* Cabeçalho do convite */}
        <header className="mb-10 py-6 bg-white border border-borda rounded-2xl shadow-inner text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-vermelho">
            Luiz Benicio & Gabriela Maria
          </h1>
          <p className="text-lg sm:text-xl mb-4">28 de Setembro de 2025</p>
          <blockquote className="italic text-vermelho text-lg max-w-md mx-auto mb-6">
            "Quanto ao nosso acordo, o SENHOR é testemunha entre mim e você para sempre"
          </blockquote>
          <img
            src="/foto.jpeg"
            alt="Luiz Benicio e Gabriela Maria"
            className="w-40 h-40 mx-auto rounded-full border-4 border-vermelho object-cover mb-6"
          />
          <img
            src="/cartinha.jpeg"
            alt="Cartinha do convite"
            className="mx-auto max-w-md w-full object-contain mb-6"
          />
        </header>

        {/* Seções do convite */}
        <section id="rsvp" className="mb-10">
          <h2 className="text-vermelho mb-4 text-3xl sm:text-4xl font-semibold">Confirme sua Presença</h2>
          <RSVP />
        </section>

        <section id="local" className="mb-10">
          <h2 className="text-vermelho mb-4 text-3xl sm:text-4xl font-semibold">Local</h2>
          <Location />
        </section>

        <section id="presentes" className="mb-10">
          <h2 className="text-vermelho mb-4 text-3xl sm:text-4xl font-semibold">Sugestão de Presentes</h2>
          <GiftList />
        </section>

        {/* Flor decorativa no final */}
        <div className="flex justify-center mt-10 mb-6 select-none pointer-events-none">
          <img
            src="/flor.png"
            alt="Decoração floral com tulipas"
            className="w-[150px] h-auto rotate-180"
          />
        </div>

        {/* Rodapé */}
        <footer className="text-center text-gray-700 text-sm sm:text-base mb-6">
          Com carinho, aguardamos você no nosso grande dia! 💍
        </footer>
      </div>
    </div>
  );
}
