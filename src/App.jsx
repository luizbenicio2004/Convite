import React, { useRef, useState, useEffect } from "react";
import RSVP from "./components/RSVP";
import Location from "./components/Location";
import GiftList from "./components/GiftList";
import { Gift, MapPin, Heart, CalendarDays } from "lucide-react";

function CountdownFriendly() {
  const weddingDate = new Date("2025-09-28T17:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = weddingDate - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const totalSeconds = Math.floor(diff / 1000);

    return {
      days: Math.floor(totalSeconds / 86400),
      hours: Math.floor((totalSeconds % 86400) / 3600),
      minutes: Math.floor((totalSeconds % 3600) / 60),
      seconds: totalSeconds % 60,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-vermelho text-white px-4 py-1 select-none text-center font-semibold text-sm sm:text-base leading-tight tracking-wide max-w-full max-w-[380px] mx-auto mt-2 flex items-center justify-center gap-2 rounded-md shadow-md">
      <span role="img" aria-label="Relógio de areia" className="text-lg sm:text-xl animate-pulse">
        ⌛️
      </span>
      {timeLeft.days === 0 &&
      timeLeft.hours === 0 &&
      timeLeft.minutes === 0 &&
      timeLeft.seconds === 0 ? (
        <span>O grande dia chegou! 🎉</span>
      ) : (
        <span>
          Faltam{" "}
          <strong>{timeLeft.days} {timeLeft.days === 1 ? "dia" : "dias"}</strong>,{" "}
          <strong>{timeLeft.hours} {timeLeft.hours === 1 ? "hora" : "horas"}</strong>,{" "}
          <strong>{timeLeft.minutes} {timeLeft.minutes === 1 ? "minuto" : "minutos"}</strong> e{" "}
          <strong>{timeLeft.seconds} {timeLeft.seconds === 1 ? "segundo" : "segundos"}</strong> para o nosso grande dia!
        </span>
      )}
    </div>
  );
}

export default function App() {
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);
  const [activeSection, setActiveSection] = useState("rsvp");
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    if (navRef.current) setNavHeight(navRef.current.offsetHeight);
    const handleResize = () => {
      if (navRef.current) setNavHeight(navRef.current.offsetHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const sections = ["rsvp", "local", "presentes"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + (navHeight + 20);
      let current = "rsvp";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }
      setActiveSection(current);
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navHeight]);

  const calendarLink = encodeURI(
    `https://www.addevent.com/event/?start=2025-09-28T17:00:00&end=2025-09-28T21:00:00&title=Casamento%20Gabriela%20Maria%20e%20Luiz%20Benicio&description=Venha%20celebrar%20conosco!&location=Rua%20Tereza,%20489,%20Calmon%20Viana%20-%20Poá,%20SP&organizer=Gabriela%20e%20Luiz`
  );

  return (
    <div className="relative min-h-screen font-sans bg-gradient-to-br from-red-700 via-terracota to-red-900 text-gray-100 overflow-x-hidden">
      {/* Navegação fixa */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 bg-red-900 bg-opacity-90 backdrop-blur-md py-3 px-8 flex justify-center gap-10 text-base font-semibold shadow-lg border-b border-red-800"
      >
        {[ 
          { id: "rsvp", icon: Heart, label: "Confirmação" },
          { id: "local", icon: MapPin, label: "Local" },
          { id: "presentes", icon: Gift, label: "Presentes" },
        ].map(({ id, icon: Icon, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition duration-300 ${
              activeSection === id
                ? "bg-vermelho text-white shadow-lg"
                : "text-gray-300 hover:bg-red-800 hover:text-white"
            }`}
          >
            <Icon className="w-5 h-5" />
            {label}
          </a>
        ))}
        <CountdownFriendly />
      </nav>

      {/* Conteúdo principal */}
      <main
        style={{ paddingTop: `${navHeight + 24}px` }}
        className="max-w-4xl mx-auto px-8 py-20 bg-white bg-opacity-90 rounded-3xl shadow-2xl border border-red-800"
      >
        {/* Flor topo */}
        <div className="flex justify-center mb-16 select-none pointer-events-none opacity-90">
          <img
            src="/flores.jpeg"
            alt="Decoração floral com tulipas"
            className="w-40 h-auto rounded-xl drop-shadow-lg"
          />
        </div>

        {/* Cabeçalho */}
        <header className="text-center mb-20 animate-fadeSlideUp">
          <h1 className="font-serif text-6xl text-red-900 mb-6 tracking-wide drop-shadow-md">
            Gabriela Maria & Luiz Benicio
          </h1>
          <p className="text-xl sm:text-2xl text-red-800 mb-3 flex justify-center items-center gap-5 font-semibold">
            28 de Setembro de 2025
            <a
              href={calendarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-vermelho text-white px-5 py-2 rounded-full shadow-lg hover:bg-vermelho-dark transition transform hover:scale-105"
              title="Adicionar ao calendário"
            >
              <CalendarDays className="w-6 h-6" /> Salvar no calendário
            </a>
          </p>
          <p className="text-lg text-red-700 mb-10 font-medium">
            Cerimônia e Celebração às 17h
          </p>
          <blockquote className="italic text-vermelho text-3xl max-w-xl mx-auto mb-14 font-semibold tracking-wide drop-shadow-sm">
            "Quanto ao nosso acordo, o SENHOR é testemunha entre mim e você para sempre"
          </blockquote>
          <img
            src="/foto.jpeg"
            alt="Luiz Benicio e Gabriela Maria"
            className="mx-auto w-52 h-52 rounded-full shadow-2xl object-cover mb-10 border-8 border-vermelho transition-transform duration-300 hover:scale-105"
          />
          <p className="text-lg italic text-red-800 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow">
            Teremos a alegria de receber a bênção dos nossos amados pastores, Eliseu Silvério e Shirley Silvério, que estarão conosco nesse dia tão especial para celebrar o amor e a fidelidade de Deus.
          </p>
        </header>

        {/* Seções */}
        <section id="rsvp" className="mb-28 animate-fadeSlideUp delay-200">
          <RSVP />
        </section>

        <section id="presentes" className="mb-28 animate-fadeSlideUp delay-400">
          <GiftList />
        </section>

        <section id="local" className="mb-28 animate-fadeSlideUp delay-600">
          <Location />
        </section>

        {/* Flor rodapé */}
        <div className="flex justify-center mt-24 mb-14 select-none pointer-events-none opacity-90">
          <img
            src="/flores.jpeg"
            alt="Decoração floral com tulipas"
            className="w-40 h-auto rounded-xl drop-shadow-lg rotate-180"
          />
        </div>

        {/* Rodapé */}
        <footer className="text-center text-red-800 text-xl mb-12 font-semibold drop-shadow">
          Com carinho, aguardamos você no nosso grande dia! 💍
        </footer>
      </main>

      {/* Botão voltar ao topo */}
      {showTopBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-vermelho text-white p-4 rounded-full shadow-xl hover:bg-vermelho-dark transition transform hover:scale-110 active:scale-95"
          aria-label="Voltar ao topo"
          title="Voltar ao topo"
        >
          ↑
        </button>
      )}
    </div>
  );
}
