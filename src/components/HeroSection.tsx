import { ArrowRight, Badge, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl">
      <h1 className="text-6xl lg:max-w-4xl font-bold text-center py-6">
        Transform Doc's into{" "}
        <span className=" relative inline-block">
          <span className=" relative z-10 px-2" aria-hidden="true">
            Usable{" "}
          </span>
          <span className="absolute inset-0 bg-blue-300/70 -rotate-2 rounded-lg transform -skew-y-1 "></span>
        </span>
        Formats
      </h1>
      <h2 className="text-lg  sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600">
        Get documents Handy in few seconds{" "}
      </h2>
      <Button
        variant={"link"}
        size="lg"
        className="bg-blue-300 mt-6 rounded-full "
      >
        <Link href="/dashboard" className="flex items-center gap-2">
          <span className="text-xl "> Try my-tool</span>
          <ArrowRight className="animate-bounce font-bold " />
        </Link>
      </Button>
    </section>
  );
};
