
export default function Localizacao() {
  return (
    <section id="localizacao" className="localizacao">
      <div className="localizacao-container">
        <p className="localizacao-label">05 / LOCALIZAÇÃO</p>
        <h2>Onde estamos</h2>

        <div className="localizacao-grid">
          <div className="localizacao-info">
            <h3>Cleide Beauty Salão</h3>

            <address>
              R. Caiçara, 257
              <br />
              Jardim São João, Guarulhos — SP
              <br />
              07151-040
            </address>

            <h4>HORÁRIO DE FUNCIONAMENTO</h4>

            <div className="horario-linha">
              <span>Terça a sexta</span>
              <span>09h às 19h</span>
            </div>

            <div className="horario-linha">
              <span>Sábado</span>
              <span>08h às 17h</span>
            </div>

            <div className="horario-linha">
              <span>Domingo e segunda</span>
              <span>Fechado</span>
            </div>

            <p className="localizacao-observacao">
              Atendimento com horário agendado.
            </p>
          </div>

          <div className="localizacao-mapa">
            <iframe
              title="Localização Cleide Beauty Salão"
              src="https://www.google.com/maps?q=R.%20Cai%C3%A7ara%2C%20257%2C%20Jardim%20S%C3%A3o%20Jo%C3%A3o%2C%20Guarulhos%2C%20SP&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
