"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "./LoginForm.form";
import { useState } from "react";
import { login } from "@/actions/login";
import { FormError } from "./FormError";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";


export function LoginForm() {
  const router = useRouter();
    const [error, setError] = useState<string | undefined>("");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        try{
          login(values).then((data) => {
              setError(data?.error);
              if(data?.success){
                toast({
                  title: "Inicio de sesión exitoso",
                  description: "Bienvenido a UTELVTFLIX",
                });
              }
            })
            router.push("/profiles");
        }
        catch(error){
            console.log(error);
        }
    };
    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full gap-4 flex flex-col">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Correo Electrónico" {...field} className="h-14 text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Contraseña" type="password" {...field} className="h-14 text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error}/>
            <Button type="submit" className="w-full">Iniciar Sesión</Button>
          </form>
        </Form>
      )
}