import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { getUserByEmail } from './data/user';
import bcrypt from 'bcryptjs';
import { signInSchema } from './lib/zod';

export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validateFields = signInSchema.safeParse(credentials);
                if (!validateFields.success) {
                    return null;
                }
                if(validateFields.success){
                    const {email, password} = validateFields.data;
                    const user = await getUserByEmail(email);

                    if(!user || !user.password){
                        return null;
                    } 
                    const passwordMatch = await bcrypt.compare(password, user.password);

                    if(passwordMatch){
                        return user;
                    }
                }
                return null;
            },
        })
    ]
} satisfies NextAuthConfig;