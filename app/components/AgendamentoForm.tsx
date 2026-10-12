
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

export default function AgendamentoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Agendamento>({
    resolver: zodResolver(schema),
  });

  const enviarWhatsApp = (dados: Agendamento) => {
    const mensagem = [
      "Olá, Cleide! Gostaria de solicitar um agendamento.",
      "",
      `Nome: ${dados.nome}`,
      `Serviço: ${dados.servico}`,
      `Data: ${dados.data}`,
      `Horário: ${dados.horario}`,
      `Observações: ${dados.observacoes || "Nenhuma"}`,
      "",
      "Aguardo a confirmação da disponibilidade. Obrigada!",
    ].join("\n");

    const url = `https://wa.me/5511937367090?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const campo =
    "w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none focus:border-amber-700";

  return (
    <section id="agendamento" className="bg-[#faf8f5] px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-neutral-900">
            Agende seu horário
          </h2>
          <p className="mt-3 text-neutral-600">
            Escolha o serviço e solicite seu horário pelo WhatsApp.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(enviarWhatsApp)}
          className="space-y-5 rounded-2xl bg-white p-6 shadow-sm md:p-10"
        >
          <div>
            <label htmlFor="nome" className="mb-2 block text-sm font-medium">
              Seu nome
            </label>
            <input
              id="nome"
              {...register("nome")}
              className={campo}
              placeholder="Digite seu nome"
            />
            {errors.nome && (
              <p className="mt-1 text-sm text-red-600">{errors.nome.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="servico" className="mb-2 block text-sm font-medium">
              Serviço desejado
            </label>
            <select id="servico" {...register("servico")} className={campo}>
              <option value="">Selecione um serviço</option>
              <option value="Corte feminino">Corte feminino</option>
              <option value="Escova">Escova</option>
              <option value="Progressiva">Progressiva</option>
              <option value="Coloração">Coloração</option>
              <option value="Mechas">Mechas</option>
              <option value="Tratamento capilar">Tratamento capilar</option>
              <option value="Penteado">Penteado</option>
              <option value="Design de sobrancelhas">
                Design de sobrancelhas
              </option>
            </select>
            {errors.servico && (
              <p className="mt-1 text-sm text-red-600">
                {errors.servico.message}
              </p>
            )}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="data" className="mb-2 block text-sm font-medium">
                Data desejada
              </label>
              <input
                id="data"
                type="date"
                {...register("data")}
                className={campo}
              />
              {errors.data && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.data.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="horario" className="mb-2 block text-sm font-medium">
                Horário desejado
              </label>
              <input
                id="horario"
                type="time"
                {...register("horario")}
                className={campo}
              />
              {errors.horario && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.horario.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="observacoes"
              className="mb-2 block text-sm font-medium"
            >
              Observações (opcional)
            </label>
            <textarea
              id="observacoes"
              {...register("observacoes")}
              rows={3}
              className={campo}
              placeholder="Conte algum detalhe sobre o atendimento..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#786047] px-6 py-4 font-semibold text-white transition hover:bg-[#5d4936]"
          >
            Solicitar pelo WhatsApp
          </button>

          <p className="text-center text-xs text-neutral-500">
            O horário será confirmado pela equipe após o envio da mensagem.
          </p>
        </form>
      </div>
    </section>
  );
}
