export const Mock = () => {
    return (
        <div className="w-full bg-white py-16 px-6 flex justify-center">
            <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* Texto izquierdo */}
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0a1c38] leading-tight">
                        ¿Cansado de <br />
                        Perder Ventas <br />
                        Porque <br />
                        <span className="text-red-600">No Tienes la <br /> Pieza Correcta?</span>
                    </h2>
                    <div className="h-1 w-16 bg-red-600 mt-3 mx-auto lg:mx-0"></div>
                </div>

                {/* Imagen centrada y agrandada */}
                <div className="flex justify-center">
                    <img
                        src="/Images/mock.png"
                        alt="Mockup"
                        className="w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px]"
                    />
                </div>

                {/* Texto derecho */}
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-red-600 leading-tight">
                        Expande tu <br /> Negocio
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#0a1c38]">
                        Sin Limitaciones
                    </h3>
                    <div className="h-1 w-16 bg-red-600 mt-3 mx-auto lg:mx-0"></div>
                </div>

            </div>
        </div>
    );
};
