import { Menu } from 'lucide-react'

interface MobileNavigationProps {
  onOpen: () => void
}

export default function MobileNavigation({ onOpen }: MobileNavigationProps) {
  return (
    <button className="mobile-menu-toggle" onClick={onOpen} aria-label="Abrir navegación">
      <Menu size={20} />
    </button>
  )
}
