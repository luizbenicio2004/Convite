import React, { useRef, useState, useEffect } from "react";
import RSVP from "./components/RSVP";
import Location from "./components/Location";
import GiftList from "./components/GiftList";
import { Gift, MapPin, Heart, CalendarDays, Menu, X } from "lucide-react";

function CountdownFriendly() {
  // ...mesmo código do CountdownFriendly
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
    <div className="countdown-inline mt-2 max-w-[380px] mx-auto text-white font-semibold select-none">
      ⌛️{" "}
      {timeLeft.days === 0 &&
      timeLeft.hours === 0 &&
      timeLeft.minutes === 0 &&
      timeLeft.seconds === 0 ? (
        <span>O grande dia chegou! 🎉</span>
      ) : (
        <span>
          Faltam <strong>{timeLeft.days} dias</strong>,{" "}
          <strong>{timeLeft.hours} horas</strong>,{" "}
          <strong>{timeLeft.minutes} minutos</strong> e{" "}
          <strong>{timeLeft.seconds} segundos</strong> para o nosso grande dia!
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
  const [zoomed, setZoomed] = useState(false);

  // Estado para controlar menu aberto no mobile
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleZoom = () => {
    setZoomed(!zoomed);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Fecha menu ao clicar em item de navegação
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (navRef.current) setNavHeight(navRef.current.offsetHeight);
    const handleResize = () => {
      if (navRef.current) setNavHeight(navRef.current.offsetHeight);
      if (window.innerWidth >= 768) {
        setMenuOpen(false); // fecha menu ao aumentar tela pra desktop
      }
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

  const navItems = [
    { id: "rsvp", icon: Heart, label: "Confirmação" },
    { id: "local", icon: MapPin, label: "Local" },
    { id: "presentes", icon: Gift, label: "Presentes" },
  ];

  return (
    <div className="min-h-screen bg-white flex justify-center items-start py-10 px-4">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#f7c6ce] overflow-x-hidden">

        {/* Navegação */}
        <nav
          ref={navRef}
          className="fixed top-0 left-0 right-0 z-50 bg-[#C0392B] text-white py-3 px-4 sm:px-8 shadow-lg border-b border-[#f7c6ce] flex items-center justify-between"
        >
          {/* Logo ou título - opcional */}
          <div className="font-semibold text-lg select-none">Nosso Casamento</div>

          {/* Botão hamburguer só no mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2 rounded-md hover:bg-[#992d24] focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Abrir menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Menu desktop e mobile */}
          <div
            className={`flex-col md:flex-row md:flex items-center gap-6 absolute md:static top-full left-0 w-full md:w-auto bg-[#C0392B] md:bg-transparent transition-transform duration-300 md:transition-none
              ${
                menuOpen ? "translate-y-0 opacity-100" : "opacity-0 -translate-y-10 pointer-events-none md:pointer-events-auto"
              }
              md:opacity-100 md:translate-y-0
            `}
          >
            {navItems.map(({ id, icon: Icon, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={handleNavClick}
                className="flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer text-white md:text-white select-none"
              >
                <Icon className="w-5 h-5" />
                {label}
              </a>
            ))}

            {/* Countdown sempre visível */}
            <div className="mt-4 md:mt-0 md:ml-6">
              <CountdownFriendly />
            </div>
          </div>
        </nav>

        {/* Conteúdo */}
        <main style={{ paddingTop: `${navHeight + 24}px` }} className="px-8 py-20">
          {/* Resto do conteúdo igual */}
          <div className="flex justify-center mb-16">
            <img
              src="/flores.jpeg"
              alt="Flores"
              className="w-40 h-auto rounded-xl drop-shadow-lg"
              style={{ filter: "none" }} // remove tom escuro das flores
            />
          </div>

          <header className="text-center mb-20 animate-fadeSlideUp">
            <h1 className="font-serif text-6xl text-[#C0392B] mb-6">Gabriela Maria & Luiz Benicio</h1>
            <p className="text-xl text-black mb-3 font-semibold">
              28 de Setembro de 2025
            </p>
            <p className="text-lg text-black mb-10 font-medium">
              Cerimônia e Celebração às 17h
            </p>

            {/* Botão Calendário logo abaixo do horário */}
            <div className="mb-10">
              <a
                href={calendarLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C0392B] text-white px-5 py-2 rounded-full shadow-lg hover:bg-[#992d24] transition hover:scale-105"
              >
                <CalendarDays className="w-5 h-5" /> Salvar no calendário
              </a>
            </div>

            <blockquote className="italic text-black text-2xl max-w-xl mx-auto mb-14 font-semibold">
              "Quanto ao nosso acordo, o SENHOR é testemunha entre mim e você para sempre"
            </blockquote>

            <img
              src="/foto.jpeg"
              alt="Casal"
              className={`mx-auto w-52 h-52 rounded-full shadow-xl border-8 border-[#C0392B] object-cover cursor-pointer transition-transform duration-300 ${
                zoomed ? "scale-125 z-50 relative" : "scale-100"
              }`}
              onClick={toggleZoom}
              title="Clique para ampliar"
            />

            <p className="text-lg italic text-gray-600 max-w-2xl mx-auto mt-10 leading-relaxed">
              Teremos a alegria de receber a bênção dos nossos amados pastores, Eliseu Silvério e Shirley Silvério, que estarão conosco nesse dia tão especial para celebrar o amor e a fidelidade de Deus.
            </p>
          </header>

          <section id="rsvp" className="mb-28 animate-fadeSlideUp delay-200">
            <RSVP />
          </section>

          <section id="presentes" className="mb-28 animate-fadeSlideUp delay-400">
            <GiftList />
          </section>

          <section id="local" className="mb-28 animate-fadeSlideUp delay-600">
            <Location />
          </section>

          <div className="flex justify-center mt-24 mb-14">
            <img
              src="/flores.jpeg"
              alt="Flores rodapé"
              className="w-40 h-auto rounded-xl drop-shadow-lg rotate-180"
              style={{ filter: "none" }} // remove tom escuro do rodapé também
            />
          </div>

          <footer className="text-gray-600 text-xl mb-12 font-semibold text-center">
            Com carinho, aguardamos você no nosso grande dia! 💍
          </footer>
        </main>

        {/* Botão voltar ao topo */}
        {showTopBtn && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 bg-[#C0392B] text-white p-4 rounded-full shadow-xl hover:bg-[#992d24] transition transform hover:scale-110 active:scale-95"
            aria-label="Voltar ao topo"
            title="Voltar ao topo"
          >
            ↑
          </button>
        )}
      </div>
    </div>
  );
}
