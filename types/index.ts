// types/index.ts

import { PortableTextBlock } from "sanity";

export type ProfileType = {
  _id: string,
  fullName: string,
  headline: string,
  profileImage: {
    alt: string,
    image: string
  },
  shortBio: string,
  email: string,
  fullBio: PortableTextBlock[],
  location: string,
  resumeURL: string,
  socialLinks: string[],
  skills: string[],
};

export type JobType = {
    _id: string;
    name: string;
    jobTitle: string;
    logo: string;
    url: string;
    description: PortableTextBlock[];
    startDate: Date;
    endDate: Date;
  };
  
  export type TestimonialType = {
    _id: string;
    name: string;
    slug: string;
    tagline: string;
    testimonialUrl: string;
    logo: string;
    coverImage: {
      alt: string | null;
      image: string;
    };
    description: PortableTextBlock[];
  };
  
export type PriceType = {
    _id: string;
    name: string;
    description: PortableTextBlock[];
  };
  