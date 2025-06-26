import React from "react";

export default function GiftList() {
  return (
    <div className="border border-terracota p-6 rounded-md">
      <h2 className="text-3xl font-semibold mb-4">🎁 Sugestão de Presentes</h2>
      <p>Você pode acessar nossa lista online clicando no link abaixo:</p>
      <a
        href="https://wedy.com/lista"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-terracota text-red-700 px-6 py-3 rounded-md mt-4 hover:bg-terracota-dark hover:text-red-900 transition"
      >
        Ver Lista de Presentes
      </a>

      {/* Quando tiver o novo link, pode descomentar e colocar aqui: */}
      {/* 
      <p className="mt-6">Ou confira também essa outra sugestão:</p>
      <a
        href="https://novo-link-aqui.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-terracota text-red-700 px-6 py-3 rounded-md mt-2 hover:bg-terracota-dark hover:text-red-900 transition"
      >
        Novo Link de Presentes
      </a> 
      */}
    </div>
  );
}
