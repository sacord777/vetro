import { Helmet } from 'react-helmet-async'

interface SeoProps {
  title: string
  description: string
  image?: string
}

const DEFAULT_IMAGE = '/og-image.png'

export default function Seo({ title, description, image = DEFAULT_IMAGE }: SeoProps) {
  const pageUrl = typeof window !== 'undefined' ? window.location.href : undefined

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Porcelanato líquido, epoxy resin, UV resin, cursos presenciales, talleres creativos, Rio Cuarto, técnica artesanal, aprendizaje práctico" />
      <meta name="robots" content="index, follow" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Vetro" />
      <meta property="og:image" content={image} />
      {pageUrl ? <meta property="og:url" content={pageUrl} /> : null}
      <link rel="canonical" href={pageUrl ?? image} />
    </Helmet>
  )
}
