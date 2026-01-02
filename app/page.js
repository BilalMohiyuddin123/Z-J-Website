import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white overflow-x-hidden">
        {/* --- HERO SECTION --- */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28 bg-slate-50 overflow-hidden">
          {/* MOBILE ONLY: Background Image logic */}
          {/* On mobile, this div wraps the whole content. On LG, it becomes a 2-column grid. */}
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[500px] lg:min-h-0">
            {/* --- THE IMAGE --- */}
            {/* On mobile: it fills the background (absolute). On LG: it returns to the right side (relative). */}
            <div className="absolute inset-0 lg:relative lg:order-2 lg:inset-auto h-full w-full lg:h-auto lg:aspect-[3/2] z-0 lg:z-10 overflow-hidden lg:rounded-3xl lg:shadow-xl lg:border-[10px] lg:border-white">
              <Image
                src="/images/hero-img.JPG"
                alt="Industrial Pre-fabrication"
                fill
                priority
                className="object-cover lg:transition-transform lg:duration-700 lg:group-hover:scale-105"
              />
              {/* Dark Overlay for Mobile only to make text readable */}
              <div className="absolute inset-0 bg-slate-900/60 lg:bg-blue-600/5 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500" />
            </div>

            {/* --- THE TEXT CONTENT --- */}
            {/* On mobile: z-10 puts it above the absolute image. On LG: normal column behavior. */}
            <div className="z-10 lg:order-1 animate-in fade-in slide-in-from-left duration-1000 ease-out text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 lg:bg-blue-100 text-blue-200 lg:text-blue-700 text-[10px] md:text-xs font-black mb-6 tracking-[0.2em] uppercase backdrop-blur-sm lg:backdrop-blur-0">
                Est. 2010 • Lahore, Pakistan
              </span>

              <h1 className="text-4xl md:text-6xl xl:text-7xl font-black text-white lg:text-slate-900 leading-[0.9] mb-6 uppercase italic tracking-tighter">
                Build <br />
                <span className="text-blue-400 lg:text-blue-600 not-italic">
                  Smarter.
                </span>
                <br />
                Build{" "}
                <span className="text-blue-400 lg:text-blue-600">Faster.</span>
              </h1>

              <p className="text-base md:text-lg xl:text-xl text-slate-200 lg:text-slate-600 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed font-medium">
                Z-J Integrated Engineering is your turnkey partner for
                large-scale pre-fabricated construction, insulated PU solutions,
                and luxury interior architecture.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4">
                <button className="bg-blue-600 lg:bg-slate-900 text-white px-7 md:px-9 py-3.5 md:py-4 rounded-xl font-black hover:bg-blue-500 transition-all duration-300 shadow-lg uppercase tracking-widest text-xs active:scale-95">
                  Get a Quote
                </button>
                <button className="bg-white/10 lg:bg-white text-white lg:text-slate-900 border-2 border-white/20 lg:border-slate-200 px-7 md:px-9 py-3.5 md:py-4 rounded-xl font-black hover:bg-white/20 lg:hover:bg-slate-50 transition-all text-xs uppercase tracking-widest active:scale-95 backdrop-blur-md lg:backdrop-blur-0">
                  View Projects
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* --- REST OF THE PAGE (No changes here) --- */}
        <section className="py-20 md:py-24 lg:py-32 bg-white border-t border-slate-100">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="relative group aspect-[4/3] w-full">
              <Image
                src="/images/pu rooms.jpg"
                alt="PU Panel Clean Room"
                fill
                className="rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border-4 md:border-8 border-slate-50 object-cover"
              />
            </div>
            <div className="lg:pr-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mt-4 mb-8 uppercase tracking-tighter">
                Insulated <span className="text-blue-600 italic">PU Rooms</span>
              </h2>
              <p className="text-slate-600 mb-8 font-medium text-base">
                Our PU panels provide the highest insulation rating in the
                industry.
              </p>
            </div>
          </div>
        </section>

        {/* --- INTERIOR DESIGN SECTION --- */}
        <section className="py-20 bg-slate-900 text-white rounded-[2rem] mx-4 md:mx-10 mb-10 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black uppercase italic">
                Turnkey <span className="text-blue-500">Excellence</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Bespoke Offices",
                  img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070",
                },
                {
                  title: "Restaurant Sofas",
                  img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2070",
                },
                {
                  title: "Home Architecture",
                  img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative aspect-square overflow-hidden rounded-[2rem] border border-white/10"
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-100 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-80" />
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-2xl font-black uppercase italic">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
