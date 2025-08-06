export const Insignia = () => {
    return (
        <div className="bg-white flex flex-col items-center justify-center py-20 px-4">
            <div className="relative text-center shadow-lg rounded-[30px] px-8 pt-10 pb-24 shadow-red-100 bg-white max-w-4xl w-full flex flex-col items-center justify-center">
                <h1 className="text-3xl md:text-4xl font-bold text-black mb-5">
                    "Empieza gratis. Si no realizas ninguna venta en 30 días, no pagas nada."
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Si no realizas una venta en los primeros 30 días, no nos debes nada. Sin cargos ocultos ni presiones.
                </p>

                {/* Imagen superpuesta */}
                {/*<div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 z-20">*/}
                {/*    <img*/}
                {/*        src="/Images/insigniaconnect.png"*/}
                {/*        alt="Insignia"*/}
                {/*        style={{*/}
                {/*            transform: "translateX(-50%) scale(2)",*/}
                {/*        }}*/}
                {/*    />*/}
                {/*</div>*/}
            </div>
        </div>
    );
};


