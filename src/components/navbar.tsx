"use client";

import Link from "next/link";

// import { UserButton } from "@clerk/nextjs";

import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Navigation } from "@/components/navigation";
import { MobileNavigation } from "@/components/mobile-navigation";

import Image from "next/image";

const Navbar = () => {
  return (
    <div
      className="
        fixed 
        w-full 
        z-50
        flex 
        justify-between
        items-center
        py-2
        px-4
        border-b
        border-primary/10
        bg-secondary
      "
    >
      <div className="flex items-center">
        <MobileNavigation />
        <Link href="/" passHref>
          <Image alt="Logo" src="/logo.svg" width={40} height={40} />
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <div className="hidden lg:block mt-2">
          <Navigation />
        </div>
        <Button size="default" variant="premiun" asChild>
          <Link href="/sign-in" passHref className="flex">
            Anunciar <Sparkles className="h-4 w-4 fill-white text-white ml-2" />
          </Link>
        </Button>
        <Button size="default" variant="ghost" asChild>
          <Link href="/sign-in" passHref>
            Entrar
          </Link>
        </Button>
        {/* <UserButton afterSignOutUrl="/" /> */}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
