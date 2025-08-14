import Link from "next/link";
import Image from "next/image";

import { getFrontData, getLogoData } from "./data";
import type { FrontPage, FrontPageData, LogoData } from "@/types/type";

export default async function Home() {

  const front: FrontPageData = await getFrontData();
  const logo: LogoData = await getLogoData();  

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6fbff] to-[#bcd3e3]">

      <div className="mx-auto flex max-w-3xl items-center justify-center md:justify-start px-4 py-6">
        <div className="relative h-10 w-32 md:h-12 md:w-40">
          {logo?.data && (
            <Image 
              src={`/assets/images/${logo.data.img}`}
              alt="logo"
              width={250}
              height={250}
              className="h-full w-full object-contain"
              priority
            />
          )}
        </div>
      </div>

      <section className="mx-auto grid max-w-3xl grid-cols-1 gap-6 px-4 pb-12 md:grid-cols-3">
        {front?.data?.map((p: FrontPage, i: number) => (
          <Link
            key={p.id}
            href={`/${p.slug}`}
            className="relative block transition-transform hover:-translate-y-1"
          >
            <Image
              src={`/assets/images/front/${p.img}`}
              alt={p.slug}
              width={800}
              height={1200}
              className="h-full w-full"
              priority
              />
          </Link>
        ))}
      </section>
      
    </main>
  );
}
