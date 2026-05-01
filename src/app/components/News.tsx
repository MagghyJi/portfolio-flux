import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// Fetching news from Sanity
async function getNews() {
  const query = `*[_type == "news"] | order(date desc) {
    title,
    "slug": coalesce(slug.current, _id),
    date,
    image
  }`;
  return await client.fetch(query);
}

export default async function News() {
  const articles = await getNews();

  // Function to determine offset for desktop staggered layout
  const getOffsetClass = (index: number) => {
    if (index % 3 === 0) return "mt-0";
    if (index % 3 === 1) return "pt-48";
    return "pt-24";
  };

  return (
    <section id="news" className="bg-[#F9F9F9] py-24 md:py-48 relative text-black border-t border-black/5 overflow-hidden">
      
      {/* 1. Desktop Version (Rotated Title + Staggered Cards) */}
      <div className="hidden md:flex flex-row items-stretch pl-20 min-h-[900px]">
        <div className="w-48 flex-shrink-0 relative z-20 mr-32">
          <div className="absolute bottom-[160px] left-0 w-full h-fit">
            <h2 className="font-light uppercase tracking-tighter leading-none -rotate-90 origin-left whitespace-nowrap text-[3.2vw] inline-block">
              KEEP UP WITH MY LATEST <br /> NEWS & ACHIEVEMENTS
            </h2>
          </div>
        </div>
        <div className="flex-1 overflow-x-auto no-scrollbar flex gap-0 pl-10 pr-0">
          {articles.map((a: any, i: number) => (
            <div 
              key={i} 
              className={`min-w-[450px] flex flex-col gap-8 px-16 border-l border-black/10 first:border-l-0 ${getOffsetClass(i)}`}
            >
              <Link href={`/news/${a.slug}`} className="block group">
                <NewsCard a={a} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Mobile Version (Light Title + Peek Scroll) */}
      <div className="md:hidden flex flex-col">
        <div style={{ paddingLeft: '24px', paddingRight: '24px' }}>
          <h2 className="text-[9vw] font-light leading-[1.1] uppercase mb-12 tracking-tight">
            KEEP UP WITH MY <br /> LATEST NEWS & <br /> ACHIEVEMENTS
          </h2>
        </div>
        
        <div 
          style={{ 
            display: 'flex', 
            overflowX: 'auto', 
            paddingLeft: '24px', 
            paddingRight: '0px',
            gap: '20px'
          }} 
          className="no-scrollbar pb-8 w-full"
        >
          {articles.map((a: any, i: number) => (
            <div 
              key={i} 
              className="shrink-0 w-[82vw] flex flex-col gap-6"
            >
              <Link href={`/news/${a.slug}`} className="block">
                <NewsCard a={a} mobile />
              </Link>
            </div>
          ))}
          <div className="shrink-0 w-12" />
        </div>
      </div>

    </section>
  );
}

function NewsCard({ a, mobile = false }: { a: any, mobile?: boolean }) {
  const imageUrl = a.image ? urlFor(a.image).url() : "/article-1-image.png";

  return (
    <>
      <div className={`relative ${mobile ? "w-full aspect-[3/4.2]" : "w-[353px] h-[469px]"} overflow-hidden shadow-sm bg-gray-50 border border-black/5`}>
        <Image
          src={imageUrl}
          alt={a.title || "News article"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-6 mt-6">
        <p className={`text-[14px] leading-relaxed text-black/80 ${mobile ? "w-full" : "max-w-[320px]"}`}>
          <span className="font-bold block mb-2">{a.date || "News"}</span>
          {a.title}
        </p>
        <div className="flex items-center gap-2 w-fit border-b border-black pb-1">
          <span className="text-[11px] font-bold uppercase tracking-widest text-black">Read more</span>
          <div className="relative w-3 h-3 transition-transform group-hover:translate-x-1">
            <Image
              src="/arrow-top-right.svg"
              alt="Arrow"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
