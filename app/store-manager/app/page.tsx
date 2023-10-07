import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MainNav } from "@/components/main-nav";
import { Overview } from "@/components/overview";
import { RecentSales } from "@/components/recent-sales";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <MainNav />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1>Store Manager 2024</h1>

        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <RecentSales />
          <Overview />
        </div>
      </main>
    </>
  );
}
