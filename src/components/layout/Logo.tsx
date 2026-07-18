import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className="logo-link">
      <img src="/vetro-removebg-preview.png" alt="Vetro" className="logo-image" />
      <span className="sr-only">Vetro</span>
    </Link>
  )
}
