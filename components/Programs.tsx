// components/ProgramsGallery.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Target, Briefcase } from 'lucide-react';

// Componente individual para cada programa
interface ProgramCardProps {
  year: number;
  name: string;
  imageSrc: string; // Ruta de la imagen dentro de /public
  linkHref: string;
  objective: string; 
  mainProjects: string[];
}

const ProgramCard = ({ 
  year, 
  name, 
  imageSrc, 
  linkHref, 
  objective, 
  mainProjects
}: ProgramCardProps) => (
  // Clase base para un estilo limpio, bordes sutiles y shadow profesional
  <Link 
    href={linkHref} 
    className="block group bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 overflow-hidden"
  >
    <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
      {/* Imagen del programa */}
      <Image 
        src={imageSrc} 
        alt={`Imagen del programa ${name}`} 
        layout="fill" 
        objectFit="cover" 
        className="transition duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-6">
      {/* Título: Usamos un color oscuro y profesional */}
      <h4 className="text-xl font-extrabold text-[#1a3a4a] mb-2 group-hover:text-blue-600 transition duration-200">
        {name}
      </h4>
      
      {/* Indicador de año (sutil) */}
      <p className="text-sm text-gray-500 mb-4 border-b pb-2">
        Iniciado en: {year}
      </p>
      
      {/* SECCIÓN DE OBJETIVO */}
      <div className="mb-4">
        {/* Encabezado con ícono profesional (Target) */}
        <h5 className="flex items-center text-base font-bold text-gray-700 mb-1">
          <Target className="w-4 h-4 mr-2 text-blue-500" /> Objetivo
        </h5>
        <p className="text-gray-600 text-sm leading-relaxed">
          {objective}
        </p>
      </div>

      {/* SECCIÓN DE PROYECTOS PRINCIPALES */}
      <div>
        {/* Encabezado con ícono profesional (Briefcase) */}
        <h5 className="flex items-center text-base font-bold text-gray-700 mb-2">
          <Briefcase className="w-4 h-4 mr-2 text-blue-500" /> Proyectos Clave
        </h5>
        <ul className="text-gray-600 text-sm space-y-1">
          {mainProjects.slice(0, 5).map((project, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 mr-2">▪</span> 
              <span className="flex-1">{project}</span>
            </li> 
          ))}
          {/* Si hay más de 2 proyectos */}
          {mainProjects.length > 5 && (
            <li className="text-gray-400 text-xs mt-1">
              Ver más ({mainProjects.length - 2} adicionales) al hacer click.
            </li>
          )}
        </ul>
      </div>
    </div>
    {/* Footer de la tarjeta con call-to-action */}
    <div className="flex items-center justify-between p-4 bg-blue-50 border-t border-gray-200 group-hover:bg-blue-100 transition duration-200">
      <span className="text-sm font-semibold text-blue-600">
        Explorar Programa
      </span>
      <ChevronRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition duration-200" />
    </div>
  </Link>
);


export default function ProgramsGallery() {
  // Datos de ejemplo para los programas
  const programs = [
    {
      year: 2024,
      name: "Defendamos los derechos de los niños, niñas y adolescentes",
      imageSrc: "/family1.jpg", // CAMBIA ESTA RUTA (Gato de caricatura)
      linkHref: "/programas/infancias-sin-violencia",
      objective: "Promover una cultura donde la niñez esté en la agenda de las políticas públicas, y se involucre al poder judicial en la problemática.",
      mainProjects: ["Foro por la niñez y la adolescencia", "Campaña La infancia en la Agenda"]
    },
    {
      year: 2023,
      name: "No al trabajo infantil ni a la explotación sexual",
      imageSrc: "/family2.jpg", // CAMBIA ESTA RUTA (Perro de caricatura)
      linkHref: "/programas/abuso-sexual-infancia",
      objective: "Visibilizar y prevenir problemáticas específicas que afectan a la niñez, promoviendo el desarrollo infantil en entornos seguros, libres de violencia y explotación.",
      mainProjects: ["Infancias Protegidas", "Red interinstitucional de prevención y respuesta temprana"]
    },
    {
      year: 2022,
      name: "Infancias sin violencia",
      imageSrc: "/family3.jpeg", // CAMBIA ESTA RUTA (Oso de caricatura)
      linkHref: "/programas/victimas-y-familias",
      objective: "Acompañar y proteger la infancia en forma integral, generando conciencia y movilizando a la comunidad en la defensa activa de sus derechos.",
      mainProjects: ["Talleres de crianza cuidada y prevención de maltrato infantil", "En Red Prevenimos la Violencia Infantil", "Capacitaciones"]
    },
  ];
    
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Título Principal */}
        <h2 className="text-4xl font-extrabold text-blue-400 mb-12 text-center">
          Programas de Sensibilización
        </h2>
        
        {/* Galería de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <ProgramCard key={program.name} {...program} />
          ))}
        </div>

        {/* Botón para ver todos los programas (Opcional) */}
        <div className="text-center mt-12">
          <Link href="/" className="px-6 py-3 rounded-lg text-white bg-blue-400 transition duration-150 font-semibold shadow-md">
            Ver todos los Programas
          </Link>
        </div>

      </div>
    </section>
  );
}