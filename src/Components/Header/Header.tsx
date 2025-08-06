import { useParallax } from "../../Hooks/useParallax.ts";
import {ArrowRight, Play} from "lucide-react";

export const Header = () => {
    const backgroundOffset = useParallax(0.3);
    return (
        <div className="relative w-full bg-white overflow-hidden">
            {/* Fondo con efecto parallax */}
            <div
                className="absolute inset-0
        bg-[linear-gradient(to_right,#0000000d_1px,transparent_1px),linear-gradient(to_bottom,#0000000d_1px,transparent_1px)]
        bg-[size:36px_36px]
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]
        z-0 transition-transform duration-200 ease-out"
                style={{ transform: `translateY(${backgroundOffset}px)` }}
            />

            <div className="relative z-10 max-w-screen-xl mx-auto px-6 pt-6 lg:px-20 lg:pt-10">
                {/* Navbar */}
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold flex items-center gap-2">
                        <img src="/Images/Connect-isotipo.svg"  alt="Logo" className="h-50 w-auto rounded-full" />
                    </div>
                    <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700 font-inter">
                        <a
                            className="hover:text-red-600 transition-colors cursor-pointer"
                            onClick={() => {
                                const section = document.getElementById('como-funciona');
                                section?.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }}
                        >
                            Cómo Funciona
                        </a>

                        <a
                            className="hover:text-red-600 transition-colors cursor-pointer"
                            onClick={() => {
                                const section = document.getElementById('precios');
                                section?.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }}
                        >
                            Precios
                        </a>

                        <a
                            className="hover:text-red-600 transition-colors cursor-pointer"
                            onClick={() => {
                                const section = document.getElementById('testimonios');
                                section?.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }}
                        >
                            Testimonios
                        </a>
                        <a
                            className="hover:text-red-600 transition-colors cursor-pointer"
                            onClick={() => {
                                const section = document.getElementById('contacto');
                                section?.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }}
                        >
                            Contacto
                        </a>
                    </nav>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full text-sm font-medium"  onClick={() => {
                        const section = document.getElementById('contacto');
                        section?.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }}>
                        Comenzar Hoy
                    </button>
                </div>

                {/* Hero Section */}
                <div className="mt-20 text-center max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-black leading-tight">
                        Vende refacciones sin inventario<br />
                        <span>Tú decides cuánto ganas</span>
                    </h1>
                    <p className="mt-6 text-gray-600 text-lg">
                        Inicia tu propio negocio de refacciones con cero inversión. Establece tu
                        margen de ganancia, y nosotros nos encargamos del inventario, envíos y atención al cliente.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                        {/* Botón Comenzar Hoy */}
                        <button   onClick={() => {
                            const section = document.getElementById('precios');
                            section?.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }} className="bg-gradient-to-r from-red-500 to-red-600 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold text-base flex items-center gap-2 shadow-lg hover:shadow-xl transition-all">
                            Comenzar Hoy
                            <ArrowRight size={16} strokeWidth={2} />
                        </button>

                        {/* Botón Cómo funciona */}
                        <button className="flex items-center gap-2 text-gray-900 font-medium text-base hover:text-red-600 transition-colors"   onClick={() => {
                            const section = document.getElementById('como-funciona');
                            section?.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }}>
                            <div className="w-7 h-7 border-2 border-red-600 rounded-full flex items-center justify-center">
                                <Play size={14} className="text-red-600 ml-0.5" fill="currentColor" />
                            </div>
                            Cómo funciona
                        </button>
                    </div>
                </div>

                {/* Imagen del dashboard con parallax */}
                <div
                    className="mt-16 flex justify-center transition-transform duration-200 ease-out"
                >
                    <img
                        src="/Images/Header.png"
                        alt="Vista previa del dashboard"
                        className="max-w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
};
