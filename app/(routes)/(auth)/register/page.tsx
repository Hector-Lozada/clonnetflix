import Link from "next/link";

export default function RegisterPage (){
  return <div>
    <p className="text-3xl font-bold text-left mb-7">Registro de usuario</p>
    <p>Register form...</p>
    <div className="mt-4 flex gap-1">
        <p className="text-white opacity-70">¿Ya tienes cuenta?</p>
        <Link href="/login" className="opacity-1 text-white">Iniciar Sesión</Link>
    </div>
  </div>
}
