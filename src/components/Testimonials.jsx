import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Excelente atención, muy profesionales y el resultado fue increíble. ¡Volveré sin dudarlo!",
    name: "Cliente de ejemplo",
    service: "Coloración",
  },
  {
    text: "Me sentí muy cómoda, el ambiente es hermoso y el trato de todas es espectacular.",
    name: "Cliente de ejemplo",
    service: "Corte & peinado",
  },
  {
    text: "Siempre salgo muy conforme. Los productos son de primera y el equipo es un amor.",
    name: "Cliente de ejemplo",
    service: "Beauty",
  },
];

function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="section-container">
        <div className="testimonial-intro">
          <span className="section-label">Experiencias</span>

          <h2>
            Tu satisfacción es
            <br />
            <em>nuestra mayor recompensa.</em>
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <article className="testimonial-card" key={index}>
              <div className="testimonial-card-stars">
                <Star size={14} fill="currentColor" stroke="none" />
                <Star size={14} fill="currentColor" stroke="none" />
                <Star size={14} fill="currentColor" stroke="none" />
                <Star size={14} fill="currentColor" stroke="none" />
                <Star size={14} fill="currentColor" stroke="none" />
              </div>

              <p>“{testimonial.text}”</p>

              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.service}</span>
              </div>
            </article>
          ))}
        </div>

        <p className="demo-note">
          * Testimonios de demostración. Reemplazables por reseñas reales del
          negocio.
        </p>
      </div>
    </section>
  );
}

export default Testimonials;
