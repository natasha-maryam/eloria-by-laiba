"use client";

import { ArrowUpRight, Camera, Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { label: "Frock Atelier", href: "/collections/frocks", note: "Explore silhouettes" },
  { label: "Design Your Own", href: "/design-your-own", note: "Create it your way" },
  { label: "Find Your Fit", href: "/fit-room", note: "Measurements made simple" },
  { label: "Studio Notes", href: "/studio-notes", note: "Styling & craft stories" },
];

export function Wordmark({ light = false }: { light?: boolean }) {
  return <span className="relative block h-12 w-36 overflow-hidden sm:h-14 sm:w-44"><img src="/eloria-logo.jpg" alt="ELORIA by Laiba" className="absolute left-1/2 top-1/2 h-auto w-[115%] max-w-none -translate-x-1/2 -translate-y-1/2" /></span>;
}

export function SiteHeader({ actions }: { actions?: React.ReactNode }) {
  return <>
    <div className="bg-[#3f1731] px-4 py-2 text-center text-[0.68rem] font-medium uppercase tracking-[0.18em] text-white/90 sm:text-[0.73rem]">Custom stitching · Delivery across Pakistan</div>
    <header className="sticky top-0 z-40 border-b border-[#3f1731]/10 bg-[#fcfaf7]/95 backdrop-blur-xl">
      <div className="mx-auto grid h-[74px] max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-4 sm:h-[78px] sm:px-6 lg:px-10">
        <Sheet>
          <SheetTrigger asChild><button className="justify-self-start lg:hidden" aria-label="Open menu"><Menu /></button></SheetTrigger>
          <SheetContent side="left" className="w-[88vw] max-w-[390px] border-none bg-[#351128] p-0 text-white shadow-[24px_0_70px_rgba(28,7,21,.35)]">
            <SheetHeader className="border-b border-white/10 px-7 pb-6 pt-7 text-left"><SheetTitle><Wordmark light /></SheetTitle><SheetDescription className="text-white/45">Clothing made personal.</SheetDescription></SheetHeader>
            <nav className="flex flex-1 flex-col px-7 py-8">
              {links.map((link, index) => <SheetClose key={link.href} asChild><a href={link.href} className="group grid grid-cols-[34px_1fr_auto] items-center border-b border-white/10 py-5">
                <span className="font-serif text-sm text-[#c89cb3]">0{index + 1}</span><span><span className="block font-serif text-[1.65rem] leading-tight">{link.label}</span><span className="mt-1 block text-xs text-white/40">{link.note}</span></span><ArrowUpRight className="translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" size={18} />
              </a></SheetClose>)}
              <SheetClose asChild><a href="/" className="mt-7 text-sm text-white/60">Return home</a></SheetClose>
            </nav>
            <div className="border-t border-white/10 px-7 py-6"><a href="https://www.instagram.com/eloriabylaiba/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-white/70"><Camera size={16} /> @eloriabylaiba</a></div>
          </SheetContent>
        </Sheet>
        <nav className="hidden items-center gap-6 text-[0.82rem] lg:flex">{links.map((link) => <a key={link.href} href={link.href} className="hover:text-[#8b3e67]">{link.label}</a>)}</nav>
        <a href="/" aria-label="ELORIA by Laiba home"><Wordmark /></a>
        <div className="flex items-center justify-end gap-4"><a className="hidden lg:inline-flex" href="https://www.instagram.com/eloriabylaiba/" target="_blank" rel="noreferrer" aria-label="Instagram"><Camera size={19} /></a>{actions}</div>
      </div>
    </header>
  </>;
}

export function SiteFooter() {
  return <footer className="bg-[#2d1025] px-6 py-14 text-white/85"><div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-[1.4fr_1fr_1fr]"><div><Wordmark light /><p className="mt-5 max-w-sm text-sm leading-6 text-white/60">Printed frocks and custom stitching, made in Pakistan.</p></div><div><p className="mb-4 text-xs uppercase tracking-[0.18em] text-white/45">Browse</p><div className="grid gap-3 text-sm">{links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</div></div><div><p className="mb-4 text-xs uppercase tracking-[0.18em] text-white/45">Need help?</p><div className="grid gap-3 text-sm"><a href="/customer-care">Delivery, returns & payments</a><a className="flex items-center gap-2" href="https://www.instagram.com/eloriabylaiba/" target="_blank" rel="noreferrer"><Camera size={16} /> @eloriabylaiba</a></div></div></div><div className="mx-auto mt-12 flex max-w-[1440px] flex-wrap justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40"><span>© 2026 ELORIA by Laiba</span><span>Made with care in Pakistan</span></div></footer>;
}
