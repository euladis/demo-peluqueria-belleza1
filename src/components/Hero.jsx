import { ArrowRight, CalendarDays, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="hero-eyebrow">
          <Sparkles size={15} />
          Tu belleza, nuestra pasión
        </span>

        <h1>
          Tu belleza,
          <br />
          <em>tu esencia.</em>
        </h1>

        <p>
          Cuidamos de tu cabello, tu piel y tu bienestar con los mejores
          productos y un equipo de profesionales apasionadas por la belleza.
        </p>

        <div className="hero-buttons">
          <a href="#reserva" className="btn btn-primary">
            <CalendarDays size={18} />
            Reservar turno
          </a>

          <a href="#servicios" className="btn btn-outline">
            Conocé nuestros servicios
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      <div className="hero-script">
        Cabello sano
        <br />
        Piel radiante
        <br />
        Vos, siempre
      </div>
    </section>
  );
}

export default Hero;
