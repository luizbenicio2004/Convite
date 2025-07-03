import React, { useRef } from "react";

export default function Location() {
  const locationRef = useRef(null);

  return (
    <div
      ref={locationRef}
      className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl border border-red-300 p-10 animate-fadeSlideUp"
    >
      <h2 className="text-4xl font-serif font-extrabold text-vermelho mb-8 text-center select-none">
        📍 Local da Cerimônia e Festa
      </h2>

      <p className="text-center font-semibold text-xl mb-1 text-red-800 tracking-wide">
        Foto Fest
      </p>
      <p className="text-center text-gray-800 mb-6 text-lg max-w-md mx-auto leading-relaxed">
        Rua Tereza, 489, Calmon Viana - Poá, SP
      </p>

      <p className="text-center text-sm text-vermelho font-semibold mb-8 select-none">
        (Não haverá bebida alcoólica.)
      </p>

      <div className="flex justify-center mb-8">
        <a
          href="https://www.google.com/maps/place/Foto+Fest+-+Rua+Tereza,+489,+Calmon+Viana,+Poá+-+SP"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-vermelho text-white font-semibold px-8 py-3 rounded-full shadow-lg
            hover:bg-vermelho-dark transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-vermelho/60"
          aria-label="Abrir local no Google Maps"
          title="Abrir no Google Maps"
        >
          Ver no Google Maps
        </a>
      </div>

      <div className="overflow-hidden rounded-3xl shadow-2xl aspect-video border border-red-300">
        <iframe
          title="Mapa da Cerimônia"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.130000000000!2d-46.40980000000001!3d-23.525400000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf90d43ef6a8df%3A0x70b123456789abcd!2sFoto%20Fest!5e0!3m2!1spt-BR!2sbr!4v1697815123456!5m2!1spt-BR!2sbr"
          className="w-full h-full border-0 rounded-3xl"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
