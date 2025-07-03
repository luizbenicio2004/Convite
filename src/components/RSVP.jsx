import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { CheckCircle2, AlertTriangle } from "lucide-react";

export default function RSVP() {
  const [nome, setNome] = useState("");
  const [presenca, setPresenca] = useState("");
  const [quantidadeAcompanhantes, setQuantidadeAcompanhantes] = useState(0);
  const [nomesAcompanhantes, setNomesAcompanhantes] = useState("");
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!nome.trim() || !presenca) {
      setStatus({ error: true, message: "Por favor, preencha seu nome e selecione se vai comparecer." });
      return;
    }

    if (quantidadeAcompanhantes < 0) {
      setStatus({ error: true, message: "Quantidade de acompanhantes não pode ser negativa." });
      return;
    }

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "rsvp"), {
        nome: nome.trim(),
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
      setStatus({ error: true, message: "Erro ao enviar, tente novamente mais tarde." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl border border-[#f7c6ce] p-10 animate-fadeSlideUp">
      <h2 className="text-3xl font-serif font-bold text-[#C0392B] mb-8 text-center">
        Confirmação de Presença
      </h2>

      <div className="flex items-center gap-3 bg-red-50 border border-red-300 text-red-700 p-4 rounded-lg text-sm mb-8">
        <AlertTriangle className="w-6 h-6 flex-shrink-0 text-red-500" />
        <p>
          Por favor, confirme sua presença até o dia{" "}
          <span className="font-semibold">10 de setembro</span>.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-md mx-auto">
        <label className="block">
          <span className="block mb-1 font-medium">Seu nome completo:</span>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome completo"
            disabled={isSubmitting}
            className="w-full p-3 border border-gray-300 rounded-md bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C0392B] transition"
            required
          />
        </label>

        <label className="block">
          <span className="block mb-1 font-medium">Vai comparecer?</span>
          <select
            value={presenca}
            onChange={(e) => setPresenca(e.target.value)}
            disabled={isSubmitting}
            className="w-full p-3 border border-gray-300 rounded-md bg-transparent text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C0392B] transition"
            required
          >
            <option value="" disabled>
              -- Selecione --
            </option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </label>

        <label className="block">
          <span className="block mb-1 font-medium">
            Quantidade de acompanhantes (além de você):
          </span>
          <input
            type="number"
            min="0"
            value={quantidadeAcompanhantes}
            onChange={(e) => {
              const val = e.target.value;
              if (val === "") setQuantidadeAcompanhantes(0);
              else if (/^\d+$/.test(val)) setQuantidadeAcompanhantes(Number(val));
            }}
            disabled={presenca !== "Sim" || isSubmitting}
            placeholder={presenca !== "Sim" ? "Selecione 'Sim' acima para informar" : "0"}
            className={`w-full p-3 border rounded-md bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C0392B] transition ${
              presenca !== "Sim" ? "border-gray-200 text-gray-400 cursor-not-allowed" : "border-gray-300"
            }`}
          />
        </label>

        <label className="block">
          <span className="block mb-1 font-medium">
            Nome dos acompanhantes (se quiser informar):
          </span>
          <textarea
            value={nomesAcompanhantes}
            onChange={(e) => setNomesAcompanhantes(e.target.value)}
            placeholder={
              presenca !== "Sim"
                ? "Só informe se for comparecer"
                : "Digite os nomes separados por vírgula ou linha"
            }
            disabled={presenca !== "Sim" || isSubmitting}
            className={`w-full p-3 border rounded-md bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C0392B] transition resize-y ${
              presenca !== "Sim" ? "border-gray-200 text-gray-400 cursor-not-allowed" : "border-gray-300"
            }`}
            rows={3}
          />
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-[#C0392B] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ${
            isSubmitting ? "opacity-60 cursor-not-allowed" : "hover:bg-[#992d24]"
          }`}
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {status && (
        <p
          className={`mt-8 max-w-md mx-auto flex items-center justify-center gap-2 font-semibold text-lg ${
            status.error ? "text-red-600" : "text-green-600"
          }`}
          role="alert"
        >
          {status.error ? (
            <AlertTriangle className="w-6 h-6" />
          ) : (
            <CheckCircle2 className="w-6 h-6" />
          )}
          {status.message}
        </p>
      )}
    </div>
  );
}
