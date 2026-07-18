import { MessageSquare } from 'lucide-react'
import { whatsappNumber, whatsappText } from '../../constants/site'

export default function StickyWhatsAppButton() {
  return (
    <a
      className="sticky-whatsapp"
      href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${whatsappText}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Enviar mensaje por WhatsApp"
    >
      <MessageSquare size={22} />
    </a>
  )
}
