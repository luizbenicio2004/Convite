import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { CheckCircle2, AlertTriangle, Send } from "lucide-react";

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
      setStatus({
        error: true,
        message: "Por favor, preencha seu nome e selecione se vai comparecer.",
      });
      return;
    }

    if (quantidadeAcompanhantes < 0) {
      setStatus({
        error: true,
        message: "Quantidade de acompanhantes não pode ser negativa.",
      });
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
      setStatus({
        error: true,
        message: "Erro ao enviar, tente novamente mais tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl border border-[#f7c6ce] p-10 animate-fadeSlideUp">
      <h2 className="text-3xl font-serif font-bold text-[#C0392B] mb-8 text-center select-none">
        Confirmação de Presença
      </h2>

      <div className="flex items-center gap-3 bg-red-50 border border-red-300 text-red-700 p-4 rounded-lg text-sm mb-8 select-none">
        <AlertTriangle className="w-6 h-6 flex-shrink-0 text-red-500" />
        <p>
          Por favor, confirme agora a sua presença.{" "}
          <span className="font-semibold"></span>
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 max-w-md mx-auto"
        noValidate
      >
        {/* Nome */}
        <label className="block">
          <span className="block mb-1 font-medium text-gray-900">
            Seu nome completo:
          </span>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome completo"
            disabled={isSubmitting}
            className={`w-full p-3 border rounded-md bg-transparent text-gray-900 placeholder-gray-400 transition
              focus:outline-none focus:ring-2 focus:ring-[#C0392B] focus:ring-offset-1
              ${
                status?.error && !nome.trim()
                  ? "border-red-400"
                  : "border-gray-300"
              }`}
            required
            aria-invalid={status?.error && !nome.trim()}
            aria-describedby="nome-error"
          />
          {status?.error && !nome.trim() && (
            <p
              id="nome-error"
              className="text-sm text-red-500 mt-1 select-none"
              role="alert"
            >
              Campo obrigatório
            </p>
          )}
        </label>

        {/* Presença (estilizada com botões) */}
        <div className="block">
          <span className="block mb-2 font-medium text-gray-900">
            Vai comparecer?
          </span>

          <div className="flex gap-4 mb-3">
            <button
              type="button"
              onClick={() => setPresenca("Sim")}
              disabled={isSubmitting}
              className={`flex-1 py-2 px-4 rounded-lg text-center font-semibold border transition-all duration-300
                ${
                  presenca === "Sim"
                    ? "bg-[#C0392B] text-white border-[#C0392B] shadow-md"
                    : "bg-white text-[#C0392B] border-[#C0392B] hover:bg-[#fcebea]"
                }`}
            >
              Sim
            </button>
            <button
              type="button"
              onClick={() => setPresenca("Não")}
              disabled={isSubmitting}
              className={`flex-1 py-2 px-4 rounded-lg text-center font-semibold border transition-all duration-300
                ${
                  presenca === "Não"
                    ? "bg-yellow-500 text-white border-yellow-500 shadow-md"
                    : "bg-white text-yellow-700 border-yellow-500 hover:bg-yellow-50"
                }`}
            >
              Não
            </button>
          </div>

          {/* Mensagem interativa */}
          {presenca === "Sim" && (
            <div className="flex items-center gap-2 text-green-700 text-sm font-medium bg-green-50 border border-green-200 rounded-md p-2">
              <CheckCircle2 className="w-4 h-4" />
              Que alegria! Estamos felizes com sua presença 💖
            </div>
          )}
          {presenca === "Não" && (
            <div className="flex items-center gap-2 text-yellow-800 text-sm font-medium bg-yellow-50 border border-yellow-200 rounded-md p-2">
              <AlertTriangle className="w-4 h-4" />
              Que pena! Sentiremos sua falta 😢
            </div>
          )}
        </div>

        {/* Acompanhantes */}
        <label className="block">
          <span className="block mb-1 font-medium text-gray-900">
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
            placeholder={
              presenca !== "Sim" ? "Selecione 'Sim' acima para informar" : "0"
            }
            className={`w-full p-3 border rounded-md bg-transparent text-gray-900 placeholder-gray-400 transition focus:outline-none focus:ring-2 focus:ring-[#C0392B] focus:ring-offset-1
              ${
                presenca !== "Sim"
                  ? "border-gray-200 text-gray-400 cursor-not-allowed"
                  : "border-gray-300"
              }`}
            aria-disabled={presenca !== "Sim" || isSubmitting}
          />
        </label>

        {/* Nomes dos acompanhantes */}
        <label className="block">
          <span className="block mb-1 font-medium text-gray-900">
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
            rows={3}
            className={`w-full p-3 border rounded-md bg-transparent text-gray-900 placeholder-gray-400 transition resize-y focus:outline-none focus:ring-2 focus:ring-[#C0392B] focus:ring-offset-1
              ${
                presenca !== "Sim"
                  ? "border-gray-200 text-gray-400 cursor-not-allowed"
                  : "border-gray-300"
              }`}
            aria-disabled={presenca !== "Sim" || isSubmitting}
          />
        </label>

        <hr className="my-4 border-t border-[#f7c6ce]" />

        {/* Botão de envio */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-gradient-to-r from-[#C0392B] to-[#992d24] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-transform duration-300 flex items-center justify-center gap-2
            ${
              isSubmitting
                ? "opacity-60 cursor-not-allowed"
                : "hover:from-[#992d24] hover:to-[#7f231a] hover:shadow-lg hover:scale-105 active:scale-95"
            }`}
          aria-live="polite"
        >
          {isSubmitting ? (
            "Enviando..."
          ) : (
            <>
              <Send className="w-5 h-5" />
              Enviar
            </>
          )}
        </button>
      </form>

      {/* Mensagem final */}
      {status && (
        <p
          className={`mt-8 max-w-md mx-auto flex items-center justify-center gap-2 font-semibold text-lg animate-fadeIn select-none
            ${status.error ? "text-red-600" : "text-green-600"}`}
          role="alert"
          aria-live="assertive"
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
