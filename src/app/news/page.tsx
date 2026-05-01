"use client";

import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

async function getNews() {
  const query = `*[_type == "news"] | order(date desc) {
    title,
    "slug": coalesce(slug.current, _id),
    date,
    category,
    excerpt,
    image
  }`;
  return await client.fetch(query);
}

export default function NewsPage() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNews().then((data) => {
      setArticles(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!loading) {
      gsap.from(".news-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      });
    }
  }, [loading]);

  return (
    <main className="bg-white min-h-screen">
      <Navigation />
      
      {/* News Hero */}
      <section className="pt-48 pb-24 px-6 md:px-12 border-b border-black/5">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-black/40 mb-8 block">
            [ THE ARCHIVE ]
          </span>
          <h1 className="text-[12vw] md:text-[8vw] font-medium tracking-[-0.06em] leading-[0.8] mb-12">
            Digital <br />
            <span className="italic font-light text-black/40">Briefings</span>
          </h1>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-x-12 md:gap-y-24">
          {articles.map((article, i) => (
            <Link 
              key={i} 
              href={`/news/${article.slug}`}
              className="news-card group flex flex-col gap-8"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-50 border border-black/5">
                {article.image ? (
                  <Image
                    src={urlFor(article.image).url()}
                    alt={article.title || "News article"}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-black/5">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-black/20">No Image Available</span>
                  </div>
                )}
                {/* Category Label */}
                <div className="absolute top-6 left-6">
                  <span className="bg-black text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1">
                    {article.category || "INSIGHTS"}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center border-b border-black/10 pb-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-black/60">
                    {article.date || "NO DATE"}
                  </span>
                  <div className="w-8 h-[1px] bg-black/10 group-hover:w-12 group-hover:bg-black transition-all duration-500" />
                </div>
                <h2 className="text-[24px] md:text-[28px] font-medium leading-tight tracking-tight text-black">
                  {article.title || "Untitled Article"}
                </h2>
                {article.excerpt && (
                  <p className="text-[14px] md:text-[15px] text-black/80 font-light leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
