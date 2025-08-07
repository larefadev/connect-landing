import React, {useState} from "react";
import {CheckCircle, XCircle} from "lucide-react";
import type {Register} from "@/Types/Register.ts";
import {useRegister} from "@/Hooks/useRegister.ts";

const Alert = ({  className, children }: { variant?: string; className?: string; children: React.ReactNode }) => (
    <div className={`p-4 rounded-lg border ${className}`}>
        {children}
    </div>
);

const AlertTitle = ({ children }: { children: React.ReactNode }) => (
    <h4 className="font-semibold mb-1">{children}</h4>
);

const AlertDescription = ({ children }: { children: React.ReactNode }) => (
    <p className="text-sm">{children}</p>
);

type AlertState = {
    show: boolean;
    type: 'success' | 'error';
    title: string;
    message: string;
};

export function Form() {
    const {register} = useRegister();
    const [sendRegister, setSendRegister] = useState<Register>({
        email: "",
        name: "",
        lastname: "",
        phone: "",
        type: "",
        city: "",
    });
    const [alertState, setAlertState] = useState<AlertState>({
        show: false,
        type: 'success',
        title: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            setSendRegister({
                email: "",
                name: "",
                lastname: "",
                phone: "",
                type: "",
                city: "",
            });
            setTimeout(() => {
                setAlertState(prev => ({ ...prev, show: false }));
            }, 5000);
            await register(sendRegister);
            setAlertState({
                show: true,
                type: 'success',
                title: '¡Registro exitoso!',
                message: 'Tu solicitud ha sido enviada correctamente. Te contactaremos pronto.'
            });
        } catch (error : any) {
            setAlertState({
                show: true,
                type: 'error',
                title: 'Error al enviar',
                message: 'Hubo un problema al procesar tu solicitud. Por favor, inténtalo de nuevo.'
            });

            setTimeout(() => {
                setAlertState(prev => ({ ...prev, show: false }));
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const closeAlert = () => {
        setAlertState(prev => ({ ...prev, show: false }));
    };

    const renderAlert = () => {
        if (!alertState.show) return null;

        return (
            <div className="max-w-md mx-auto mb-6">
                <Alert
                    variant={alertState.type === 'error' ? 'destructive' : 'default'}
                    className={`relative ${
                        alertState.type === 'success'
                            ? 'bg-green-50 border-green-200 text-green-800'
                            : 'bg-red-50 border-red-200 text-red-800'
                    }`}
                >
                    {alertState.type === 'success' ? (
                        <CheckCircle className="h-4 w-4 text-green-600 inline mr-2" />
                    ) : (
                        <XCircle className="h-4 w-4 text-red-600 inline mr-2" />
                    )}
                    <AlertTitle>{alertState.title}</AlertTitle>
                    <AlertDescription>
                        {alertState.message}
                    </AlertDescription>

                    <button
                        onClick={closeAlert}
                        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors text-lg"
                        aria-label="Cerrar notificación"
                    >
                        ×
                    </button>
                </Alert>
            </div>
        );
    };

    return (
        <section id={"contacto"} className="bg-gradient-to-br from-red-50 to-pink-50 min-h-screen flex items-center">
            <div className="w-full max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Comienza a Vender Autopartes Hoy
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Sin necesidad de inventario. Establece tu ganancia. Nosotros enviamos por ti. Únete a miles de asociados en todo México.
                    </p>
                </div>

                {renderAlert()}

                <div className="flex justify-center">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
                        <div className="text-center mb-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                Únete a más de 2,500 asociados — hagamos tu primera venta juntos.
                            </h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    value={sendRegister.name}
                                    className="border border-gray-300 rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                    onChange={(e) => setSendRegister({...sendRegister, name: e.target.value})}
                                    disabled={isSubmitting}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Apellido"
                                    value={sendRegister.lastname}
                                    className="border border-gray-300 rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                    onChange={(e) => setSendRegister({...sendRegister, lastname: e.target.value})}
                                    disabled={isSubmitting}
                                    required
                                />
                                <input
                                    type="tel"
                                    placeholder="Número de Teléfono"
                                    value={sendRegister.phone}
                                    className="border border-gray-300 rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                    onChange={(e) => setSendRegister({...sendRegister, phone: e.target.value})}
                                    disabled={isSubmitting}
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Correo Electrónico"
                                    value={sendRegister.email}
                                    className="border border-gray-300 rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                    onChange={(e) => setSendRegister({...sendRegister, email: e.target.value})}
                                    disabled={isSubmitting}
                                    required
                                />
                                <input
                                    type="city"
                                    placeholder="¿En qué ciudad esta tu negocio?"
                                    value={sendRegister.email}
                                    className="border border-gray-300 rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                    onChange={(e) => setSendRegister({...sendRegister, city: e.target.value})}
                                    disabled={isSubmitting}
                                    required
                                />
                            </div>

                            <div className="relative">
                                <select
                                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    defaultValue=""
                                    onChange={(e) => setSendRegister({...sendRegister, type: e.target.value})}
                                >
                                    <option value="" disabled>
                                        Selecciona una opción
                                    </option>
                                    <option value="refaccionaria">Refaccionaria</option>
                                    <option value="taller">Taller Mecánico</option>
                                    <option value="profesionista">
                                        No tengo, soy profesionista en la industria automotriz
                                    </option>
                                    <option value="ninguna">Ninguna opción</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full font-semibold text-sm py-4 rounded-lg transition-all transform ${
                                    isSubmitting
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 hover:scale-[1.02] active:scale-[0.98]'
                                } text-white shadow-lg`}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Enviando...
                                    </span>
                                ) : (
                                    <span className="flex items-center justify-center">
                                        Únete Ahora
                                        <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}