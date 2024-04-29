// app/components/Price.tsx

import Image from "next/image";
import { getPrice } from "@/sanity/sanity.query";
import type { PriceType } from "@/types";
import { PortableText } from "@portabletext/react";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";


export default async function Price() {
  const price: PriceType[] = await getPrice();

  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/pricing");
  }
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
        <section className="mt-32">
        <div className="mb-16">
            <h2 className="font-semibold text-4xl mb-4">Personal Training Packages</h2>
        </div>

        <div className="flex flex-col gap-y-12">
            {price.map((data) => (
            <div
                key={data._id}
                className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem]  before:h-[calc(100%-50px)] before:bg-zinc-800"
            >
                <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold">{data.name}</h3>
                <PortableText value={data.description} />
                </div>
            </div>
            ))}
        </div>
        </section>
    </main>
  );
}
