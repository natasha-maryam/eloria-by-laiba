import { ArrowUpRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "../site-chrome";

const notes = [
  { tag: "The fitting room", title: "How to choose a frock length that feels balanced", excerpt: "A practical way to think about proportion, movement and the shoes you wear most.", position: "0% 100%" },
  { tag: "Colour story", title: "Plum, berry and rose: finding your deeper pink", excerpt: "Four rich tones, and the occasions where each one quietly shines.", position: "100% 100%" },
  { tag: "Behind the seam", title: "Why a panelled frock moves differently", excerpt: "The construction detail that creates shape without making the dress feel heavy.", position: "100% 0%" },
  { tag: "Wear it again", title: "Making an occasion frock feel easy after the event", excerpt: "Small styling changes that bring a special piece back into your everyday wardrobe.", position: "0% 0%" },
];

export default function StudioNotes() {
  return <main className="min-h-screen bg-[#fcfaf7] text-[#2a1722]"><SiteHeader /><section className="border-b border-[#3f1731]/10 px-6 py-20 text-center lg:py-28"><p className="text-xs uppercase tracking-[.22em] text-[#8b3e67]">Studio Notes</p><h1 className="mx-auto mt-5 max-w-4xl font-serif text-[clamp(3.7rem,8vw,7rem)] leading-[.92]">Ideas to wear,<br /><em className="font-light text-[#8b3e67]">not just read.</em></h1><p className="mx-auto mt-7 max-w-xl leading-7 text-[#715d67]">Thoughts from the fitting room—on shape, colour, craft and making your clothes feel more like your own.</p></section>
    <section className="mx-auto max-w-[1240px] px-5 py-16 sm:px-10 lg:py-24"><div className="grid gap-x-5 gap-y-14 md:grid-cols-2">{notes.map((note, index) => <article key={note.title} className={index % 2 ? "md:mt-16" : ""}><div className="aspect-[16/11] bg-[url('/eloria-collection.png')] bg-[length:200%_200%] bg-no-repeat" style={{ backgroundPosition: note.position }} /><p className="mt-5 text-[.65rem] uppercase tracking-[.18em] text-[#8b3e67]">{note.tag}</p><h2 className="mt-2 max-w-lg font-serif text-3xl leading-tight">{note.title}</h2><p className="mt-3 max-w-xl text-sm leading-6 text-[#715d67]">{note.excerpt}</p><a href="#" className="mt-5 inline-flex items-center gap-2 border-b border-[#3f1731] pb-1 text-xs uppercase tracking-[.1em]">Read the note <ArrowUpRight size={14} /></a></article>)}</div></section><SiteFooter /></main>;
}
