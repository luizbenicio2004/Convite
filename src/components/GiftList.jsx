import React from "react";

export default function GiftList() {
  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-10 border border-red-300 text-gray-900 text-center">
      <h2 className="text-4xl font-serif font-extrabold text-vermelho mb-8 tracking-wide drop-shadow-sm">
        Sugestão de Presentes
      </h2>
      <p className="mb-8 text-justify text-gray-700 max-w-prose mx-auto leading-relaxed tracking-wide">
        Sua presença é o que mais valorizamos. Mas, para quem desejar presentear, preparamos nossa lista com carinho.
        Você pode acessar pelo botão abaixo:
      </p>
      <a
        href="https://www.finalfeliz.de/luiz-benicio-gabriela-maria"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir lista de presentes em nova aba"
        className="inline-block bg-vermelho text-white px-10 py-4 rounded-3xl font-semibold text-lg shadow-lg
          transition duration-300 ease-in-out hover:bg-vermelho-dark focus:outline-none focus:ring-4 focus:ring-vermelho/60
          active:scale-95 transform"
        title="Ver Lista de Presentes"
      >
        Ver Lista de Presentes
      </a>
      <div className="mt-12">
        <img
          src="/caixinha.jpeg"
          alt="Caixa de Presente"
          className="mx-auto w-32 sm:w-40 rounded-xl object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
    </div>
  );
}
