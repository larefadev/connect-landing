export const Benefits = () => {
    const benefits = [
        {
            title: "Sin Inventario Necesario",
            description: "Olvídate del almacenamiento. Nosotros manejamos todo el almacenamiento y envío de productos.",
            icon: "🏠",
        },
        {
            title: "Control Flexible de Precios",
            description: "Establece tus propios márgenes de ganancia y ajusta precios según tu estrategia de negocio.",
            icon: "💲",
        },
        {
            title: "Envíos Rápidos y Confiables",
            description: "Garantizamos entregas puntuales y seguras directamente a la puerta de tus clientes.",
            icon: "🌊",
        },
        {
            title: "Catálogo Extenso de Productos",
            description: "Accede a más de 250,000 refacciones actualizados en tiempo real con detalles precisos.",
            icon: "📄",
        },
        {
            title: "Equipo de Soporte Dedicado",
            description: "Cuenta con nuestro equipo especializado disponible para resolver todas tus dudas.",
            icon: "🎧",
        },
        {
            title: "Configuración Simple",
            description: "Comienza a vender en minutos con nuestro proceso de registro fácil y rápido.",
            icon: "⚙️",
        },
    ];

    return (
        <section className="py-20 px-6 lg:px-10 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                {/* Etiqueta */}
                <span className="inline-block bg-red-100 text-red-500 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    Beneficios
                </span>

                {/* Título */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900">
                    Por Qué Elegir Nuestra Plataforma
                </h2>

                {/* Subtítulo */}
                <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-base md:text-lg">
                    Haz crecer tu negocio de refacciones sin el estrés del inventario, logística o gastos generales.
                    Hacemos que sea fácil escalar, ganar y tener éxito—en tus propios términos.
                </p>

                {/* Grid de beneficios */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 flex flex-col items-start text-left border border-gray-100 hover:shadow-sm transition"
                        >
                            <div className="text-2xl mb-4">{benefit.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};