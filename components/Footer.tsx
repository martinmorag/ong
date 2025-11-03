import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebookF, href: 'https://www.facebook.com/RedPorLaInfancia/' },
    { name: 'LinkedIn', icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/red-por-la-infancia/' },
    { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/redporlainfancia/' },
  ];

  return (
    // Make the footer relative to position the wave SVG absolutely
    <footer className="relative bg-gray-800 text-white pt-32 pb-8 mt-auto overflow-hidden">
      
      {/* 1. CURVED WAVE SVG ELEMENT */}
      {/* This SVG creates the upward-curving separation line */}
      <div className="absolute top-0 left-0 w-full" style={{ height: '100px', transform: 'translateY(-100px)' }}>
        <svg 
          viewBox="0 0 1440 100" // Adjusted viewBox for a specific height
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          {/* Path for the wave. The fill is white to contrast with the content section above. */}
          <path 
            fill="#db7445" // Using the 'Quiero Colaborar' color for visibility
            fillOpacity="1" 
            // This path creates a clean, upward-facing wave
            d="M0,64L48,69.3C96,75,192,85,288,74.7C384,64,480,32,576,32C672,32,768,64,864,74.7C960,85,1056,75,1152,69.3C1248,64,1344,64,1392,64L1440,64L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
          ></path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-6 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-6">
          
          {/* Organization Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Red por la Infancia</h3>
            <p className="text-sm">
              Somos una fundación argentina que trabaja en la promoción y protección de los derechos de las niñas, niños, adolescentes y mujeres contra las violencias.
            </p>
          </div>

          {/* Contact Info (Updated with Social Icons) */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contacto</h3>
            <p className="text-sm mb-4">
              Email: <a href="mailto:info@redporlainfancia.org" className="underline hover:text-red-400">info@redporlainfancia.org</a>
            </p>
            {/* Íconos de Redes Sociales */}
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={item.name}
                  // Custom styling for social icons
                  className="text-2xl text-red-400 hover:text-white bg-gray-700 p-2 rounded-full transition duration-150"
                >
                  <item.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Resources/Actions */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Recursos</h3>
            <Link href="/necesito-ayuda" className="block text-red-400 font-bold hover:underline">
              Necesito Ayuda
            </Link>
            <p className="text-xs mt-2">
              Gracias a los aportes económicos podemos sostener nuestro trabajo diario y ayudar a que...
            </p>
          </div>
        </div>

        {/* Legal and Copyright */}
        <div className="mt-6 text-center text-sm">
          <p className="mt-4 text-xs italic">
            Red por la Infancia no es una organización de asistencia directa.
          </p>
          <div className="mt-4 border-t border-gray-700 pt-4">
            &copy; {currentYear} Red por la Infancia
          </div>
        </div>
      </div>
    </footer>
  );
}