"use client";

import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

export const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  const onNavigate = (url: string) => {
    return router.push(url);
  };

  const routes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/buy",
      label: "Comprar",
    },
    {
      href: "/sale",
      label: "Vender",
    },
    {
      href: "/help",
      label: "Ajuda",
    },
    {
      href: "/about",
      label: "Sobre",
    },
    {
      href: "/contact",
      label: "Contato",
    },
  ];

  return (
    <div className="space-y-4 flex text-primary bg-secondary">
      <div className="flex-1 justify-center">
        <div className="lg:flex items-center justify-center">
          {routes.map((route) => (
            <div
              key={route.href}
              onClick={() => onNavigate(route.href)}
              className={cn(
                `
                text-muted-foreground
                text-xs
                group
                flex
                p-3
                mr-2
                w-full
                justify-start
                font-medium
                cursor-pointer
                hover:text-primary
                hover:bg-primary/10
                rounded-lg
                transition
                mb-2
              `,
                pathname === route.href && "text-primary"
              )}
            >
              <div className="flex gap-y-2 items-center flex-1">
                <div className="text-sm">{route.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
