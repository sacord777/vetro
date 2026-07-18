import { Mail, MapPin, Phone } from 'lucide-react'
import Seo from '../components/ui/Seo'
import { whatsappNumber, whatsappText } from '../constants/site'

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Vetro | Contacto"
        description="Contactate por WhatsApp, teléfono o visita nuestro centro para reservar tu lugar en la próxima formación."
      />
      <section className="section">
        <div className="container contact-grid">
          <div>
            <div className="section-header">
              <p className="eyebrow">Contacto directo</p>
              <h1>Hablemos de tu primer proyecto</h1>
            </div>
            <p>Usa WhatsApp o llama para reservar tu lugar y recibir asesoría inmediata.</p>

            <div className="contact-card contact-detail">
              <div className="contact-detail-item">
                <Phone size={18} />
                <div>
                  <p className="contact-label">WhatsApp</p>
                  <a
                    href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${whatsappText}`}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    Enviar mensaje
                  </a>
                </div>
              </div>
              <div className="contact-detail-item">
                <Mail size={18} />
                <div>
                  <p className="contact-label">Correo</p>
                  <a href="mailto:gustavofcordeiro@yahoo.com.ar" className="contact-link">
                    gustavofcordeiro@yahoo.com.ar
                  </a>
                </div>
              </div>
              <div className="contact-detail-item">
                <MapPin size={18} />
                <div>
                  <p className="contact-label">Dirección</p>
                  <p>Río Cuarto, Córdoba</p>
                </div>
              </div>
            </div>
          </div>

          <div className="map-embed">
            <iframe
              title="Ubicación Vetro"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3973.6566063311707!2d-64.35048002309654!3d-33.12397162877936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1784326855035!5m2!1ses!2sar"
              width="600" height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
