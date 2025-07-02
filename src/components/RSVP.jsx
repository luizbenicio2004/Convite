import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function RSVP() {
  const [nome, setNome] = useState("");
  const [presenca, setPresenca] = useState("");
  const [quantidadeAcompanhantes, setQuantidadeAcompanhantes] = useState(0);
  const [nomesAcompanhantes, setNomesAcompanhantes] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nome || !presenca) {
      setStatus({ error: true, message: "Por favor, preencha seu nome e a presença." });
      return;
    }

    try {
      await addDoc(collection(db, "rsvp"), {
        nome,
        presenca,
        quantidadeAcompanhantes: Number(quantidadeAcompanhantes),
        nomesAcompanhantes: nomesAcompanhantes.trim(),
        timestamp: new Date(),
      });
      setStatus({ error: false, message: "Obrigado pela confirmação!" });
      setNome("");
      setPresenca("");
      setQuantidadeAcompanhantes(0);
      setNomesAcompanhantes("");
    } catch (error) {
      console.error("Erro ao enviar RSVP:", error);
      setStatus({ error: true, message: "Erro ao enviar, tente novamente." });
    }
  };

  return (
    <div className="bg-white text-gray-800 border border-red-600 p-8 rounded-2xl shadow-sm max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-red-700 mb-2">Confirmação de Presença</h2>

      {/* AVISO IMPORTANTE */}
      <div className="flex items-start gap-2 bg-red-50 border border-red-300 text-red-700 p-3 rounded-lg text-sm mb-5">
        <svg
          className="w-5 h-5 mt-0.5 text-red-500 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0Z"
          />
        </svg>
        <p>
          Por favor, confirme sua presença até o dia{" "}
          <span className="font-medium">10 de setembro</span>.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
        <label>
          Seu nome completo:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full border border-red-600 rounded px-3 py-2 mt-1"
            required
          />
        </label>

        <label>
          Vai comparecer?
          <select
            value={presenca}
            onChange={(e) => setPresenca(e.target.value)}
            className="w-full border border-red-600 rounded px-3 py-2 mt-1"
            required
          >
            <option value="">-- Selecione --</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </label>

        <label>
          Quantidade de acompanhantes (além de você):
          <input
            type="number"
            min="0"
            value={quantidadeAcompanhantes}
            onChange={(e) => setQuantidadeAcompanhantes(e.target.value)}
            className="w-full border border-red-600 rounded px-3 py-2 mt-1"
          />
        </label>

        <label>
          Nome dos acompanhantes (se quiser informar):
          <textarea
            value={nomesAcompanhantes}
            onChange={(e) => setNomesAcompanhantes(e.target.value)}
            className="w-full border border-red-600 rounded px-3 py-2 mt-1"
            placeholder="Digite os nomes separados por vírgula ou linha"
          />
        </label>

        <button
          type="submit"
          className="bg-red-600 text-white py-3 rounded hover:bg-red-700 transition"
        >
          Enviar
        </button>
      </form>

      {status && (
        <p
          className={`mt-4 font-semibold ${
            status.error ? "text-red-600" : "text-green-600"
          }`}
        >
          {status.message}
        </p>
      )}
    </div>
  );
}
