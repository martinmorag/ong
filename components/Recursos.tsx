// components/InterestResources.tsx
import Link from 'next/link';

// Componente individual para cada recurso
interface ResourceCardProps {
  year: number;
  title: string;
  description: string;
  source: string; // Fuente o apoyo (e.g., UNICEF)
  linkHref: string; // URL al documento (PDF)
}

const ResourceCard = ({ year, title, description, source, linkHref }: ResourceCardProps) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col h-full">
    <div className="text-sm font-bold text-red-600 mb-2">{year}</div>
    <h3 className="text-2xl font-bold text-[#294859] mb-3">{title}</h3>
    <p className="text-gray-700 flex-grow mb-4">
      {description}
    </p>
    
    <div className="mt-auto pt-3 border-t border-gray-100">
        <p className="text-xs italic text-gray-500 mb-3">{source}</p>
        <Link 
            href={linkHref} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 text-sm text-white bg-[#3fb5a6] rounded-full hover:bg-[#32998a] transition duration-150 font-semibold shadow-md"
        >
            Ver Recurso (PDF)
        </Link>
    </div>
  </div>
);


export default function InterestResources() {
  // Datos extraídos del documento PDF para la sección 8/9
  const resources = [
    {
      year: 2021,
      title: "Guía para la detección, abordaje y asistencia sobre los distintos tipos de violencias",
      description: "Con información en lenguaje claro para que la ciudadanía tenga las herramientas para detectar y actuar.",
      source: "Con el apoyo de UNICEF.",
      linkHref: "/recursos/guia-deteccion-violencias-2021.pdf"
    },
    {
      year: 2021,
      title: "Guía de recursos nacionales y provinciales por tipo de violencia",
      description: "Información útil de los lugares donde realizar las denuncias provincia por provincia. Se elaboró en el marco del proyecto de 'Los chicos y chicas somos responsables'.",
      source: "Con el apoyo de UNICEF.",
      linkHref: "/recursos/guia-recursos-nacionales-2021.pdf"
    },
    {
      year: 2016,
      title: "Abuso sexual en la infancia",
      description: "Guía para orientación y recursos disponibles en CABA y provincia de Buenos Aires.",
      source: "Elaborada con la Fundación para Estudio e Investigación de la Mujer (FEIM).",
      linkHref: "/recursos/guia-abuso-sexual-2016.pdf"
    },
  ];
    
  return (
    <section className="py-16 md:py-20 ">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Título Principal */}
        <h2 className="text-4xl font-extrabold text-[#294859] mb-12 text-center">
          Recursos de Interés
        </h2>
        
        {/* Galería de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>

      </div>
    </section>
  );
}