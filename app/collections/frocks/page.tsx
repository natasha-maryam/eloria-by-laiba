import { ArrowRight, SlidersHorizontal } from "lucide-react";
import { SiteFooter, SiteHeader } from "../../site-chrome";

const categories = ["All frocks", "Everyday", "Evening", "Florals", "Made to order"];
const pieces = [
  ["Mahnoor Berry Frock", "Printed cotton", "6,490", "/eloria-hero-v2.png"],
  ["Gul Cream Frock", "Everyday florals", "7,290", "/eloria-floral-v2.png"],
  ["Rani Raspberry Frock", "Evening ease", "7,950", "/eloria-raspberry-v2.png"],
  ["Mahnoor Custom Frock", "Made to order", "8,490", "/eloria-hero-v2.png"],
  ["Gul Long Frock", "Custom length", "8,250", "/eloria-floral-v2.png"],
  ["Rani Gathered Frock", "Soft cotton", "7,750", "/eloria-raspberry-v2.png"],
  ["Mahnoor Midi Frock", "Everyday", "6,250", "/eloria-hero-v2.png"],
  ["Your Custom Frock", "Made for you", "From 9,500", "/eloria-floral-v2.png"],
];

export const metadata = { title: "Shop Frocks | ELORIA by Laiba", description: "Printed everyday, evening and custom frocks by ELORIA by Laiba." };

export default function Frocks() {
  return <main className="min-h-screen bg-[#fffdfb] text-[#2a1722]"><SiteHeader />
    <section className="grid min-h-[560px] bg-[#3f1731] text-white lg:grid-cols-[.9fr_1.1fr]"><div className="flex flex-col justify-end px-6 py-14 sm:px-12 lg:px-20 lg:py-20"><p className="text-sm tracking-[.18em] text-[#d9a8c0]">PRINTED FROCKS</p><h1 className="mt-5 max-w-3xl font-serif text-[clamp(3.7rem,8vw,7rem)] leading-[.9]">Easy to wear.<br /><em className="font-light text-[#e5b6cb]">Hard to forget.</em></h1><p className="mt-7 max-w-xl leading-7 text-white/65">Full skirts, soft cotton and the kind of prints that work beyond one occasion.</p></div><img src="/eloria-floral-v2.png" alt="Cream floral ELORIA frock" className="h-[560px] w-full object-cover lg:h-full" /></section>
    <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-10 lg:py-20"><div className="flex gap-2 overflow-x-auto pb-3">{categories.map((category, index) => <button key={category} className={`shrink-0 rounded-full border px-5 py-2.5 text-sm ${index === 0 ? "border-[#3f1731] bg-[#3f1731] text-white" : "border-[#3f1731]/15 bg-white"}`}>{category}</button>)}<button className="ml-auto hidden items-center gap-2 border-b border-[#3f1731] px-2 text-sm lg:flex"><SlidersHorizontal size={16} /> Refine</button></div>
      <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">{pieces.map(([name, category, price, image], index) => <article key={name} className={index === 1 || index === 6 ? "lg:mt-12" : ""}><div className="group relative aspect-[3/4] overflow-hidden bg-[#efe8e4]"><img src={image} alt={name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><span className="absolute left-3 top-3 bg-white/90 px-2.5 py-1 text-xs">{index > 3 ? "Made to order" : "Customisable"}</span></div><p className="mt-4 text-xs uppercase tracking-[.12em] text-[#8b7180]">{category}</p><div className="mt-1 sm:flex sm:justify-between sm:gap-2"><h2 className="font-serif text-lg">{name}</h2><p className="mt-1 shrink-0 text-sm sm:mt-0">Rs. {price}</p></div></article>)}</div>
      <div className="mt-16 flex flex-col items-center bg-[#f1e5e9] px-6 py-14 text-center"><p className="text-sm text-[#8b3e67]">LOOKING FOR SOMETHING SPECIFIC?</p><h2 className="mt-3 font-serif text-3xl sm:text-4xl">Send us the shape, colour and length.</h2><a href="/design-your-own" className="mt-6 inline-flex items-center gap-2 border-b border-[#3f1731] pb-1">Start a custom order <ArrowRight size={15} /></a></div>
    </section><SiteFooter /></main>;
}
