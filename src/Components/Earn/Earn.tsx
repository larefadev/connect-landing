const personas = [
    {
        title: "Talleres Mecánicos",
        description:
            "Ofrece más a tus clientes sin almacenar ni una sola refacción. Solo encuéntrala, fija tu ganancia y nosotros la enviamos por ti.",
        image: "/Images/mec4.jpg",
    },
    {
        title: "Refaccionarias Pequeñas",
        description:
            "Compite con las grandes tiendas. Expande tu catálogo al instante y no pierdas más ventas por falta de inventario.",
        image: "/Images/mc3.jpg",
    },
    {
        title: "Mecánicos Independientes",
        description:
            "Ofrece más a tus clientes sin almacenar nada. Solo encuéntrala, fija tu ganancia y nosotros la enviamos por ti.",
        image: "/Images/mec2.jpg",
    },
];

export const Earn = () => {
    return (
        <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center">
                <div className="mb-3">
          <span className="inline-block bg-red-100 text-red-500 text-sm font-semibold px-4 py-1 rounded-full mb-5">
            Para quién es
          </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    ¿Quién puede ganar con Connect?
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-16">
                    Ya sea que repares autos, vendas en línea o tengas una refaccionaria,
                    Connect está diseñado para hacer crecer tus ingresos sin riesgo de inventario.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {personas.map((persona, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md p-2 text-left hover:shadow-lg transition"
                        >
                            <img
                                src={persona.image}
                                alt={persona.title}
                                className="rounded-xl w-full h-[460px] object-cover align-middle"
                            />
                            <div className="px-1 py-2">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {persona.title}
                                </h3>
                                <p className="text-gray-700 text-base leading-relaxed">
                                    {persona.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
