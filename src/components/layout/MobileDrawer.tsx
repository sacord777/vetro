import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { NavItem as NavItemType } from '../../types'

interface MobileDrawerProps {
  open: boolean
  onClose: () => void
  items: NavItemType[]
  activePath: string
  whatsappHref: string
  onNavigate: () => void
}

export default function MobileDrawer({
  open,
  onClose,
  items,
  activePath,
  whatsappHref,
  onNavigate,
}: MobileDrawerProps) {
  const drawerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!open || !drawerRef.current) return

    const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    first?.focus()

    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !first || !last) return

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleTab)
    return () => document.removeEventListener('keydown', handleTab)
  }, [open])

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            className="drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.aside
            className="mobile-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-label="Navegación móvil"
            ref={drawerRef}
          >
            <div className="drawer-header">
              <button className="drawer-close" onClick={onClose} aria-label="Cerrar navegación">
                <X size={20} />
              </button>
            </div>

            <nav className="drawer-nav">
              <ul>
                {items.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`drawer-link${item.path === activePath ? ' active' : ''}`}
                      onClick={onNavigate}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="drawer-actions">
              <Link to="/contact" className="drawer-cta" onClick={onNavigate}>
                Contacto
              </Link>
              <a href={whatsappHref} className="drawer-whatsapp" onClick={onNavigate}>
                WhatsApp
              </a>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  )
}
