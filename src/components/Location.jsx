import React, { useRef } from "react";

export default function Location() {
  const locationRef = useRef(null);

  return (
    <div
      ref={locationRef}
      className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl border border-[#f7c6ce] p-10 animate-fadeSlideUp"
    >
      <h2 className="text-3xl sm:text-4xl font-serif font-bold text-vermelho mb-8 text-center select-none">
        📍 Local da Cerimônia e Festa
      </h2>

      <p className="text-center font-semibold text-xl text-red-800 mb-1 tracking-wide">
        Foto Fest
      </p>
      <p className="text-center text-gray-700 mb-6 text-lg max-w-md mx-auto leading-relaxed">
        Rua Tereza, 489, Calmon Viana - Poá, SP
      </p>

      <p className="text-center text-sm font-semibold text-vermelho mb-8 select-none">
        (Não haverá bebida alcoólica.)
      </p>

      <div className="flex justify-center mb-8">
        <a
          href="https://www.google.com/maps?q=-23.53224,-46.33642"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-vermelho text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#992d24] transition transform hover:scale-105"
          aria-label="Abrir local no Google Maps"
          title="Abrir no Google Maps"
        >
          📍 Ver no Google Maps
        </a>
      </div>

      <div className="overflow-hidden rounded-3xl shadow-3xl aspect-video border border-[#f7c6ce] ring-1 ring-[#f7c6ce]/60">
        <iframe
          title="Mapa da Cerimônia"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.007302011073!2d-46.33641992544758!3d-23.53223977881983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce7aee28892807%3A0x2ba9241f5764477f!2sRua%20Tereza%2C%20489%20-%20Calmon%20Viana%2C%20Po%C3%A1%20-%20SP%2C%2008560-200!5e0!3m2!1spt-BR!2sbr!4v1751600046427!5m2!1spt-BR!2sbr"
          className="w-full h-full border-0 rounded-3xl"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <p className="text-center text-sm mt-4 text-gray-500 select-none">
        Clique no mapa para abrir a localização completa
      </p>
    </div>
  );
}
