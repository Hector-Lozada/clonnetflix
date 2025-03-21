import { ModeToggle } from "@/components/mode-toggle";
import Navbar from "@/components/Shared/Navbar/Navbar";

export default function Home() {
  return (
    <>
    <div className=" relative bg-zinc-100 dark:bg-zinc-900">
      <Navbar />
      <ModeToggle />
    </div>
    </>
  );
}
