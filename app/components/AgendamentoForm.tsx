
"use client";

import { useState, type FormEvent } from "react";

const WHATSAPP_NUMBER = "5511937367090";

const servicos = [
  "Corte feminino",
  "Escova",
  "Progressiva",
  "Coloração",
  "Mechas",
  "Hidratação capilar",
  "Reconstrução capilar",
  "Tratamento capilar",
  "Penteado",
  "Design de sobrancelhas",
  "Outro serviço",
];

type FormData = {
  nome: string;
  servico: string;
  data: string;
  horario: string;
  observacoes: string;
};

const initialForm: FormData = {
  nome: "",
  servico: "",
  data: "",
  horario: "",
  observacoes: "",
};

const inputClassName =
  "block w-full min-w-0 max-w-full appearance-none rounded-2xl " +
  "border border-[#E5DAD0] bg-white px-4 py-4 " +
  "text-base text-[#332820] outline-none box-border " +
  "transition-colors duration-200 " +
  "focus:border-[#8A6748] focus:ring-2 focus:ring-[#8A6748]/15";

const labelClassName =
  "mb-3 block text-sm font-medium text-[#493B30]";

function getLocalDate() {
  const hoje = new Date();

  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const dia = String(hoje.getDate()).padStart(2, "0");

  return `${ano}-${mes}-${dia}`;
}

function formatarData(data: string) {
  const [ano, mes, dia] = data.split("-");

  return `${dia}/${mes}/${ano}`;
}

