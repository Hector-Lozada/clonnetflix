import { z } from "zod";
export const formSchema = z.object({
    email: z.string().min(2, {
        message: "Email es muy corto",
    }),
    password: z.string().min(2, {
        message: "Password es muy corta",
    }),
    repeatPassword: z.string(),
}).refine(data => data.password === data.repeatPassword,{
    message: "Las contraseñas no coinciden",
    path: ["repeatPassword"],
} )