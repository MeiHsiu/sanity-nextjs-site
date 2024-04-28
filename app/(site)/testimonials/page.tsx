// app/testimonial/page.tsx

import Image from "next/image";
import Link from "next/link";
import { getTestimonials } from "@/sanity/sanity.query";
import type { TestimonialType } from "@/types";

export default async function Testimonial() {
  const testimonials: TestimonialType[] = await getTestimonials();

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <section className="max-w-2xl mb-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
          Featured testimonials I&apos;ve built over the years
        </h1>
        <p className="text-base text-zinc-400 leading-relaxed">
          I&apos;ve worked on tons of little testimonials over the years but these
          are the ones that I&apos;m most proud of. Many of them are
          open-source, so if you see something that piques your interest, check
          out the code and contribute if you have ideas for how it can be
          improved.
        </p>
      </section>

      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
        {testimonials.map((data) => (
          <Link
            href={`/testimonials/${data.slug}`}
            key={data._id}
            className="flex items-center gap-x-4 bg-[#1d1d20] border border-transparent hover:border-zinc-700 p-4 rounded-lg ease-in-out"
          >
            <Image
              src={data.logo}
              width={60}
              height={60}
              alt={data.name}
              className="bg-zinc-800 rounded-md p-2"
            />
            <div>
              <h2 className="font-semibold mb-1">{data.name}</h2>
              <div className="text-sm text-zinc-400">{data.tagline}</div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
