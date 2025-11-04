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
                Defendemos los derechos de niñas y niños
              </h1>
              
              {/* Subtext in Black Text */}
              <p className="text-xl text-black mb-10">
                25 años promoviendo la prevención de la violencia hacia niñas y niños
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
                Defender los derechos de los niños y brindarles protección frente a la violencia y la explotación.
              </p>

            </div>
          </section>

          <ProgramsGallery />
      </main>

      <Footer />
    </div>
  );
}