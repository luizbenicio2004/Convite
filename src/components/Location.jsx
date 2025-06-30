import React, { useEffect, useRef } from "react";

export default function Location() {
  const locationRef = useRef(null);

  useEffect(() => {
    if (locationRef.current) {
      locationRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div
      ref={locationRef}
      className="border border-red-700 p-6 rounded-md max-w-full md:max-w-xl mx-auto"
    >
      <h2 className="text-3xl font-semibold mb-4 text-terracota text-center">
        📍 Local da Cerimônia e Festa
      </h2>
      <p className="text-center font-medium mb-1">Foto Fest</p>
      <p className="text-center mb-4">
        Rua Tereza, 489, Calmon Viana - Poá, SP
      </p>
      <p className="text-center text-sm text-vermelho font-medium my-6">
        (Não haverá bebida alcoólica.)
      </p>
      <a
        href="https://www.google.com/maps/place/Foto+Fest+-+Rua+Tereza,+489,+Calmon+Viana,+Po%C3%A1+-+SP"
        target="_blank"
        rel="noopener noreferrer"
        className="text-terracota underline block text-center mb-6 hover:text-terracota/80 transition"
      >
        Ver no Google Maps
      </a>
      <div className="overflow-hidden rounded-md shadow-md aspect-video mb-4">
        <iframe
          title="Mapa da Cerimônia"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.130000000000!2d-46.40980000000001!3d-23.525400000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf90d43ef6a8df%3A0x70b123456789abcd!2sFoto%20Fest!5e0!3m2!1spt-BR!2sbr!4v1697815123456!5m2!1spt-BR!2sbr"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

    </div>
  );
}
