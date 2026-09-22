import { CreditCard, MessageCircle, PackageCheck, RefreshCcw, Truck } from "lucide-react";
import { SiteFooter, SiteHeader } from "../site-chrome";

const details = [
  { icon: Truck, title: "Delivery", text: "Ready pieces usually arrive within 3–5 working days across Pakistan. Custom orders are given a separate timeline when the design is confirmed." },
  { icon: CreditCard, title: "Payments", text: "Choose cash on delivery, bank transfer, Easypaisa or JazzCash at checkout. Card payments will appear once ELORIA’s secure gateway is connected." },
  { icon: RefreshCcw, title: "Size exchanges", text: "Contact us within 3 days of delivery if a ready-to-wear piece needs a different size. The item must be unworn, unwashed and in its original condition." },
  { icon: PackageCheck, title: "Custom orders", text: "Because custom pieces are made to your measurements, they cannot be exchanged for change of mind. We confirm every detail before work begins." },
];

export const metadata = { title: "Customer Care | ELORIA by Laiba" };

export default function CustomerCare() { return <main className="min-h-screen bg-[#fffdfb] text-[#2a1722]"><SiteHeader /><section className="bg-[#f1e5e9] px-6 py-20 text-center lg:py-28"><p className="text-sm tracking-[.18em] text-[#8b3e67]">CUSTOMER CARE</p><h1 className="mx-auto mt-4 max-w-4xl font-serif text-[clamp(3.5rem,8vw,7rem)] leading-[.9]">Everything you need<br /><em className="font-light text-[#8b3e67]">before you order.</em></h1></section><section className="mx-auto grid max-w-[1100px] gap-px bg-[#3f1731]/10 px-5 py-20 sm:grid-cols-2 sm:px-10 lg:py-28">{details.map(({ icon: Icon, title, text }) => <article key={title} className="bg-white p-8 sm:p-10"><Icon className="text-[#8b3e67]" /><h2 className="mt-7 font-serif text-3xl">{title}</h2><p className="mt-4 leading-7 text-[#705b66]">{text}</p></article>)}</section><section className="mx-auto max-w-[900px] px-6 pb-24 text-center"><MessageCircle className="mx-auto text-[#8b3e67]" /><h2 className="mt-5 font-serif text-4xl">Still unsure?</h2><p className="mx-auto mt-3 max-w-lg leading-7 text-[#705b66]">Send us your question, measurements or a screenshot of the piece you like.</p><a href="https://wa.me/?text=Assalam-o-Alaikum%20ELORIA%20by%20Laiba%2C%20I%20need%20help%20with%20an%20order." target="_blank" rel="noreferrer" className="mt-7 inline-flex bg-[#3f1731] px-6 py-3 font-medium text-white">Chat on WhatsApp</a></section><SiteFooter /></main>; }
