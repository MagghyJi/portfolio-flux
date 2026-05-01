"use client";

import { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import gsap from "gsap";
import { useParams } from "next/navigation";

async function getArticle(slug: string) {
  const query = `*[_type == "news" && (slug.current == $slug || _id == $slug)][0] {
    title,
    date,
    category,
    image,
    body
  }`;
  return await client.fetch(query, { slug });
}

export default function NewsArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      getArticle(slug).then((data) => {
        setArticle(data);
        setLoading(false);
      });
    }
  }, [slug]);

  useEffect(() => {
    if (!loading && article) {
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } });
      tl.from(".article-header", { y: 40, opacity: 0 })
        .from(".article-image", { scale: 1.1, opacity: 0 }, "-=1.2")
        .from(".article-body", { y: 20, opacity: 0 }, "-=1");
    }
  }, [loading, article]);

  if (loading) return <div className="min-h-screen bg-white" />;
  if (!article) return <div className="min-h-screen bg-white flex items-center justify-center font-mono uppercase tracking-widest text-black/40">Article not found</div>;

  return (
    <main className="bg-white min-h-screen">
      <Navigation />

      <article className="pt-32 md:pt-48 pb-24 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          
          {/* Back Button */}
          <Link 
            href="/news" 
            className="group flex items-center gap-3 mb-12 w-fit"
          >
            <div className="p-2 rounded-full border border-black/10 group-hover:bg-black group-hover:text-white transition-all duration-300">
              <ArrowLeft size={16} />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-black/60 group-hover:text-black transition-colors">
              Back to Archive
            </span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Header Content */}
            <header className="article-header lg:col-span-8 flex flex-col gap-8">
              <div className="flex items-center gap-6">
                <span className="bg-black text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5">
                  {article.category || "INSIGHTS"}
                </span>
                <span className="font-mono text-[11px] text-black/60 uppercase tracking-widest">
                  {article.date || "NO DATE"}
                </span>
              </div>
              <h1 className="text-[10vw] md:text-[6vw] font-medium leading-[0.9] tracking-[-0.05em] text-black">
                {article.title || "Untitled Briefing"}
              </h1>
            </header>

            {/* Featured Image */}
            <div className="article-image lg:col-span-12 relative aspect-[21/9] w-full overflow-hidden bg-gray-50 border border-black/5 shadow-sm">
              {article.image ? (
                <Image
                  src={urlFor(article.image).url()}
                  alt={article.title || "Featured image"}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-black/5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-black/20">Editorial Imagery Pending</span>
                </div>
              )}
            </div>

            {/* Article Body */}
            <div className="article-body lg:col-start-3 lg:col-span-8 flex flex-col gap-12">
              <div className="prose prose-lg max-w-none prose-p:text-[18px] prose-p:md:text-[22px] prose-p:font-light prose-p:leading-relaxed prose-p:text-black/90 prose-headings:font-medium prose-headings:tracking-tight">
                {article.body ? (
                  <PortableText 
                    value={article.body} 
                    components={{
                      block: {
                        h2: ({children}) => <h2 className="text-[32px] md:text-[42px] mt-16 mb-8 text-black">{children}</h2>,
                        normal: ({children}) => <p className="mb-8">{children}</p>,
                      }
                    }}
                  />
                ) : (
                  <p className="italic text-black/40">Full briefing content is being finalized by the studio.</p>
                )}
              </div>
              
              {/* Footer Divider */}
              <div className="w-full h-px bg-black/10 mt-12" />
              
              <div className="flex justify-between items-center">
                <span className="font-mono text-[10px] uppercase tracking-widest text-black/20">
                  Written by Harvey Specter
                </span>
                <div className="flex gap-4">
                   {/* Placeholder for social share */}
                   <div className="w-8 h-8 rounded-full border border-black/5 flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-all">
                     <span className="text-[10px] font-bold">X</span>
                   </div>
                   <div className="w-8 h-8 rounded-full border border-black/5 flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-all">
                     <span className="text-[10px] font-bold">IN</span>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
