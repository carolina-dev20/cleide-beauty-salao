
"use client";

import Image from "next/image";
import { useState } from "react";
import FadeIn from "./components/FadeIn";

import AgendamentoForm from "./components/AgendamentoForm";


/* LINKS */

const whatsappUrl =
  "https://wa.me/5511937367090?text=Ol%C3%A1%21%20Encontrei%20o%20Cleide%20Beauty%20Sal%C3%A3o%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.";

const instagramUrl =
  "https://www.instagram.com/cleidebeautysalao/";

const mapsUrl =
  "https://maps.app.goo.gl/7xAtNkbc5DRCaQs3A";

  


/* SERVIÇOS */

const servicos = [
  {
    numero: "01",
    titulo: "Cabelo",
    descricao:
      "Cortes, escova e finalizações para valorizar seu cabelo e seu estilo.",
  },
  {
    numero: "02",
    titulo: "Penteados",
    descricao:
      "Penteados para festas, eventos e ocasiões especiais.",
  },
  {
    numero: "03",
    titulo: "Design de sobrancelhas",
    descricao:
      "Design personalizado para harmonizar e valorizar seus traços.",
  },
  {
    numero: "04",
    titulo: "Tratamentos capilares",
    descricao:
      "Tratamentos para recuperar a força, o brilho e a saúde dos fios.",
  },
];

/* RESULTADOS */

const resultados = [
  {
    numero: "01",
    titulo: "Mechas e finalização",
    imagem: "/resultado-mechas.png",
    alt: "Mechas e finalização no Cleide Beauty Salão em Guarulhos",
  },
  {
    numero: "02",
    titulo: "Loiro iluminado",
    imagem: "/resultado-loiro.png",
    alt: "Loiro iluminado realizado no Cleide Beauty Salão",
  },
  {
    numero: "03",
    titulo: "Coloração",
    imagem: "/resultado-coloracao.png",
    alt: "Coloração capilar realizada no Cleide Beauty Salão",
  },
  {
    numero: "04",
    titulo: "Penteados",
    imagem: "/resultado-penteado.png",
    alt: "Penteado elaborado com coque e mechas iluminadas no Cleide Beauty Salão",
  },
];

/* ÍCONES SVG */

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.45L3 20.5l1.55-5.25A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="M8.5 8.5c.5 3.5 3 6 6.5 6.5" />
    </svg>
  );
}

function MapPinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function MenuIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

