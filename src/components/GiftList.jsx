import React from "react";

export default function GiftList() {
  return (
    <div className="border border-red-700 p-6 rounded-md">
      <h2>Sugestão de Presentes</h2>
      <p className="mb-4 text-justify text-black">
        Sua presença é o que mais valorizamos. Para quem desejar presentear, nossa lista está disponível no link abaixo.
      </p>
      <a
        href="https://www.finalfeliz.de/luiz-benicio-gabriela-maria"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-terracota text-red-700 px-6 py-3 rounded-md hover:bg-terracota-dark hover:text-red-900 transition"
      >
        Ver Lista de Presentes
      </a>
      <div className="mt-6">
        <img
          src="/caixinha.jpeg"
          alt="Caixa de Presente"
          className="mx-auto w-24 h-auto"
        />
      </div>
    </div>
  );
}