export default function AgendamentoForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [erro, setErro] = useState("");

  const hoje = getLocalDate();

  function atualizarCampo(
    campo: keyof FormData,
    valor: string
  ) {
    setForm((anterior) => ({
      ...anterior,
      [campo]: valor,
    }));

    if (erro) {
      setErro("");
    }
  }

  function enviarAgendamento(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const nome = form.nome.trim();
    const servico = form.servico;
    const data = form.data;
    const horario = form.horario;
    const observacoes = form.observacoes.trim();

    if (!nome || !servico || !data || !horario) {
      setErro(
        "Preencha nome, serviço, data e horário para continuar."
      );
      return;
    }

    if (data < getLocalDate()) {
      setErro(
        "Selecione uma data de hoje em diante."
      );
      return;
    }

    const mensagem = [
      "Olá! Gostaria de solicitar um agendamento no Cleide Beauty Salão.",
      "",
      `*Nome:* ${nome}`,
      `*Serviço:* ${servico}`,
      `*Data desejada:* ${formatarData(data)}`,
      `*Horário desejado:* ${horario}`,
      ...(observacoes
        ? [`*Observações:* ${observacoes}`]
        : []),
      "",
      "Gostaria de confirmar a disponibilidade desse horário. Obrigada!",
    ].join("\n");

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}` +
      `?text=${encodeURIComponent(mensagem)}`;

    window.location.href = url;
  }

  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl">
      <div className="w-full min-w-0 max-w-full overflow-hidden rounded-[28px] bg-[#FFFCF9] px-4 py-8 shadow-[0_18px_50px_rgba(57,39,25,0.10)] sm:px-8 sm:py-10 md:px-12 md:py-12">
        <div className="mb-9 text-center">
          <p className="mb-3 text-[10px] font-medium tracking-[0.25em] text-[#8A6748] sm:text-xs">
            AGENDAMENTO PERSONALIZADO
          </p>

          <h3 className="text-3xl font-light leading-tight text-[#2B231E] sm:text-4xl">
            Reserve seu momento
          </h3>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[#827469] sm:text-base">
            Preencha seus dados e solicite o melhor horário
            para você.
          </p>
        </div>

        <form
          onSubmit={enviarAgendamento}
          className="w-full min-w-0 max-w-full space-y-6"
        >
          {/* NOME */}
          <div className="min-w-0">
            <label
              htmlFor="agendamento-nome"
              className={labelClassName}
            >
              Seu nome
            </label>

            <input
              id="agendamento-nome"
              type="text"
              name="nome"
              autoComplete="name"
              required
              maxLength={100}
              placeholder="Como podemos chamar você?"
              value={form.nome}
              onChange={(event) =>
                atualizarCampo(
                  "nome",
                  event.target.value
                )
              }
              className={inputClassName}
            />
          </div>

          {/* SERVIÇO */}
          <div className="min-w-0">
            <label
              htmlFor="agendamento-servico"
              className={labelClassName}
            >
              Serviço desejado
            </label>

            <select
              id="agendamento-servico"
              name="servico"
              required
              value={form.servico}
              onChange={(event) =>
                atualizarCampo(
                  "servico",
                  event.target.value
                )
              }
              className={inputClassName}
            >
              <option value="">
                Selecione o serviço
              </option>

              {servicos.map((servico) => (
                <option
                  key={servico}
                  value={servico}
                >
                  {servico}
                </option>
              ))}
            </select>
          </div>

          {/* DATA E HORÁRIO */}
          <div className="grid min-w-0 grid-cols-1 gap-6 md:grid-cols-2">
            <div className="w-full min-w-0 max-w-full">
              <label
                htmlFor="agendamento-data"
                className={labelClassName}
              >
                Data desejada
              </label>

              <input
                id="agendamento-data"
                name="data"
                type="date"
                required
                min={hoje}
                value={form.data}
                onChange={(event) =>
                  atualizarCampo(
                    "data",
                    event.target.value
                  )
                }
                className={inputClassName}
                style={{
                  width: "100%",
                  minWidth: 0,
                  maxWidth: "100%",
                }}
              />
            </div>

            <div className="w-full min-w-0 max-w-full">
              <label
                htmlFor="agendamento-horario"
                className={labelClassName}
              >
                Horário desejado
              </label>

              <input
                id="agendamento-horario"
                name="horario"
                type="time"
                required
                step={900}
                value={form.horario}
                onChange={(event) =>
                  atualizarCampo(
                    "horario",
                    event.target.value
                  )
                }
                className={inputClassName}
                style={{
                  width: "100%",
                  minWidth: 0,
                  maxWidth: "100%",
                }}
              />
            </div>
          </div>

          {/* OBSERVAÇÕES */}
          <div className="min-w-0">
            <label
              htmlFor="agendamento-observacoes"
              className={labelClassName}
            >
              Observações{" "}
              <span className="font-normal text-[#9D8E81]">
                (opcional)
              </span>
            </label>

            <textarea
              id="agendamento-observacoes"
              name="observacoes"
              rows={4}
              maxLength={500}
              placeholder="Conte algum detalhe sobre o atendimento..."
              value={form.observacoes}
              onChange={(event) =>
                atualizarCampo(
                  "observacoes",
                  event.target.value
                )
              }
              className={`${inputClassName} resize-y`}
            />
          </div>

          {/* ERRO */}
          {erro && (
            <p
              role="alert"
              className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {erro}
            </p>
          )}

          {/* BOTÃO */}
          <button
            type="submit"
            className="flex w-full min-w-0 items-center justify-center gap-3 rounded-2xl bg-[#80664F] px-4 py-5 text-center text-sm font-medium text-white transition-colors duration-300 hover:bg-[#6B503C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80664F] sm:text-base"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="shrink-0"
            >
              <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.45L3 20.5l1.55-5.25A8.5 8.5 0 1 1 21 11.5Z" />
              <path d="M8.5 8.5c.5 3.5 3 6 6.5 6.5" />
            </svg>

            <span className="min-w-0">
              Solicitar agendamento
            </span>
          </button>

          <p className="text-center text-xs leading-5 text-[#8D7D70]">
            Ao clicar, você será direcionada ao WhatsApp
            para confirmar a disponibilidade.
          </p>
        </form>
      </div>
    </div>
  );
}
