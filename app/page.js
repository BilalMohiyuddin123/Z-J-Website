import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white overflow-x-hidden">
        {/* --- HERO SECTION --- */}
        {/* Responsive Padding: pt-24 for mobile, pt-32 for laptop, pt-40 for large desktops */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 bg-slate-50 overflow-hidden">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* LEFT SIDE: TEXT CONTENT (Slide-in from left) */}
            <div className="z-10 order-2 lg:order-1 animate-in fade-in slide-in-from-left duration-1000 ease-out">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-[10px] md:text-xs font-black mb-6 tracking-[0.2em] uppercase">
                Est. 2010 • Lahore, Pakistan
              </span>
              <h1 className="text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl font-black text-slate-900 leading-[0.85] mb-8 uppercase italic tracking-tighter">
                Build <br />
                <span className="text-blue-600 not-italic">Smarter.</span>
                <br />
                Build <span className="text-blue-600">Faster.</span>
              </h1>
              <p className="text-lg md:text-xl xl:text-2xl text-slate-600 max-w-xl mb-10 leading-relaxed font-medium">
                Z-J Integrated Engineering is your turnkey partner for
                large-scale pre-fabricated construction, insulated PU solutions,
                and luxury interior architecture.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-slate-900 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black hover:bg-blue-600 transition-all duration-300 shadow-xl uppercase tracking-widest text-xs md:text-sm active:scale-95">
                  Get a Quote
                </button>
                <button className="bg-white text-slate-900 border-2 border-slate-200 px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black hover:bg-slate-50 transition-all text-xs md:text-sm uppercase tracking-widest active:scale-95">
                  View Projects
                </button>
              </div>
            </div>

            {/* RIGHT SIDE: IMAGE CONTENT (Straight & Hover Transition) */}
            <div className="relative order-1 lg:order-2 animate-in fade-in slide-in-from-right duration-1000 ease-out">
              <div className="relative z-10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white group transition-all duration-500 ease-in-out">
                <img
                  src="/images/hero-img.JPG"
                  className="w-full h-[400px] md:h-[500px] xl:h-[650px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  alt="Industrial Pre-fabrication"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              {/* Straight Decorative Blue Box behind image */}
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-full h-full bg-blue-600/10 rounded-[2rem] md:rounded-[3rem] -z-0" />
            </div>
          </div>
        </section>

        {/* --- PU ROOMS & SECURITY SECTION --- */}
        <section className="py-20 md:py-24 lg:py-32 bg-white border-t border-slate-100">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="relative group">
              <img
                src="images/pu rooms.jpg"
                className="rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border-4 md:border-8 border-slate-50 relative z-10 transition-transform duration-500 group-hover:-translate-y-2"
                alt="PU Panel Clean Room"
              />
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-blue-600/20 rounded-[2.5rem] -z-0 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="lg:pr-10">
              <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] md:text-sm italic">
                Core Specialty
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mt-4 mb-8 uppercase leading-tight tracking-tighter">
                <br />
                <span className="text-blue-600 italic">Insulated PU Rooms</span>
              </h2>
              <p className="text-slate-600 text-lg md:text-xl mb-8 leading-relaxed italic border-l-4 border-blue-600 pl-6">
                "Superior thermal control meets structural integrity."
              </p>
              <p className="text-slate-600 mb-8 font-medium text-base md:text-lg">
                Our PU panels provide the highest insulation rating in the
                industry, perfect for cold chains, labs, and modular offices.
              </p>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="p-4 md:p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                  <p className="font-black text-blue-600 text-lg md:text-xl">
                    A+ Grade
                  </p>
                  <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">
                    PU Insulation
                  </p>
                </div>
                <div className="p-4 md:p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                  <p className="font-black text-blue-600 text-lg md:text-xl">
                    Fire-Rated
                  </p>
                  <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">
                    Safety Standard
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- INTERIOR DESIGN SECTION --- */}
        <section className="py-20 md:py-24 lg:py-32 bg-slate-900 text-white rounded-[2rem] md:rounded-[4rem] mx-4 md:mx-10 mb-10 shadow-3xl overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic mb-6 tracking-tighter">
                Turnkey Interior{" "}
                <span className="text-blue-500">Excellence</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto font-medium text-base md:text-lg">
                Custom furniture, restaurant sofas, and corporate architecture
                designed for maximum visual and functional impact.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
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
                  className="group relative h-[400px] md:h-[500px] overflow-hidden rounded-[2rem] border border-white/10"
                >
                  <img
                    src={item.img}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-60 group-hover:opacity-100"
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-2xl md:text-3xl font-black uppercase italic">
                      {item.title}
                    </h3>
                    <button className="mt-4 text-blue-400 font-bold text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 underline underline-offset-8">
                      View Project Details
                    </button>
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
