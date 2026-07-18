import Seo from '../components/ui/Seo'

export default function AboutPage() {
  return (
    <>
      <Seo
        title="Vetro | Sobre nosotros"
        description="Conocé nuestra propuesta educativa en talleres de porcelanato líquido, epoxy resin y UV resin. Un espacio en Río Cuarto para aprender con técnica y creatividad."
      />
      <section className="section section-surface">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Sobre Vetro</p>
            <h1>Una escuela enfocada en técnica, creatividad y confianza</h1>
            <p>
              Vetro nació para ofrecer cursos presenciales donde aprender técnicas de resina y
              porcelanato con cuidado, paso a paso, en un ambiente profesional y acogedor.
            </p>
          </div>

          <div className="grid-2 gap-48">
            <div>
              <h2>Nuestra misión</h2>
              <p>
                Impulsar el aprendizaje práctico de técnicas creativas, con atención personalizada
                y herramientas claras para avanzar con seguridad.
              </p>
            </div>
            <div>
              <h2>Quienes somos</h2>
              <p>
                Formadores con experiencia en obra, diseño y ejecución de proyectos de resina y
                porcelanato que buscan enseñar con método y armonía.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
