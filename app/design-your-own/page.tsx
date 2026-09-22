"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "../site-chrome";

export default function DesignYourOwn() {
  const [details, setDetails] = useState({ length: "", sleeves: "", size: "", colour: "", notes: "" });
  const update = (key: keyof typeof details, value: string) => setDetails((current) => ({ ...current, [key]: value }));
  const send = (event: FormEvent) => {
    event.preventDefault();
    const message = `Assalam-o-Alaikum ELORIA by Laiba, I would like a custom dress.\nLength: ${details.length}\nSleeves: ${details.sleeves}\nSize: ${details.size}\nColour: ${details.colour}\nNotes: ${details.notes || "None"}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };
  return <main className="min-h-screen bg-[#fcfaf7] text-[#2a1722]"><SiteHeader />
    <section className="mx-auto grid max-w-[1440px] lg:grid-cols-2"><div className="flex flex-col justify-center bg-[#eadde2] px-7 py-14 sm:px-14 lg:px-20"><p className="text-sm uppercase tracking-[.18em] text-[#8b3e67]">Made for you</p><h1 className="mt-5 font-serif text-[clamp(3.5rem,7vw,6.8rem)] leading-[.95]">Your dress.<br /><em className="font-light text-[#8b3e67]">Your details.</em></h1><p className="mt-7 max-w-lg leading-7 text-[#66515c]">Tell us how you want it to fit and look. We’ll confirm availability, price and timing with you before stitching.</p></div><img src="/eloria-hero-v2.png" alt="ELORIA floral frock" className="h-[360px] w-full object-cover lg:h-[580px]" /></section>
    <section className="mx-auto max-w-[920px] px-6 py-14 sm:py-20"><p className="text-sm uppercase tracking-[.18em] text-[#8b3e67]">Custom request</p><h2 className="mt-3 font-serif text-4xl">Tell us what you have in mind</h2><form onSubmit={send} className="mt-9 grid gap-5 sm:grid-cols-2"><label className="grid gap-2">Length <input required value={details.length} onChange={(e) => update("length", e.target.value)} placeholder="e.g. 42 inches or ankle length" className="h-12 border border-[#3f1731]/20 bg-white px-4" /></label><label className="grid gap-2">Sleeves <select required value={details.sleeves} onChange={(e) => update("sleeves", e.target.value)} className="h-12 border border-[#3f1731]/20 bg-white px-4"><option value="">Choose sleeves</option><option>Short</option><option>Three-quarter</option><option>Full</option><option>Sleeveless</option><option>Other (describe in notes)</option></select></label><label className="grid gap-2">Size <select required value={details.size} onChange={(e) => update("size", e.target.value)} className="h-12 border border-[#3f1731]/20 bg-white px-4"><option value="">Choose a size</option>{["XS", "S", "M", "L", "XL", "Custom measurements"].map((size) => <option key={size}>{size}</option>)}</select></label><label className="grid gap-2">Colour <input required value={details.colour} onChange={(e) => update("colour", e.target.value)} placeholder="e.g. berry pink" className="h-12 border border-[#3f1731]/20 bg-white px-4" /></label><label className="grid gap-2 sm:col-span-2">Notes (optional)<textarea value={details.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Measurements, fabric or any other detail" className="min-h-28 border border-[#3f1731]/20 bg-white p-4" /></label><button className="inline-flex min-h-12 w-fit items-center gap-3 bg-[#3f1731] px-6 text-white sm:col-span-2">Send request on WhatsApp <ArrowRight size={18} /></button></form></section><SiteFooter /></main>;
}
