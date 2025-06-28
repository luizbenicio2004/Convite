import React from "react";

export default function GiftList() {
  return (
    <div className="border border-terracota p-6 rounded-md">
      <p>Você pode acessar nossa lista online clicando no link abaixo:</p>
      <a
        href="https://www.finalfeliz.de/luiz-benicio-gabriela-maria"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-terracota text-red-700 px-6 py-3 rounded-md mt-4 hover:bg-terracota-dark hover:text-red-900 transition"
      >
        Ver Lista de Presentes
      </a>
    </div>
  );
}
