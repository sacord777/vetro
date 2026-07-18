import Seo from '../components/ui/Seo'

export default function AboutPage() {
  return (
    <>
      <Seo
        title="Vetro | Sobre nosotros"
        description="Conocé nuestra misión, valores e instructores expertos detrás de la formación en oficios rentables."
      />
      <section className="section section-surface">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Sobre Vetro</p>
            <h1>Una escuela enfocada en oficio, lucro y confianza</h1>
            <p>
              Vetro nació para entrenar a personas que buscan un oficio profesional, con habilidades que
              generan ingresos y permiten independencia financiera.
            </p>
          </div>

          <div className="grid-2 gap-48">
            <div>
              <h2>Nuestra misión</h2>
              <p>
                Empoderar a emprendedores y trabajadores con técnicas reales, mentores expertos y
                soporte desde el primer proyecto.
              </p>
            </div>
            <div>
              <h2>Quienes somos</h2>
              <p>
                Formadores con experiencia en obra, diseño y ejecución de proyectos de resina y
                porcelanato para clientes exigentes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
