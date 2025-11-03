"use client"
// components/Header.tsx
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react'; // <-- IMPORTANTE: Importar useState

// Custom CSS classes for the buttons
const GrayButtonClass = 'px-4 py-2 rounded-lg text-gray-500 hover:bg-gray-100 transition duration-150';
const NecesitoAyudaClass = 'px-6 py-4 rounded-[35px] text-white bg-[#3fb5a6] hover:bg-[#32998a] transition duration-150 font-semibold shadow-md'; // #3fb5a6 (Teal-Green)
const QuieroColaborarClass = 'px-6 py-4 rounded-[35px] text-white bg-[#db7445] hover:bg-[#c3653d] transition duration-150 font-semibold shadow-md'; // #db7445 (Orange-Brown)

// Lista de programas para el dropdown
const programs = [
    { name: 'Infancias sin Violencia', href: '/programas/infancias-sin-violencia' },
    { name: 'Abuso Sexual en la Infancia', href: '/programas/abuso-sexual-infancia' },
    { name: 'Víctimas y Familias', href: '/programas/victimas-y-familias' },
    { name: 'Todas las Campañas', href: '/campanas' }, // Link general
];

export default function Header() {
    // Estado para controlar la visibilidad del dropdown
    const [isProgramsOpen, setIsProgramsOpen] = useState(false);

    // Función para cerrar el dropdown al hacer clic en un enlace
    const handleLinkClick = () => setIsProgramsOpen(false);

    return (
        <header className="flex justify-between items-center p-4 bg-white shadow-md">
            
            {/* Logo/Title on the Left */}
            <Link href="/" className="text-2xl font-bold text-blue-500">
                <Image src="/image.jpeg" alt='logo' width={100} height={100} />
            </Link>
            
            {/* Navigation Links and Buttons */}
            <nav className="flex space-x-3 items-center">

                {/* Gray Buttons */}
                <Link href="/quienes-somos" className={GrayButtonClass}>
                    ¿Quiénes Somos?
                </Link>
                <Link href="/nuestro-trabajo" className={`${GrayButtonClass} flex items-center`}>
                    Nuestro Trabajo <span className="text-xs ml-1">▼</span>
                </Link>

                {/* 🌟 Programas Dropdown (Solo Click) 🌟 */}
                <div 
                    className="relative"
                    // Eliminadas las propiedades onMouseEnter y onMouseLeave
                >
                    <button 
                        className={`${GrayButtonClass} flex items-center`}
                        // Controla la apertura/cierre al hacer clic
                        onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                        aria-expanded={isProgramsOpen}
                        aria-controls="programs-dropdown"
                    >
                        Programas <span className="text-xs ml-1">▼</span>
                    </button>

                    {/* Dropdown Content */}
                    {isProgramsOpen && (
                        <div 
                            id="programs-dropdown"
                            className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-60 bg-white rounded-lg shadow-xl z-20 overflow-hidden text-left border border-gray-100"
                        >
                            <div className="py-1">
                                {programs.map((program) => (
                                    <Link 
                                        key={program.name}
                                        href={program.href} 
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition duration-150"
                                        onClick={handleLinkClick} // Cierra el menú
                                    >
                                        {program.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                
                {/* Call-to-Action Buttons with Custom Colors */}
                <Link href="/necesito-ayuda" className={NecesitoAyudaClass}>
                    Necesito Ayuda
                </Link>
                <Link href="/quiero-colaborar" className={QuieroColaborarClass}>
                    Quiero Colaborar
                </Link>
                
            </nav>
        </header>
    );
}