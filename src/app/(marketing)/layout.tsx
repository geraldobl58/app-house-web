import Navbar from "@/components/navbar";
import { Search } from "@/components/search";
import { ClerkProvider } from "@clerk/nextjs";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <div className="h-full">
        <Navbar />
        <main className="pt-20 h-full">
          <Search />
          {children}
        </main>
      </div>
    </ClerkProvider>
  );
};

export default MarketingLayout;
