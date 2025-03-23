import {Navbar} from "@/components/Shared/Navbar/Navbar";
import { SliderVideo } from "./(home)/components/SliderVideo";

export default function Home() {
  return (
    <>
    <div className=" relative bg-zinc-100 dark:bg-zinc-900">
      <Navbar />
      <SliderVideo />
    </div>
    </>
  );
}
