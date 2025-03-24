import NextAuth from "next-auth"
import { db } from "./lib/db"
import {PrismaAdapter} from "@next-auth/prisma-adapter"
import authConfig from "./auth.config"
import { log } from "console"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  callbacks: {
    async session({token, session}){
      if(token.sub && session.user){
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({token}){
      console.log({token});
      return token;
    }
  },
  session: {strategy: 'jwt'},
  ...authConfig
})