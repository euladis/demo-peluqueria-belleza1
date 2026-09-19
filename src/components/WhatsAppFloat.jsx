import WhatsAppIcon from "./icons/WhatsAppIcon";

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/59800000000"
      className="whatsapp-float"
      target="_blank"
      rel="noreferrer"
      aria-label="Escribinos por WhatsApp"
    >
      <WhatsAppIcon size={28} />
      <span className="whatsapp-float-tooltip">Escribinos por WhatsApp</span>
    </a>
  );
}

export default WhatsAppFloat;
