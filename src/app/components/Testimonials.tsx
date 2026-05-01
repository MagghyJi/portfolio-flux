import { client } from "@/sanity/lib/client";
import TestimonialsClient from "./TestimonialsClient";

// Fetching testimonials from Sanity
async function getTestimonials() {
  const query = `*[_type == "testimonial"] | order(order asc) {
    author,
    role,
    text,
    logo
  }`;
  return await client.fetch(query);
}

export default async function Testimonials() {
  const testimonials = await getTestimonials();

  return <TestimonialsClient testimonials={testimonials} />;
}
