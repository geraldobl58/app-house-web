import Link from "next/link";
import Image from "next/image";

import { UserButton, auth } from "@clerk/nextjs";

import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

import { Navigation } from "./navigation";
import { MobileNavigation } from "./mobile-navigation";

const Navbar = async () => {
  const { userId } = auth();

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
        {userId ? (
          <>
            <Button size="default" variant="ghost" asChild>
              <Link href="/dashboard" passHref className="flex">
                Dashboard
                <Sparkles className="h-4 w-4 fill-white text-white ml-2" />
              </Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        ) : (
          <>
            <Button size="default" variant="premiun" asChild>
              <Link href="/sign-in" passHref className="flex">
                Anunciar{" "}
                <Sparkles className="h-4 w-4 fill-white text-white ml-2" />
              </Link>
            </Button>
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
