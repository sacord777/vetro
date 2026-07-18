import Seo from '../components/ui/Seo'
import InfoCard from '../components/features/InfoCard'
import ComparisonCard from '../components/features/ComparisonCard'
import TimelineItem from '../components/features/TimelineItem'

export default function MaterialsPage() {
  return (
    <>
      <Seo
        title="Vetro | Materiales y aplicaciones"
        description="Comprendé las ventajas de epoxy, UV resin y porcelanato líquido con explicaciones visuales y comparaciones prácticas."
      />
      <section className="section section-surface">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Materiales y ventajas</p>
            <h1>Porcelanato líquido, epoxy y UV resin</h1>
            <p>
              Descubrí las propiedades, aplicaciones y las ventajas de cada método con comparaciones
              visuales y ejemplos reales.
            </p>
          </div>

          <div className="materials-highlight">
            <div className="materials-highlight-image">
              <img src="/flooresin.jpg" alt="Piso premium de porcelanato líquido" />
            </div>
            <div className="materials-highlight-copy">
              <p className="eyebrow">Proyecto premium</p>
              <h2>Superficies que se venden por su acabado y resistencia</h2>
              <p>
                Un piso continuo en porcelanato líquido destaca en diseño, mantiene el brillo y ofrece
                una presentación profesional para clientes exigentes.
              </p>
              <ul className="materials-list">
                <li>Acabado sin juntas ni fisuras</li>
                <li>Resistencia a manchas y desgaste</li>
                <li>Valor agregado inmediato en cada presupuesto</li>
              </ul>
            </div>
          </div>

          <div className="materials-grid">
            <InfoCard
              highlight="Resina Epoxi"
              title="De piso industrial a diseño premium"
              copy="Resina de alto desempeño para superficies resistentes, duraderas y con acabado liso y brillante."
            />
            <InfoCard
              highlight="Resina UV"
              title="Pequeñas piezas que se venden rápido"
              copy="Curado inmediato con luz UV, ideal para objetos decorativos, mesas y proyectos a medida."
            />
            <InfoCard
              highlight="Resina Epoxi"
              title="Pisos y paredes con terminación de alto valor"
              copy="Revestimiento continuo premium que combina estética porcelánica con durabilidad profesional."
            />
          </div>

          <div className="section-header">
            <p className="eyebrow">Comparativa práctica</p>
            <h2>Elige la técnica según tu proyecto y flujo de trabajo</h2>
          </div>

          <div className="comparison-layout">
            <ComparisonCard
              title="Velocidad vs acabado"
              leftLabel="Resina UV"
              rightLabel="Resina Epoxi"
              leftCopy="Perfecto para piezas pequeñas y producción rápida con curado en minutos."
              rightCopy="Ideal para grandes superficies que requieren un acabado continuo y fluido."
            />
            <ComparisonCard
              title="Resistencia vs estética"
              leftLabel="Resina UV"
              rightLabel="Resina Epoxi"
              leftCopy="Excelente resistencia mecánica para áreas de tránsito intenso."
              rightCopy="Acabado superior y uniforme que se percibe como un servicio premium."
            />
          </div>

          <div className="section-header">
            <p className="eyebrow">Proceso visual</p>
            <h2>Cómo funciona el ciclo de un proyecto.</h2>
          </div>

          <div className="timeline">
            <TimelineItem
              title="Evaluación y preparación"
              details="Diagnóstico de la superficie, elección del material según el proyecto y corrección de base."
            />
            <TimelineItem
              title="Mezcla y aplicación"
              details="Uso de fórmulas precisas, técnicas de vertido y control de superficie para un acabado uniforme."
            />
            <TimelineItem
              title="Curado y acabado"
              details="Cura eficiente, lijado fino y sellado para un resultado resistente y de larga vida."
            />
            <TimelineItem
              title="Entrega y posicionamiento"
              details="Propuesta de valor al cliente, presentación del trabajo y asesoría para precio de venta."
            />
          </div>
        </div>
      </section>
    </>
  )
}
