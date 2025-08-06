export const Question = () => {
    return (
        <div className="w-full flex justify-center py-8 px-4 md:py-12">
            <div className="bg-pink-100 rounded-3xl max-w-screen-xl w-full relative overflow-hidden">
                {/* Mobile Design (Row with image on the right) */}
                <div className="flex md:hidden flex-row items-center pl-5 pr-2 py-5">
                    {/* Text Section - Mobile */}
                    <div className="w-2/3 z-10">
                        <h2 className="text-xl font-bold text-black mb-2 leading-tight">
                            ¿Cansado de perder ventas porque no tienes la pieza correcta?
                        </h2>
                        <p className="text-gray-800 text-xs leading-tight">
                            No deberías tener que decir "no lo tenemos" nunca más. Con Connect, puedes vender un catálogo enorme sin comprar ni almacenar nada.
                        </p>
                    </div>

                    {/* Image Section - Mobile */}
                    <div className="w-1/3 flex justify-end">
                        <img
                            src="/Images/Confundida.png"
                            alt="Concerned worker"
                            className="h-auto w-auto max-h-[140px] object-contain"
                            style={{
                                transform: 'scale(3.5) translateX(20px)', // escala más controlada y desplazamiento horizontal
                                transformOrigin: 'right center',
                            }}
                        />
                    </div>
                </div>

                {/* Desktop Design (Side by side with large image) */}
                <div className="hidden md:flex flex-row items-center justify-between pl-14 pr-0 py-10">
                    {/* Text Section - Desktop */}
                    <div className="w-1/2 z-10 pr-4">
                        <h2 className="text-4xl font-bold text-black mb-4 leading-tight">
                            ¿Cansado de perder ventas porque no tienes la pieza correcta?
                        </h2>
                        <p className="text-gray-800 text-base leading-relaxed">
                            No deberías tener que decir "no lo tenemos" nunca más. Con La Connect, puedes vender un catálogo enorme sin comprar ni almacenar nada.
                        </p>
                    </div>

                    {/* Image Section - Desktop */}
                    <div className="w-1/2 flex justify-end items-center">
                        <img
                            src="/Images/Confundida.png"
                            alt="Concerned worker"
                            className="h-auto w-auto max-h-[380px] object-contain"
                            style={{
                                transform: 'scale(1.8)',
                                transformOrigin: 'right center',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};