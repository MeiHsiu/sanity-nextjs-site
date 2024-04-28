// app/testimonials/[testimonial]/page.tsx

import Image from "next/image";
import { Metadata } from "next";
import { getSingleTestimonial } from "@/sanity/sanity.query";
import type { TestimonialType } from "@/types";
import { PortableText } from "@portabletext/react";

type Props = {
  params: {
    testimonial: string;
  };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.testimonial;
  const testimonial: TestimonialType = await getSingleTestimonial(slug);

  return {
    title: `${testimonial.name} | Testimonial`,
    description: testimonial.tagline,
    openGraph: {
      images: testimonial.coverImage?.image ,
      title: testimonial.name,
      description: testimonial.tagline,
    },
  };
}

export default async function Testimonial({ params }: Props) {
  const slug = params.testimonial;
  const testimonial: TestimonialType = await getSingleTestimonial(slug);

  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-start justify-between mb-4">
          <h1 className="font-bold lg:text-5xl text-3xl lg:leading-tight mb-4">
            {testimonial.name}
          </h1>
        </div>

        <Image
          className="rounded-xl border border-zinc-800"
          width={450}
          height={230}
          src={testimonial.coverImage?.image }
          alt={testimonial.coverImage?.alt || testimonial.name}
        />

        <div className="flex flex-col gap-y-6 mt-8 leading-7 text-zinc-400">
          <PortableText value={testimonial.description} />
        </div>
      </div>
    </main>
  );
}
