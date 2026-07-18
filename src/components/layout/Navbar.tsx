import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { navItems, whatsappNumber, whatsappText } from '../../constants/site'
import Logo from './Logo'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'
import MobileDrawer from './MobileDrawer'

export default function Navbar() {
  const location = useLocation()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const whatsappHref = useMemo(
    () => `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${whatsappText}`,
    [],
  )

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [drawerOpen])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDrawerOpen(false)
      }
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 16)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('keydown', handleEscape)

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  useEffect(() => {
    if (!drawerOpen) return

    const frame = window.requestAnimationFrame(() => setDrawerOpen(true))
    return () => window.cancelAnimationFrame(frame)
  }, [location.pathname, drawerOpen])

  return (
    <header className={`navbar-shell${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <Logo />

        <DesktopNavigation items={navItems} activePath={location.pathname} />

        <div className="navbar-actions">
          <MobileNavigation onOpen={() => setDrawerOpen(true)} />
          <a href={whatsappHref} className="cta-button cta-secondary" target="_blank" rel="noreferrer">
            <MessageCircle size={16} aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        items={navItems}
        activePath={location.pathname}
        whatsappHref={whatsappHref}
        onNavigate={() => setDrawerOpen(false)}
      />
    </header>
  )
}
