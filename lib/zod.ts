import { object, string} from 'zod';

export const signInSchema = object({
    email: string({ required_error: 'Email es requerido' }).email("Email inválido").min(2,"Email es muy corto"),
    password: string({ required_error: "Contraseña es requerida"}).min(1, "Contraseña es muy corta"),
})