"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
export function Terms(){
    const [showExtraTerms, setShowExtraTerms] = useState(false);
    return <div className="text-xs mt-4 mb-10 text-gray-600 max-w-72">
        <div className="mb-5">
            <span>
                Esta pagina utiliza Google reCaPTCHA para asegurar que no eres un robot.
            </span>
            <Button 
            variant="ghost" 
            onClick={() => setShowExtraTerms(!showExtraTerms)}
            className="opaciti-1 text-[#0071eb] hover:bg-transparent p-0 ml-1 h-fit">
                Más información
            </Button>
        </div>
        <div className="h-28">{showExtraTerms && <p>La información recopilada por Google reCAPTCHA está sujeta a la Política de Privacidad y las Condiciones de servicio de Google, y se utilizada para proporcionar, mantener y mejorar el servicio de reCAPTCHA, así como para fines generales de seguridad (Google no la utiliza para publicidad personalizada.)</p>}</div>
    </div>;
}