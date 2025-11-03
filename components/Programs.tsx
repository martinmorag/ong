// components/ProgramsGallery.tsx
import Image from 'next/image';
import Link from 'next/link';

// Componente individual para cada programa
interface ProgramCardProps {
  year: number;
  name: string;
  imageSrc: string; // Ruta de la imagen dentro de /public
  linkHref: string;
}

const ProgramCard = ({ year, name, imageSrc, linkHref }: ProgramCardProps) => (
  <Link 
    href={linkHref} 
    className="block group bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 overflow-hidden"
  >
    <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
      {/* Imagen del animal de caricatura */}
      <Image 
        src={imageSrc} 
        alt={`Imagen del programa ${name}`} 
        layout="fill" 
        objectFit="cover" 
        className="transition duration-300 group-hover:scale-105"
      />
    </div>
    <div className="p-5 text-center">
      <h4 className="text-xl font-bold text-[#294859] group-hover:text-blue-400 transition duration-150">
        {name}
      </h4>
    </div>
  </Link>
);


export default function ProgramsGallery() {
  // Datos de ejemplo para los programas
  const programs = [
    {
      year: 2024,
      name: "Defendamos los derechos de los niños",
      imageSrc: "/family1.jpg", // **CAMBIA ESTA RUTA** (Gato de caricatura)
      linkHref: "/programas/infancias-sin-violencia"
    },
    {
      year: 2023,
      name: "No al trabajo infantil",
      imageSrc: "/family2.jpg", // **CAMBIA ESTA RUTA** (Perro de caricatura)
      linkHref: "/programas/abuso-sexual-infancia"
    },
    {
      year: 2022,
      name: "Infancias sin violencia",
      imageSrc: "/family3.jpg", // **CAMBIA ESTA RUTA** (Oso de caricatura)
      linkHref: "/programas/victimas-y-familias"
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
          <Link href="/programas" className="px-6 py-3 rounded-lg text-white bg-blue-400 transition duration-150 font-semibold shadow-md">
            Ver todos los Programas
          </Link>
        </div>

      </div>
    </section>
  );
}