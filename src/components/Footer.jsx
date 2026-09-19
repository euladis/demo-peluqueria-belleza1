import { MessageCircle, MapPin, Clock3 } from "lucide-react";

function LogoMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2c-3 3-6 6-6 11a6 6 0 0 0 12 0c0-5-3-8-6-11Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M12 8c-1.4 1.6-2.5 3-2.5 5a2.5 2.5 0 0 0 5 0c0-2-1.1-3.4-2.5-5Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="section-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#inicio" className="footer-logo">
              <span className="footer-logo-icon">
                <LogoMark />
              </span>

              <span className="footer-logo-text">
                <span>ÉLAN</span>
                <small>PELUQUERÍA &amp; BELLEZA</small>
              </span>
            </a>

            <div className="footer-socials">
              <a href="#" aria-label="Facebook">
                FB
              </a>

              <a href="#" aria-label="Instagram">
                IG
              </a>

              <a href="https://wa.me/59800000000" aria-label="WhatsApp">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          <div className="footer-info">
            <div className="footer-info-item">
              <MapPin size={17} />
              <span>
                <strong>Av. Italia 1234</strong>
                Montevideo
              </span>
            </div>

            <div className="footer-info-item">
              <Clock3 size={17} />
              <span>
                <strong>Lun a Sáb · 9:00 – 19:00</strong>
                Dom. Cerrado
              </span>
            </div>
          </div>

          <div className="footer-script">
            Tu belleza
            <br />
            es única ♡
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 ÉLAN Peluquería &amp; Belleza. Todos los derechos reservados.</span>
          <span>Demo comercial · Contenido editable</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
