
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Conheça a Política de Privacidade do Cleide Beauty Salão.",
};

export default function PoliticaDePrivacidade() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-16 text-neutral-900">
      <Link
        href="/"
        className="mb-10 inline-block text-sm underline"
      >
        ← Voltar ao início
      </Link>

      <h1 className="mb-8 text-3xl font-bold">
        Política de Privacidade
      </h1>

      <div className="space-y-6 leading-relaxed">
        <section>
          <h2 className="mb-2 text-xl font-semibold">
            1. Sobre esta política
          </h2>
          <p>
            O Cleide Beauty Salão respeita a
            privacidade das pessoas que visitam
            seu site e busca tratar informações
            pessoais com transparência.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold">
            2. Agendamentos
          </h2>
          <p>
            Ao solicitar um agendamento, você
            poderá informar seu nome, serviço
            desejado, data, horário e observações.
            Essas informações são utilizadas
            para atender à sua solicitação.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold">
            3. Google Analytics
          </h2>
          <p>
            Com sua autorização, utilizamos
            o Google Analytics para analisar
            visitas e melhorar a experiência
            no site. Você pode recusar o uso
            dessas métricas.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold">
            4. Serviços externos
          </h2>
          <p>
            O site pode conter links para
            WhatsApp, Instagram e Google Maps.
            Ao acessar esses serviços, você
            estará sujeito às respectivas
            políticas de privacidade.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold">
            5. Seus direitos
          </h2>
          <p>
            Você pode solicitar informações,
            correção ou exclusão de dados
            pessoais, conforme aplicável
            pela Lei Geral de Proteção de
            Dados (LGPD).
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold">
            6. Contato
          </h2>
          <p>
            Para dúvidas sobre privacidade,
            entre em contato com o Cleide
            Beauty Salão pelos canais
            disponíveis no site.
          </p>
        </section>
      </div>
    </main>
  );
}
