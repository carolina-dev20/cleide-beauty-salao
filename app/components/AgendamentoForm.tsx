
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  nome: z.string().trim().min(2, "Digite seu nome."),
  servico: z.string().min(1, "Escolha um serviço."),
  data: z.string().min(1, "Escolha uma data."),
  horario: z.string().min(1, "Escolha um horário."),
  observacoes: z.string().optional(),
});

type Agendamento = z.infer<typeof schema>;

const servicos = [
  "Corte feminino",
  "Escova",
  "Progressiva",
  "Coloração",
  "Mechas",
  "Hidratação capilar",
  "Reconstrução capilar",
  "Penteado",
  "Design de sobrancelhas",
  "Outro serviço",
];

export default function AgendamentoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Agendamento>({
    resolver: zodResolver(schema),
    defaultValues: {
      nome: "",
      servico: "",
      data: "",
      horario: "",
      observacoes: "",
    },
  });

  function enviarAgendamento(dados: Agendamento) {
    const [ano, mes, dia] = dados.data.split("-");
    const dataFormatada = `${dia}/${mes}/${ano}`;

    const mensagem = [
      "Olá! Gostaria de solicitar um agendamento no Cleide Beauty Salão.",
      "",
      `Nome: ${dados.nome}`,
      `Serviço: ${dados.servico}`,
      `Data desejada: ${dataFormatada}`,
      `Horário desejado: ${dados.horario}`,
      dados.observacoes
        ? `Observações: ${dados.observacoes}`
        : "",
      "",
      "Aguardo a confirmação. Obrigada!",
    ]
      .filter((linha) => linha !== undefined)
      .join("\n");

    const url = `https://wa.me/5511937367090?text=${encodeURIComponent(
      mensagem
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const dia = String(hoje.getDate()).padStart(2, "0");
  const dataMinima = `${ano}-${mes}-${dia}`;

  const estiloCampo =
    "w-full rounded-xl border border-[#E6DED6] bg-white px-4 py-4 text-[#332A23] outline-none transition focus:border-[#8B7059] focus:ring-2 focus:ring-[#8B7059]/15";

  const estiloLabel =
    "mb-2 block text-sm font-medium text-[#514238]";

  return (
    <div className="mx-auto w-full max-w-3xl rounded-[28px] bg-[#FFFCF9] p-6 shadow-[0_20px_70px_rgba(50,35,20,0.10)] sm:p-10">
      <div className="mb-8 text-center">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#9A7B62]">
          Agendamento personalizado
        </span>

        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#332A23] sm:text-3xl">
          Reserve seu momento
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-[#796C61]">
          Preencha seus dados e solicite o melhor horário para você.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(enviarAgendamento)}
        className="space-y-6"
      >
        <div>
          <label htmlFor="nome" className={estiloLabel}>
            Seu nome
          </label>

          <input
            id="nome"
            type="text"
            autoComplete="name"
            placeholder="Como podemos chamar você?"
            {...register("nome")}
            className={estiloCampo}
          />

          {errors.nome && (
            <p className="mt-2 text-xs text-red-600">
              {errors.nome.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="servico" className={estiloLabel}>
            Serviço desejado
          </label>

          <select
            id="servico"
            defaultValue=""
            {...register("servico")}
            className={estiloCampo}
          >
            <option value="" disabled>
              Selecione o serviço
            </option>

            {servicos.map((servico) => (
              <option key={servico} value={servico}>
                {servico}
              </option>
            ))}
          </select>

          {errors.servico && (
            <p className="mt-2 text-xs text-red-600">
              {errors.servico.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="data" className={estiloLabel}>
              Data desejada
            </label>

            <input
              id="data"
              type="date"
              min={dataMinima}
              {...register("data")}
              className={estiloCampo}
            />

            {errors.data && (
              <p className="mt-2 text-xs text-red-600">
                {errors.data.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="horario" className={estiloLabel}>
              Horário desejado
            </label>

            <input
              id="horario"
              type="time"
              {...register("horario")}
              className={estiloCampo}
            />

            {errors.horario && (
              <p className="mt-2 text-xs text-red-600">
                {errors.horario.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="observacoes" className={estiloLabel}>
            Observações{" "}
            <span className="font-normal text-[#9A8A7D]">
              (opcional)
            </span>
          </label>

          <textarea
            id="observacoes"
            rows={4}
            placeholder="Conte algum detalhe sobre o atendimento..."
            {...register("observacoes")}
            className={`${estiloCampo} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#765E48] px-6 py-5 text-sm font-semibold text-white transition hover:bg-[#604B39] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
          </svg>

          Solicitar agendamento pelo WhatsApp
        </button>

        <p className="text-center text-xs leading-relaxed text-[#8C7D70]">
          Você será direcionada ao WhatsApp.
          <br />
          O agendamento será confirmado pela nossa equipe.
        </p>
      </form>
    </div>
  );
}
