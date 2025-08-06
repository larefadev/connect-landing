import { ArrowUpRight } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="w-full bg-white pt-5 text-[#333] text-sm">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Logo + Description */}
                <div>
                    <img src="/Images/Connect-isotipo.svg" className="h-30" alt="Logo" />
                    <p className="text-[#666] text-[13px] leading-relaxed max-w-[340px]">
                        Vende repuestos sin inventario. Tú decides cuánto ganas.
                        Accede a más de 250,000 autopartes de nuestro catálogo.
                    </p>
                </div>

                {/* Pages */}
                <div>
                    <h3 className="font-semibold mb-3">Páginas</h3>
                    <ul className="space-y-2 text-[13px] text-[#333]">
                        <li><a href="#" className="hover:underline">Cómo funciona</a></li>
                        <li><a href="#" className="hover:underline">Características</a></li>
                        <li><a href="#" className="hover:underline">Testimonios</a></li>
                        <li><a href="#" className="hover:underline">Precios</a></li>
                        <li><a href="#" className="hover:underline">Preguntas frecuentes</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="font-semibold mb-3">Redes Sociales</h3>
                    <ul className="space-y-2 text-[13px] text-[#333]">
                        <li><a href="#" className="hover:underline">X</a></li>
                        <li><a href="#" className="hover:underline">Instagram</a></li>
                        <li><a href="#" className="hover:underline">Facebook</a></li>
                        <li><a href="#" className="hover:underline">Discord</a></li>
                    </ul>
                </div>

                {/* Subscribe */}
                <div>
                    <h3 className="font-semibold mb-3">Suscríbete</h3>
                    <p className="text-[#666] text-[13px] mb-3 leading-tight">
                        Regístrate a nuestro boletín para actualizaciones de funciones y nuestro amor eterno.
                    </p>
                    <div className="flex rounded-md border border-[#ccc] overflow-hidden max-w-[280px]">
                        <input
                            type="email"
                            placeholder="tucorreo@dominio.com"
                            className="w-full px-3 py-2 text-[13px] outline-none"
                        />
                        <button className="bg-red-600 hover:bg-red-700 text-white px-3 flex items-center justify-center">
                            <ArrowUpRight size={16} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Divider line */}
            <div className="border-t border-[#ccc] mt-16" />

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-[11px] text-[#666]">
                <span>© 2025 La Refa. Todos los Derechos Reservados.</span>
                <div className="flex gap-6 mt-2 md:mt-0">
                    <a href="#" className="hover:underline">Política de privacidad</a>
                    <a href="#" className="hover:underline">Términos de servicio</a>
                </div>
            </div>
        </footer>
    );
};