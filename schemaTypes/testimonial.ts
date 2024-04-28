import { BiPackage } from "react-icons/bi";
import { defineField } from "sanity";

const testimonial = {
  name: "testimonial",
  title: "Testimonial",
  description: "Testimonial Schema",
  type: "document",
  icon: BiPackage,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Enter the name of the testimonial",
    },
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      validation: (rule) => rule.max(60).required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Add a custom slug for the URL or generate one from the name",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    {
      name: "logo",
      title: "Testimonial Logo",
      type: "image",
    },
    {
      name: "testimonialUrl",
      title: "Testimonial URL",
      type: "url",
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      description: "Upload a cover image for this testimonial",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      description: "Write a full description about this testimonial",
      of: [{ type: "block" }],
    },
  ],
};

export default testimonial;
