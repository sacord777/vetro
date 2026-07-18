import { type NavItem as NavItemType } from '../../types'
import { BookOpen, Home, Info, Layers, MessageCircle, type LucideIcon } from 'lucide-react'
import NavItem from './NavItem'

const icons: Record<string, LucideIcon> = {
  '/': Home,
  '/courses': BookOpen,
  '/materials': Layers,
  '/about': Info,
  '/contact': MessageCircle,
}

interface DesktopNavigationProps {
  items: NavItemType[]
  activePath: string
}

export default function DesktopNavigation({ items, activePath }: DesktopNavigationProps) {
  return (
    <nav className="desktop-navigation" aria-label="Navegación principal">
      <ul className="desktop-nav-list">
        {items.map((item) => (
          <NavItem
            key={item.path}
            item={item}
            icon={icons[item.path]}
            active={item.path === activePath}
          />
        ))}
      </ul>
    </nav>
  )
}
