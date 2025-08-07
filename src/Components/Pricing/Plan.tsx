import {useEffect, useRef, useState} from "react";

export const Plan = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const scrollContainerRef = useRef(null);

    const plans = [
        {
            name: "Gratuito",
            title: "Ideal para Principiantes",
            description:
                "Perfecto si apenas estás comenzando o probando las aguas. Sin costo inicial—comienza a vender refacciones hoy y aprende sin ningún riesgo.",
            price: "$0",
            features: [
                "Hasta 200 productos en tu catálogo",
                "Acceso limitado al panel de control",
                "Soporte por email",
            ],
            buttonStyle: "border border-gray-300 text-gray-800 hover:bg-gray-50",
            tag: null,
            highlighted: false,
        },
        {
            name: "Pro",
            title: "Para Tiendas de Autos Establecidas",
            description:
                "Ideal para talleres que ya están en el negocio. Accede a herramientas avanzadas, catálogos personalizados y desbloquea más funciones para tus operaciones diarias.",
            price: "$999",
            features: [
                "Hasta 2,000 productos en tu catálogo",
                "Acceso completo al panel de control",
                "Soporte prioritario",
                "Acceso a promociones especiales",
                "Integración con ERP",
            ],
            buttonStyle: "bg-red-500 text-white hover:bg-red-600",
            tag: "Recomendado para ti",
            highlighted: true,
        },
        {
            name: "Elite",
            title: "Para Negocios en Crecimiento",
            description:
                "Lleva tus ventas al siguiente nivel con acceso completo a funciones premium, soporte dedicado y todo lo que necesitas para expandir tu alcance.",
            price: "$1,999",
            features: [
                "Catálogo ilimitado",
                "Reportes de ventas",
                "Recomendaciones automáticas de precios",
                "Soporte vía WhatsApp y teléfono",
                "Integración automática de dropshipping",
            ],
            buttonStyle: "border border-gray-300 text-gray-800 hover:bg-gray-50",
            tag: null,
            highlighted: false,
        },
    ];

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            // @ts-ignore
            const scrollLeft = scrollContainerRef.current.scrollLeft;
            // @ts-ignore
            const cardWidth = scrollContainerRef.current.offsetWidth;
            const newSlide = Math.round(scrollLeft / cardWidth);
            setCurrentSlide(newSlide);
        }
    };

    const scrollToSlide = (index:number) => {
        if (scrollContainerRef.current) {
            // @ts-ignore
            const cardWidth = scrollContainerRef.current.offsetWidth;
            // @ts-ignore
            scrollContainerRef.current.scrollTo({
                left: index * cardWidth,
                behavior: 'smooth'
            });
            setCurrentSlide(index);
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            // @ts-ignore
            container.addEventListener('scroll', handleScroll);
            // @ts-ignore
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <section id={"precios"} className="bg-[#f6fafe] py-16 px-4 md:px-8 min-h-screen">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="inline-block bg-red-100 text-red-500 text-xs font-semibold px-3 py-1 rounded-full mb-4">Planes</h2>
                <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
                    Elige el Plan que se Adapte a tu Negocio
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                    Ya sea que apenas estés comenzando o escalando rápidamente — Connect tiene un plan
                    para cada tipo de vendedor.
                </p>

                {/*<div className="flex justify-center items-center gap-2">*/}
                {/*    <button className="bg-red-100 text-red-600 text-sm font-medium rounded-full px-4 py-1 flex items-center gap-2">*/}
                {/*        Facturación anual*/}
                {/*        <span className="bg-red-500 text-white font-bold px-2 py-0.5 rounded-full text-xs">*/}
                {/*            10% DESC*/}
                {/*        </span>*/}
                {/*    </button>*/}
                {/*    <button className="text-sm font-medium text-gray-600 px-4 py-1">*/}
                {/*        Facturación mensual*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>

            {/* Vista desktop - Grid normal */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-lg mx-auto">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative rounded-2xl p-8 transition-all duration-300 ${
                            plan.highlighted
                                ? "bg-red-50 border-2 border-red-200 shadow-lg"
                                : "bg-white border border-gray-200 shadow-sm"
                        }`}
                    >
                        {plan.tag && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white text-sm font-medium px-4 py-1 rounded-full border-4 border-gray-50 w-max">
                                {plan.tag}
                            </div>
                        )}

                        <div className="text-center mb-6">
                            <div
                                className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 ${
                                    plan.name === "Pro"
                                        ? "bg-red-100 text-red-600"
                                        : plan.name === "Elite"
                                            ? "bg-gray-200 text-gray-700"
                                            : "bg-gray-100 text-gray-700"
                                }`}
                            >
                                {plan.name}
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3">{plan.title}</h3>
                        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                            {plan.description}
                        </p>

                        <div className="text-4xl font-extrabold text-gray-900 mb-8">
                            {plan.price}
                            <span className="text-lg font-normal text-gray-500">/mes</span>
                        </div>

                        <div className="mb-8">
                            <h4 className="text-sm font-semibold text-gray-900 mb-4">Características</h4>
                            <ul className="space-y-3">
                                {plan.features.map((feature, featureIndex) => (
                                    <li
                                        key={featureIndex}
                                        className="flex items-start gap-3 text-sm text-gray-700"
                                    >
                                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg
                                                className="w-3 h-3 text-green-600"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <span className="leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button
                            className={`w-full h-11 rounded-full font-semibold text-sm transition-colors ${plan.buttonStyle}`}
                            onClick={() => {
                                const contactoSection = document.getElementById('contacto');
                                contactoSection?.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }}
                        >
                            Comenzar
                        </button>
                    </div>
                ))}
            </div>

            {/* Vista móvil - Scroll horizontal */}
            <div className="md:hidden">
                <div
                    ref={scrollContainerRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl p-6 flex-shrink-0 w-[85vw] max-w-sm snap-center transition-all duration-300 ${
                                plan.highlighted
                                    ? "bg-red-50 border-2 border-red-200 shadow-lg"
                                    : "bg-white border border-gray-200 shadow-sm"
                            }`}
                        >
                            {plan.tag && (
                                <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-full border-4 border-gray-50 w-max">
                                    {plan.tag}
                                </div>
                            )}

                            <div className="text-left mb-4">
                                <div
                                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                                        plan.name === "Pro"
                                            ? "bg-red-100 text-red-600"
                                            : plan.name === "Elite"
                                                ? "bg-gray-200 text-gray-700"
                                                : "bg-gray-100 text-gray-700"
                                    }`}
                                >
                                    {plan.name}
                                </div>
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 mb-2">{plan.title}</h3>
                            <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                                {plan.description}
                            </p>

                            <div className="text-3xl font-extrabold text-gray-900 mb-6">
                                {plan.price}
                                <span className="text-sm font-normal text-gray-500">/mes</span>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-xs font-semibold text-gray-900 mb-3">Características</h4>
                                <ul className="space-y-2">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li
                                            key={featureIndex}
                                            className="flex items-start gap-2 text-xs text-gray-700"
                                        >
                                            <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <svg
                                                    className="w-2 h-2 text-green-600"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                            <span className="leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                className={`w-full h-10 rounded-full font-semibold text-sm transition-colors ${plan.buttonStyle}`}
                                onClick={() => {
                                    const contactoSection = document.getElementById('contacto');
                                    contactoSection?.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'
                                    });
                                }}
                            >
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>

                {/* Puntos de navegación */}
                <div className="flex justify-center gap-2 mt-6">
                    {plans.map((_, index) => (
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
};