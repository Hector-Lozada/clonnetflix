"use server";

import { signIn } from '@/auth';
import { signInSchema } from '@/lib/zod';
import { error } from 'console';
import { AuthError } from 'next-auth';
import { z } from 'zod';

export const login = async (values: z.infer<typeof signInSchema>) => {
    const validatedFields = signInSchema.safeParse(values);
    if(!validatedFields){
        return { error: 'Error de autenticación' };
    }
    const {email, password} = validatedFields.data;
  try {
    await signIn("credentials", {
        email,
        password,
        redirectTo: "/profiles",
    })
    return {success: true};
  } catch (error) {
    if (error instanceof AuthError) {
        switch(error.type){
            case "CredentialsSignin":
                return { error: 'Credenciales incorrectas' };
            default:
                return { error: 'Error de autenticación' };
        }
    }
  }
};