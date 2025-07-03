import React from "react";
import { Gift } from "lucide-react";

export default function GiftList() {
  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-10 border border-[#f7c6ce] text-gray-900 text-center animate-fadeSlideUp">
      <h2 className="text-3xl sm:text-4xl font-serif font-bold text-vermelho mb-8 tracking-wide drop-shadow-sm">
        Sugestão de Presentes
      </h2>

      <p className="mb-8 text-center sm:text-justify text-gray-700 max-w-prose mx-auto leading-relaxed tracking-wide">
        Sua presença é o que mais valorizamos. Mas, para quem desejar presentear, preparamos nossa lista com carinho.
        Você pode acessar pelo botão abaixo:
      </p>

      <a
        href="https://www.finalfeliz.de/luiz-benicio-gabriela-maria"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir lista de presentes em nova aba"
        title="Ver Lista de Presentes"
        className="inline-flex items-center gap-2 bg-vermelho text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition duration-300 hover:bg-[#992d24] hover:scale-105 focus:outline-none focus:ring-4 focus:ring-vermelho/40"
      >
        <Gift className="w-5 h-5" />
        Ver Lista de Presentes
      </a>

      <div className="mt-12">
        <img
          src="/caixinha.jpeg"
          alt="Caixa de Presente"
          className="mx-auto w-32 sm:w-40 rounded-xl object-cover ring-[#f7c6ce] transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
    </div>
  );
}
