// sanity/sanity.query.ts

import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      headline,
      profileImage {alt, "image": asset->url},
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      skills
    }`
  );
}


export async function getJob() {
  return client.fetch(
    groq`*[_type == "job"]{
      _id,
      name,
      jobTitle,
      "logo": logo.asset->url,
      url,
      description,
      startDate,
      endDate,
    }`
  );
}

export async function getTestimonials() {
  return client.fetch(
    groq`*[_type == "testimonial"]{
      _id, 
      name,
      "slug": slug.current,
      tagline,
      "logo": logo.asset->url,
    }`
  );
}

export async function getSingleTestimonial(slug: string) {
  return client.fetch(
    groq`*[_type == "testimonial" && slug.current == $slug][0]{
      _id,
      name,
      testimonialUrl,
      coverImage { alt, "image": asset->url },
      tagline,
      description
    }`,
    { slug }
  );
}

export async function getPrice() {
  return client.fetch(
    groq`*[_type == "price"]{
      _id,
      name,
      description,
    }`
  );
}
