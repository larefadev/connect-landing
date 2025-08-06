import { useEffect, useRef, useState } from "react";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    location?: string;
    content: string;
    avatarSrc: string;
}

const Avatar = ({ className, children }: { className?: string; children: React.ReactNode }) => (
    <div className={`rounded-full overflow-hidden ${className}`}>
        {children}
    </div>
);

const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => (
    <div className={className}>
        {children}
    </div>
);

export default function Testimonials() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const allTestimonials: Testimonial[] = [
        {
            id: 1,
            name: "David R.",
            role: "Propietario de Taller",
            location: "Guadalajara",
            content: "Estaba buscando una forma flexible de ganar más sin agregar trabajo extra. Con La Refa, comencé a ganar en solo unos días. Es perfecto para mecánicos como yo que quieren aumentar ingresos sin manejar inventario.",
            avatarSrc: "https://i.pravatar.cc/100?img=11"
        },
        {
            id: 2,
            name: "Alejandra M.",
            role: "Propietaria – Refaccionaria Ale Parts",
            content: "Manejar inventario y proveedores era estresante. La Refa simplificó todo. Ahora vendo repuestos en línea sin almacenarlos, y mis clientes obtienen cotizaciones al instante.",
            avatarSrc: "https://i.pravatar.cc/100?img=5"
        },
        {
            id: 3,
            name: "Carlos G.",
            role: "Mecánico Independiente",
            content: "La Refa me ayudó a hacer crecer mi negocio significativamente. No necesito invertir en inventario para completar reparaciones. La plataforma me conecta con proveedores a nivel nacional.",
            avatarSrc: "https://i.pravatar.cc/100?img=12"
        },
        {
            id: 4,
            name: "Luis H.",
            role: "Propietario de Taller – Taller Hernández",
            content: "Solíamos perder ventas por falta de inventario. Ahora con La Refa, podemos ofrecer más de 250,000 repuestos y enviar a cualquier parte. Ha mejorado nuestra reputación y ganancias.",
            avatarSrc: "https://i.pravatar.cc/100?img=13"
        },
        {
            id: 5,
            name: "Rosa E.",
            role: "Emprendedora – Vendedora por WhatsApp",
            content: "Como mamá buscando ingresos extra, La Refa fue la solución perfecta. Comencé con cero inversión, y ahora gano compartiendo un catálogo digital vía WhatsApp.",
            avatarSrc: "https://i.pravatar.cc/100?img=6"
        },
        {
            id: 6,
            name: "Miguel A.",
            role: "Propietario de Tienda de Repuestos",
            content: "Antes de La Refa, luchaba por competir con tiendas más grandes. Ahora tengo acceso a un inventario masivo sin la carga financiera.",
            avatarSrc: "https://i.pravatar.cc/100?img=8"
        },
    ];

    const testimonialsRowOne: Testimonial[] = [
        ...allTestimonials.slice(0, 3),
        // Duplicados para scroll continuo
        ...allTestimonials.slice(0, 2),
    ];

    const testimonialsRowTwo: Testimonial[] = [
        ...allTestimonials.slice(3, 6),
        // Duplicados para scroll continuo
        ...allTestimonials.slice(3, 5),
    ];

    const rowOneRef = useRef<HTMLDivElement>(null);
    const rowTwoRef = useRef<HTMLDivElement>(null);

    // Funciones para el scroll móvil
    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const scrollLeft = scrollContainerRef.current.scrollLeft;
            const cardWidth = scrollContainerRef.current.offsetWidth;
            const newSlide = Math.round(scrollLeft / cardWidth);
            setCurrentSlide(newSlide);
        }
    };

    const scrollToSlide = (index: number) => {
        if (scrollContainerRef.current) {
            const cardWidth = scrollContainerRef.current.offsetWidth;
            scrollContainerRef.current.scrollTo({
                left: index * cardWidth,
                behavior: 'smooth'
            });
            setCurrentSlide(index);
        }
    };

    useEffect(() => {
        // Create keyframe animations for the testimonial rows
        const injectStyles = () => {
            const styleSheet = document.createElement('style');
            styleSheet.textContent = `
                @keyframes scrollRight {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                
                @keyframes scrollLeft {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(50%); }
                }
            `;
            document.head.appendChild(styleSheet);
        };
        injectStyles();

        // Agregar listener para scroll móvil
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <section id="testimonios" className="py-12 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10 px-4">
                    <div className="inline-block bg-red-100 text-red-500 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                        Testimonios
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Lo que nuestros socios están diciendo</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        Personas reales. Ganancias reales. Vea cómo La Refa impulsa a los revendedores en todo México.
                    </p>

                    {/* Estadística destacada */}
                    <div className="mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                            Más de 2,500 vendedores de autopartes en todo México confían en La Refa.
                        </h3>

                        {/* Card principal con el hombre sonriente */}
                        <div className="max-w-4xl mx-auto">
                            <Card className="bg-white rounded-[18px] shadow-lg shadow-red-200/30 border border-[#f9dede] relative overflow-hidden">
                                <div className="flex flex-col md:flex-row">
                                    {/* Imagen del hombre - lado izquierdo */}
                                    <div className="md:w-[300px] relative">
                                        <img
                                            src="/Images/mec1.jpg"
                                            alt="David R. - Independent Mechanics"
                                            className="h-full w-full object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-4 px-4">
                                            <div className="flex items-center">
                                                <div className="bg-red-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                                                    David R.
                                                </div>
                                            </div>
                                            <p className="text-white text-sm mt-1">Mecánico independiente</p>
                                        </div>
                                    </div>

                                    {/* Contenido del testimonio - lado derecho */}
                                    <div className="p-8 md:p-10 flex-1">
                                        <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                                            "Antes de La Refa, perdía clientes cada semana porque no podía permitirme tener en stock todas las piezas que necesitaban. Los rechazaba o los hacía esperar días, lo que perjudicaba mi negocio y mi reputación. Con La Refa, no necesito un almacén. Accedo a su enorme catálogo, establezco mis márgenes de beneficio y ellos se encargan de los envíos. Todo desde mi teléfono. En solo 3 meses, he aumentado mis ingresos en más de un 40 % y ahora atiendo a más clientes sin costes adicionales ni estrés."
                                        </blockquote>
                                        {/*<div>*/}
                                        {/*    <p className="font-bold text-gray-900 text-lg">David R.</p>*/}
                                        {/*    <p className="text-red-500 font-medium">Mecánico independiente</p>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vista Desktop - Scroll animado original */}
            <div className="hidden md:block">
                {/* Primera fila - desplazándose a la derecha */}
                <div className="w-full overflow-hidden mb-8">
                    <div
                        ref={rowOneRef}
                        className="flex w-max gap-6 px-4"
                        style={{ animation: "scrollRight 40s linear infinite" }}
                    >
                        {/* Original testimonials */}
                        {testimonialsRowOne.map((testimonial) => (
                            <Card key={`original-${testimonial.id}`} className="p-6 bg-white border border-gray-100 rounded-xl w-[380px] md:w-[420px] h-[280px] flex-shrink-0 shadow-lg shadow-red-200/50">
                                <div className="flex flex-col h-full">
                                    <blockquote className="flex-grow">
                                        <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                                    </blockquote>
                                    <div className="flex items-center mt-auto">
                                        <Avatar className="h-12 w-12 mr-4 ring-2 ring-red-100">
                                            <img src={testimonial.avatarSrc} alt={testimonial.name} className="w-full h-full object-cover" />
                                        </Avatar>
                                        <div>
                                            <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                            <p className="text-gray-500 text-sm">{testimonial.role}{testimonial.location ? `, ${testimonial.location}` : ''}</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                        {/* Duplicated testimonials for seamless loop */}
                        {testimonialsRowOne.map((testimonial) => (
                            <Card key={`duplicate-${testimonial.id}`} className="p-6 bg-white border border-gray-100 rounded-xl w-[380px] md:w-[420px] h-[280px] flex-shrink-0 shadow-lg shadow-red-200/30">
                                <div className="flex flex-col h-full">
                                    <blockquote className="flex-grow">
                                        <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                                    </blockquote>
                                    <div className="flex items-center mt-auto">
                                        <Avatar className="h-12 w-12 mr-4 ring-2 ring-red-100">
                                            <img src={testimonial.avatarSrc} alt={testimonial.name} className="w-full h-full object-cover" />
                                        </Avatar>
                                        <div>
                                            <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                            <p className="text-gray-500 text-sm">{testimonial.role}{testimonial.location ? `, ${testimonial.location}` : ''}</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Segunda fila - desplazándose a la derecha */}
                <div className="w-full overflow-hidden">
                    <div
                        ref={rowTwoRef}
                        className="flex w-max gap-6 px-4"
                        style={{ animation: "scrollRight 40s linear infinite" }}
                    >
                        {/* Original testimonials */}
                        {testimonialsRowTwo.map((testimonial) => (
                            <Card key={`original-${testimonial.id}`} className="p-6 bg-white border border-gray-100 rounded-xl w-[380px] md:w-[420px] h-[280px] flex-shrink-0 shadow-lg shadow-red-200/30">
                                <div className="flex flex-col h-full">
                                    <blockquote className="flex-grow">
                                        <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                                    </blockquote>
                                    <div className="flex items-center mt-auto">
                                        <Avatar className="h-12 w-12 mr-4 ring-2 ring-red-100">
                                            <img src={testimonial.avatarSrc} alt={testimonial.name} className="w-full h-full object-cover" />
                                        </Avatar>
                                        <div>
                                            <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                            <p className="text-gray-500 text-sm">{testimonial.role}{testimonial.location ? `, ${testimonial.location}` : ''}</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                        {/* Duplicated testimonials for seamless loop */}
                        {testimonialsRowTwo.map((testimonial) => (
                            <Card key={`duplicate-${testimonial.id}`} className="p-6 bg-white border border-gray-100 rounded-xl w-[380px] md:w-[420px] h-[280px] flex-shrink-0 shadow-lg shadow-red-200/30">
                                <div className="flex flex-col h-full">
                                    <blockquote className="flex-grow">
                                        <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                                    </blockquote>
                                    <div className="flex items-center mt-auto">
                                        <Avatar className="h-12 w-12 mr-4 ring-2 ring-red-100">
                                            <img src={testimonial.avatarSrc} alt={testimonial.name} className="w-full h-full object-cover" />
                                        </Avatar>
                                        <div>
                                            <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                            <p className="text-gray-500 text-sm">{testimonial.role}{testimonial.location ? `, ${testimonial.location}` : ''}</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Vista Móvil - Scroll horizontal con puntos */}
            <div className="md:hidden">
                <div
                    ref={scrollContainerRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {allTestimonials.map((testimonial) => (
                        <Card key={testimonial.id} className="p-6 bg-white border border-gray-100 rounded-xl w-[85vw] max-w-sm flex-shrink-0 snap-center shadow-lg shadow-red-200/50">
                            <div className="flex flex-col h-full">
                                <blockquote className="flex-grow">
                                    <p className="text-gray-700 mb-4 leading-relaxed text-sm">"{testimonial.content}"</p>
                                </blockquote>
                                <div className="flex items-center mt-auto">
                                    <Avatar className="h-10 w-10 mr-3 ring-2 ring-red-100">
                                        <img src={testimonial.avatarSrc} alt={testimonial.name} className="w-full h-full object-cover" />
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                                        <p className="text-gray-500 text-xs">{testimonial.role}{testimonial.location ? `, ${testimonial.location}` : ''}</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Puntos de navegación */}
                <div className="flex justify-center gap-2 mt-6">
                    {allTestimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToSlide(index)}
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                index === currentSlide ? 'bg-red-500' : 'bg-gray-300'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}