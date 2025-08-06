import { ArrowUpRight } from "lucide-react";

export const Steps = () => {
    const steps = [
        {
            number: "1",
            title: "Elige tus Refacciones",
            description:
                "Navega entre más de 250,000 repuestos de autos en nuestro catálogo, actualizado en tiempo real con detalles precisos e imágenes.",
            color: "bg-pink-100 text-pink-500",
            icon: "🛠️",
        },
        {
            number: "2",
            title: "Establece tu Ganancia",
            description:
                "Define tus propias ganancias agregando un margen personalizado sobre los precios de mayoreo — la ganancia es tuya para controlar.",
            color: "bg-orange-100 text-orange-500",
            icon: "💰",
        },
        {
            number: "3",
            title: "Nosotros Enviamos por Ti",
            description:
                "Una vez que tu cliente realiza un pedido, empacamos y entregamos el producto directamente a su puerta — a nivel nacional.",
            color: "bg-blue-100 text-blue-500",
            icon: "🚚",
        },
    ];

    return (
        <section id={"como-funciona"} className="bg-[#f6fafe] py-20 px-6 lg:px-10">
            <div className="max-w-6xl mx-auto text-center">
                <span className="inline-block bg-red-100 text-red-500 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    Pasos
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900">
                    Cómo Funciona - 3 Pasos Simples
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-base md:text-lg">
                    La Refa hace que sea fácil para cualquiera comenzar a vender repuestos de autos en línea. Con nuestro
                    modelo de dropshipping, tú eliges qué vender, estableces tu propia ganancia, y nosotros nos encargamos del
                    resto — incluyendo envíos e inventario.
                </p>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" data-aos="fade-up"
                     data-aos-anchor-placement="top-bottom">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-xl border border-gray-200 p-6 pt-12 text-left shadow-sm hover:shadow-md transition"
                        >
                            {/* Número grande en el fondo */}
                            <span
                                className={`absolute -top-6 -left-4 text-[100px] font-bold ${step.color} opacity-10 select-none`}
                            >
                                {step.number}
                            </span>

                            {/* Icono centrado en fondo de color */}
                            <div
                                className={`w-12 h-12 rounded-md flex items-center justify-center ${step.color} mb-4`}
                            >
                                <span className="text-xl">{step.icon}</span>
                            </div>

                            {/* Título y contenido */}
                            <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                            <p className="text-gray-600 mt-2 text-sm">{step.description}</p>

                            {/* Link */}
                            <a
                                href="#"
                                className="text-red-500 font-semibold mt-4 inline-flex items-center text-sm hover:underline"
                            >
                                Saber más <ArrowUpRight className="ml-1 h-4 w-4" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};