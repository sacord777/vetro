import useScrollToTop from '../hooks/useScrollToTop'
import Navbar from '../components/layout/Navbar'
import StickyWhatsAppButton from '../components/layout/StickyWhatsAppButton'

export default function Layout({ children }: { children: React.ReactNode }) {
  useScrollToTop()

  return (
    <div className="app-shell">
      <Navbar />
      <main>{children}</main>
      <footer className="site-footer">
        <div className="footer-content">
          <div>
            <p className="footer-title">Vetro</p>
            <p>Formación práctica en porcelanato líquido, epoxy y UV resin.</p>
          </div>
          <div>
            <p className="footer-title">Contacto</p>
            <p>gustavofcordeiro@yahoo.com.ar</p>
            <p>+54 9 3585 480 214</p>
            <p>Diseñado con ♥ por <a href="http://saintagency.netlify.app"><strong>Saint Agency</strong></a></p>
          </div>
        </div>
        <p className="footer-note">© {new Date().getFullYear()} Vetro. Todos los derechos reservados.</p>
      </footer>
      <StickyWhatsAppButton />
    </div>
  )
}