/* PÁGINA PRINCIPAL */

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <main
      id="inicio"
      className="min-h-screen overflow-x-hidden bg-[#F3ECE4] text-[#1C1C1C]"
    >
      {/* HEADER */}

      <header className="relative z-50 flex items-center justify-between bg-[#F3ECE4] px-6 py-6 md:px-16 md:py-7 lg:px-24">
        <a href="#inicio" aria-label="Cleide Beauty Salão - Início">
          <p className="text-xl font-semibold tracking-[0.25em] md:text-2xl">
            CLEIDE
          </p>
          <p className="mt-1 text-[8px] tracking-[0.35em] text-[#8A6748] md:text-[9px]">
            BEAUTY SALÃO
          </p>
        </a>

        <nav
          className="hidden items-center gap-10 text-xs tracking-[0.18em] md:flex"
          aria-label="Navegação principal"
        >
          <a href="#servicos" className="transition-opacity hover:opacity-50">
            SERVIÇOS
          </a>
          <a href="#sobre" className="transition-opacity hover:opacity-50">
            SOBRE
          </a>
          <a href="#resultados" className="transition-opacity hover:opacity-50">
            RESULTADOS
          </a>
          <a href="#localizacao" className="transition-opacity hover:opacity-50">
            LOCALIZAÇÃO
          </a>
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden border border-[#8A6748] px-5 py-3 text-[10px] tracking-[0.18em] transition duration-300 hover:bg-[#8A6748] hover:text-white md:block"
        >
          AGENDAR
        </a>

        <button
          type="button"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          className="relative z-[70] flex h-10 w-10 items-center justify-center md:hidden"
        >
          {menuAberto ? <CloseIcon /> : <MenuIcon />}
        </button>

        {menuAberto && (
          <div className="fixed inset-0 z-[60] bg-[#F3ECE4] px-8 md:hidden">
            <div className="flex h-full flex-col justify-center">
              <p className="mb-8 text-[10px] tracking-[0.3em] text-[#8A6748]">
                MENU
              </p>

              <nav className="flex flex-col" aria-label="Navegação mobile">
                {[
                  { nome: "Serviços", href: "#servicos" },
                  { nome: "Sobre", href: "#sobre" },
                  { nome: "Resultados", href: "#resultados" },
                  { nome: "Localização", href: "#localizacao" },
                  { nome: "Contato", href: "#contato" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuAberto(false)}
                    className="border-b border-[#CFC7BE] py-5 text-3xl font-light"
                  >
                    {item.nome}
                  </a>
                ))}
              </nav>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuAberto(false)}
                className="mt-10 flex items-center justify-center gap-3 bg-[#8A6748] px-6 py-5 text-center text-xs tracking-[0.2em] text-white"
              >
                <WhatsAppIcon size={18} />
                AGENDAR PELO WHATSAPP
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}

      <section className="relative min-h-[82vh] overflow-hidden bg-[#F3ECE4] px-6 pb-20 pt-12 md:px-16 lg:px-24 lg:pb-24 lg:pt-16">
        <div className="pointer-events-none absolute right-[1%] top-1/2 hidden h-[610px] w-[610px] -translate-y-1/2 opacity-20 lg:block">
          <Image
            src="/logo-cleide-transparente.png"
            alt=""
            fill
            priority
            sizes="610px"
            className="object-contain"
          />
        </div>

        <div className="pointer-events-none absolute left-1/2 top-[170px] h-[240px] w-[240px] -translate-x-1/2 opacity-[0.08] sm:h-[270px] sm:w-[270px] lg:hidden">
          <Image
            src="/logo-cleide-transparente.png"
            alt=""
            fill
            sizes="270px"
            className="object-contain"
          />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[65vh] max-w-7xl items-center">
          <FadeIn className="w-full">
            <div className="mx-auto w-full max-w-3xl text-center lg:mx-0 lg:text-left">
              <p className="mb-8 text-[11px] tracking-[0.3em] text-[#8A6748]">
                CLEIDE BEAUTY SALÃO • JARDIM SÃO JOÃO
              </p>

              <h1 className="text-[42px] font-light leading-[1.03] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[86px] lg:leading-[0.98]">
                Salão de beleza
                <br />
                em Guarulhos
                <br />
                <span className="italic text-[#8A6748]">
                  feito para você.
                </span>
              </h1>

              <div className="mx-auto my-9 h-px w-24 bg-[#9B7653] lg:mx-0" />

              <p className="mx-auto max-w-xl text-sm leading-7 text-[#57504A] md:text-base lg:mx-0">
                Cuidado especializado no Jardim São João, Guarulhos,
                com serviços de cabelo, penteados, design de sobrancelhas
                e tratamentos capilares.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full max-w-[340px] items-center justify-center gap-3 bg-[#8A6748] px-8 py-5 text-[11px] tracking-[0.18em] text-white transition duration-300 hover:bg-[#6F5037] sm:w-auto"
                >
                  <WhatsAppIcon size={17} />
                  AGENDAR HORÁRIO
                </a>

                <a
                  href="#servicos"
                  className="inline-flex w-full max-w-[340px] items-center justify-center border border-[#8A6748] px-8 py-5 text-[11px] tracking-[0.18em] transition duration-300 hover:bg-[#8A6748] hover:text-white sm:w-auto"
                >
                  CONHECER SERVIÇOS
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SERVIÇOS */}

      <section
        id="servicos"
        className="bg-[#1C1C1C] px-8 py-24 text-[#F5F1EB] md:px-16 lg:px-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="mb-20 grid gap-8 lg:grid-cols-2">
              <div>
                <p className="mb-6 text-xs tracking-[0.3em] text-[#B49A7A]">
                  01 / SERVIÇOS
                </p>

                <h2 className="text-5xl font-light leading-tight md:text-6xl">
                  Beleza e cuidado
                  <br />
                  <span className="italic">em Guarulhos.</span>
                </h2>
              </div>

              <div className="flex items-end">
                <p className="max-w-md text-sm leading-7 text-[#AAA39C]">
                  Conheça os serviços do Cleide Beauty Salão no Jardim
                  São João, com atendimento personalizado para cuidar
                  da sua beleza e da saúde dos seus fios.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="border-t border-white/20">
            {servicos.map((servico, index) => (
              <FadeIn key={servico.numero} delay={index * 100}>
                <div className="grid gap-4 border-b border-white/20 py-8 md:grid-cols-[80px_1fr_1fr]">
                  <span className="text-xs text-[#B49A7A]">
                    {servico.numero}
                  </span>

                  <h3 className="text-2xl font-light md:text-3xl">
                    {servico.titulo}
                  </h3>

                  <p className="text-sm leading-6 text-[#AAA39C]">
                    {servico.descricao}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}

      <section
        id="sobre"
        className="bg-[#F5F1EB] px-6 py-24 text-[#1C1C1C] md:px-16 lg:px-24 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <FadeIn>
            <div className="mx-auto w-full max-w-[430px] lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#E9E1D8] lg:aspect-auto lg:h-[650px]">
                <Image
                  src="/salao-cleide.png"
                  alt="Interior do Cleide Beauty Salão em Guarulhos"
                  fill
                  sizes="(max-width: 1024px) 90vw, 50vw"
                  className="object-cover object-center transition-transform duration-1000 hover:scale-[1.02]"
                />
              </div>

              <p className="mt-4 text-[9px] tracking-[0.28em] text-[#A48160]">
                CLEIDE BEAUTY SALÃO • GUARULHOS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="lg:pl-8">
              <p className="mb-8 text-xs tracking-[0.3em] text-[#A48160]">
                02 / CLEIDE BEAUTY SALÃO
              </p>

              <h2 className="text-5xl font-light leading-[1.1] md:text-6xl">
                Seu salão no
                <br />
                <span className="italic">Jardim São João.</span>
              </h2>

              <p className="mt-10 max-w-lg text-base leading-8 text-[#69635D]">
                O Cleide Beauty Salão está localizado no Jardim São João,
                em Guarulhos, oferecendo serviços de beleza com atendimento
                personalizado e atenção aos detalhes.
              </p>

              <p className="mt-5 max-w-lg text-base leading-8 text-[#69635D]">
                Cabelo, penteados, design de sobrancelhas e tratamentos
                capilares fazem parte de uma experiência criada para
                valorizar a beleza e o estilo de cada cliente.
              </p>

              <div className="mt-12 flex gap-12 border-t border-[#CFC7BE] pt-8">
                <div>
                  <p className="text-3xl font-light">100%</p>
                  <p className="mt-2 text-[10px] tracking-[0.2em] text-[#8A7968]">
                    PERSONALIZADO
                  </p>
                </div>

                <div>
                  <MapPinIcon size={30} />
                  <p className="mt-2 text-[10px] tracking-[0.2em] text-[#8A7968]">
                    GUARULHOS
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* RESULTADOS - GALERIA UNIFORME */}

      <section
        id="resultados"
        className="bg-[#E9E1D8] px-6 py-24 text-[#1C1C1C] md:px-16 lg:px-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="mb-6 text-xs tracking-[0.3em] text-[#A48160]">
                  03 / RESULTADOS
                </p>

                <h2 className="text-5xl font-light leading-[1.05] md:text-6xl">
                  Resultados que
                  <br />
                  <span className="italic">falam por si.</span>
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-[#69635D]">
                Conheça alguns resultados realizados no Cleide Beauty
                Salão, com cuidado, técnica e atenção aos detalhes.
              </p>
            </div>
          </FadeIn>

          {/* QUATRO FOTOS COM A MESMA PROPORÇÃO */}

          <div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-5 md:grid-cols-4 md:gap-5">
            {resultados.map((resultado, index) => (
              <FadeIn key={resultado.numero} delay={index * 100}>
                <div className="group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#D7CBC0]">
                    <Image
                      src={resultado.imagem}
                      alt={resultado.alt}
                      fill
                      sizes="(max-width: 767px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="flex items-start justify-between gap-2 pt-4">
                    <p className="text-xs leading-5 md:text-sm">
                      {resultado.titulo}
                    </p>

                    <span className="shrink-0 text-[10px] text-[#8A7968]">
                      {resultado.numero}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* LINK INSTAGRAM */}

          <FadeIn>
            <div className="mt-16 flex justify-center md:mt-20">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border-b border-[#1C1C1C] pb-3 text-center text-[10px] tracking-[0.18em] transition-opacity hover:opacity-50 md:text-xs"
              >
                <InstagramIcon size={18} />
                VER MAIS RESULTADOS NO INSTAGRAM
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* LOCALIZAÇÃO MINIMALISTA */}

      <section
        id="localizacao"
        className="bg-[#F5F1EB] px-6 py-20 text-[#1C1C1C] md:px-16 lg:px-24 lg:py-28"
      >
        <FadeIn>
          <div className="mx-auto max-w-7xl">
            <div className="border-t border-[#CFC7BE] pt-10">
              <div className="grid gap-12 md:grid-cols-2 md:items-end">
                <div>
                  <p className="mb-6 text-[10px] tracking-[0.3em] text-[#A48160]">
                    04 / LOCALIZAÇÃO
                  </p>

                  <h2 className="text-4xl font-light leading-[1.1] md:text-6xl">
                    Onde
                    <br />
                    <span className="italic text-[#8A6748]">
                      estamos.
                    </span>
                  </h2>
                </div>

                <div className="md:pb-1">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 text-[#8A6748]">
                      <MapPinIcon size={20} />
                    </span>

                    <div>
                      <p className="text-base">Cleide Beauty Salão</p>
                      <p className="mt-2 text-sm leading-6 text-[#69635D]">
                        Jardim São João
                        <br />
                        Guarulhos — SP
                      </p>
                    </div>
                  </div>

                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-block border-b border-[#8A6748] pb-2 text-[10px] tracking-[0.22em] transition-opacity hover:opacity-50"
                  >
                    VER NO GOOGLE MAPS ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* AGENDAMENTO */}

      <section
        id="contato"
        className="bg-[#B59B80] px-8 py-28 text-[#1C1C1C] md:px-16 lg:px-24 lg:py-36"
      >
        <FadeIn>
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-8 text-xs tracking-[0.35em]">
              CLEIDE BEAUTY SALÃO • GUARULHOS
            </p>

            <h2 className="text-5xl font-light leading-[1.05] md:text-7xl lg:text-8xl">
              Seu próximo
              <br />
              <span className="italic">momento de cuidado.</span>
            </h2>

            <p className="mx-auto mt-8 max-w-xl text-sm leading-7">
              Agende seu horário no Cleide Beauty Salão, no Jardim São
              João, Guarulhos, e venha cuidar da sua beleza.
            </p>

            <div className="mt-12">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#1C1C1C] px-9 py-5 text-xs tracking-[0.18em] text-white transition duration-300 hover:scale-[1.03] hover:bg-black"
              >
                <WhatsAppIcon size={19} />
                AGENDAR PELO WHATSAPP
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* RODAPÉ */}

      
{/* FORMULÁRIO DE AGENDAMENTO */}
<AgendamentoForm />


      <footer className="bg-[#151515] px-8 pb-10 pt-20 text-[#F5F1EB] md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 border-b border-white/15 pb-20 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <p className="text-3xl font-light tracking-[0.25em]">
                CLEIDE
              </p>

              <p className="mt-2 text-[10px] tracking-[0.35em] text-[#B59B80]">
                BEAUTY SALÃO
              </p>

              <p className="mt-8 max-w-sm text-sm leading-7 text-white/50">
                Salão de beleza no Jardim São João, Guarulhos.
                Beleza, cuidado e experiência em cada detalhe.
              </p>
            </div>

            <div>
              <p className="mb-7 text-[10px] tracking-[0.25em] text-[#B59B80]">
                NAVEGAÇÃO
              </p>

              <nav className="flex flex-col items-start gap-4 text-sm text-white/70">
                <a href="#servicos" className="transition hover:text-white">
                  Serviços
                </a>
                <a href="#sobre" className="transition hover:text-white">
                  Sobre
                </a>
                <a href="#resultados" className="transition hover:text-white">
                  Resultados
                </a>
                <a href="#localizacao" className="transition hover:text-white">
                  Localização
                </a>
                <a href="#contato" className="transition hover:text-white">
                  Agendamento
                </a>
              </nav>
            </div>

            <div>
              <p className="mb-7 text-[10px] tracking-[0.25em] text-[#B59B80]">
                CONTATO
              </p>

              <div className="flex flex-col items-start gap-5 text-sm text-white/70">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition hover:text-white"
                >
                  <WhatsAppIcon size={19} />
                  WhatsApp
                </a>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition hover:text-white"
                >
                  <InstagramIcon size={19} />
                  Instagram
                </a>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition hover:text-white"
                >
                  <span className="mt-[1px] shrink-0">
                    <MapPinIcon size={19} />
                  </span>
                  <span>R. Caiçara, 257 - Jardim Sâo João, Guarulhos - SP, 07151-040</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 pt-8 text-[10px] tracking-[0.12em] text-white/40 md:flex-row md:items-center md:justify-between">
            <p>© 2026 CLEIDE BEAUTY SALÃO</p>
            <p>TODOS OS DIREITOS RESERVADOS</p>
            <a href="#inicio" className="transition hover:text-white">
              VOLTAR AO TOPO ↑
            </a>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLUTUANTE */}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar horário pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1C1C1C] text-white shadow-xl transition duration-300 hover:scale-110 hover:bg-[#8A6748]"
      >
        <WhatsAppIcon size={25} />
      </a>
    </main>
  );
}
