import { Link } from 'react-router-dom'
import type { NavItem as NavItemType } from '../../types'
import type { LucideIcon } from 'lucide-react'

interface Props {
  item: NavItemType
  icon: LucideIcon
  active: boolean
  onClick?: () => void
}

export default function NavItem({ item, icon: Icon, active, onClick }: Props) {
  return (
    <li>
      <Link
        to={item.path}
        className={`nav-link${active ? ' active' : ''}`}
        onClick={onClick}
      >
        <Icon size={16} className="nav-icon" aria-hidden="true" />
        <span>{item.title}</span>
      </Link>
    </li>
  )
}
