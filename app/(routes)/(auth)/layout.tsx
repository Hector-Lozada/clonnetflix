import { Logo } from "@/components/Shared/Logo";


export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full">
      <div className="h-full relative">
      <div className="bg-black h-full min-h-screen absolute w-full -z-10">
        <div className="bg-[url('/back.jpg')] h-full opacity-40" />
      </div>
      <div className="px-8 py-5 max-w-7xl mx-auto">
        <Logo/>
      </div>
      <div className="h-full w-full max-w-md mx-auto">
        <div className="bg-black/70 px-14 py-14 rounded-3xl">{children}</div>
      </div>
      </div>
    </div>
  );
}