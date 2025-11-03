// app/page.tsx
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';
import Image from 'next/image';
import ProgramsGallery from '@/components/Programs';
import InterestResources from '@/components/Recursos';

const ConoceNuestraHistoriaClass = 'px-6 py-4 rounded-[35px] text-white bg-[#db7445] hover:bg-[#c3653d] transition duration-150 font-semibold text-lg shadow-lg'; 
const TitleColor = 'text-[#294859]'; // #294859 (Dark Slate Blue/Gray)
const LightBlueBackground = 'bg-blue-200'; // Puedes ajustar la intensidad de azul (e.g., bg-blue-100)

// This is a Server Component by default, perfect for static content like the home page.
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* In a real app, Header and Footer would often be placed in app/layout.tsx 
        to wrap all pages, but we include them here for a complete page replication. 
      */}
      <Header />

      {/* Hero Section: Main content from the PDF's first page */}
      <main className="flex-grow flex flex-col items-center justify-center text-center p-8 bg-gray-50">
        <div className='flex'>
          <div className="md:w-1/2 text-center md:text-left">
              {/* Title with Custom Color: #294859 */}
              <h1 className={`text-6xl font-extrabold ${TitleColor} mb-6 leading-tight`}>
                Protegemos los derechos de niñas, niños y adolescentes
              </h1>
              
              {/* Subtext in Black Text */}
              <p className="text-xl text-black mb-10">
                Nacimos en 2010 con el objetivo de promover cambios sistémicos en la prevención y abordajes de las violencias.
              </p>

              {/* Custom Styled Button */}
              <Link 
                href="/conocenos" // Assuming a route for "Conocé nuestra historia"
                className={ConoceNuestraHistoriaClass}
              >
                Conocé nuestra historia
              </Link>
            </div>

            {/* Image Area (Right Side) */}
            <div className="md:w-1/2 flex justify-center items-center">
              {/* You will need to replace this placeholder with your actual image component */}
              <Image 
                src="/kids.jpeg" // IMPORTANT: Change this path to your image in /public
                alt="Niñas, niños y adolescentes sonriendo" 
                width={500} // Adjust size as needed
                height={500} 
                className="rounded-lg shadow-2xl object-cover"
                priority 
              />
            </div>
          </div>

          <section className={`py-18 md:py-24 md:my-15 ${LightBlueBackground} text-center`}>
            <div className="max-w-screen mx-auto px-6">
              
              {/* Título de la Misión */}
              <h2 className="text-4xl font-extrabold text-[#294859] mb-8">
                Nuestra misión
              </h2>
              
              {/* Texto de la Misión */}
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic">
                Nuestro compromiso es visibilizar, prevenir y erradicar toda forma de violencia que afecte a niñas, niños y adolescentes desde una perspectiva multisectorial, con el propósito de proteger a las infancias y sus derechos humanos.
              </p>

            </div>
          </section>

          <section className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              
              {/* Título Principal */}
              <h2 className="text-4xl font-extrabold text-[#294859] mb-12 text-center">
                Alianzas internacionales
              </h2>
              
              {/* Bloque 1: Texto (Izquierda) e Imagen (Derecha) */}
              <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
                <div className="md:w-1/2">
                  <h3 className={`text-2xl font-bold text-blue-400 mb-4`}>
                    NUESTRO TRABAJO
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    INSPIRE es una iniciativa global lanzada en 2016 por el Secretario General de Naciones Unidas que busca poner fin a la violencia contra niñas, niños y adolescentes. Con siete estrategias clave, brinda a los países un marco lógico para que puedan diseñar sus propios planes de prevención y abordaje de las violencias contra las infancias, basándose en lo que funciona a nivel mundial.
                  </p>
                </div>
                
                <div className="md:w-1/2 flex justify-center">
                  {/* Placeholder de Imagen 1 - Ideal para el logo de INSPIRE o de la ONU/UNICEF */}
                  <Image 
                    src="/organization1.jpg" // CAMBIA ESTA RUTA
                    alt="Logo de la Iniciativa INSPIRE" 
                    width={550} 
                    height={400} 
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>

              {/* Bloque 2: Imagen (Izquierda) y Texto (Derecha) - Usando 'md:flex-row-reverse' */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="md:w-1/2">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    INSPIRE fue declarado de interés nacional por la Cámara de Diputados y por el Senado, y de interés Institucional por el Consejo de la Magistratura de CABA.
                    <br/><br/>
                    En este contexto, desde Red por la Infancia asumimos un papel de liderazgo para impulsar la iniciativa INSPIRE CAPÍTULO ARGENTINA en todo el país y crear una Alianza Federal por la Niñez que nos permita compartir aprendizajes sobre las violencias y mejorar el diseño y la implementación de políticas públicas.
                  </p>
                </div>
                
                <div className="md:w-1/2 flex justify-center">
                  {/* Placeholder de Imagen 2 - Ideal para logos de gobierno o un mapa de Argentina */}
                  <Image 
                    src="/organization2.jpg" // CAMBIA ESTA RUTA
                    alt="Alianza Federal por la Niñez" 
                    width={550} 
                    height={400} 
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>

            </div>
          </section>

          <ProgramsGallery />

          <InterestResources />
      </main>

      <Footer />
    </div>
  );
}