import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white overflow-x-hidden">
        {/* --- HERO SECTION: TEXT LEFT | IMAGE RIGHT --- */}
        {/* pt-32 ensures content starts below the fixed navbar */}
        {/* Change pt-32 to pt-20 to bring the text higher up */}
        <section className="relative pt-20 pb-10 lg:pt-32 lg:pb-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE: TEXT CONTENT */}
            <div className="z-10 order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-black mb-6 tracking-[0.2em] uppercase">
                Est. 2010 • Lahore, Pakistan
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.85] mb-8 uppercase italic tracking-tighter">
                Build <br />
                <span className="text-blue-600 not-italic">Smarter.</span>{" "}
                <br />
                Build <span className="text-blue-600">Faster.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-xl mb-10 leading-relaxed font-medium">
                Z-J Integrated Engineering is your turnkey partner for
                large-scale pre-fabricated construction, insulated PU solutions,
                and luxury interior architecture.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black hover:bg-blue-600 transition-all duration-300 shadow-xl uppercase tracking-widest text-sm">
                  Get a Quote
                </button>
                <button className="bg-white text-slate-900 border-2 border-slate-200 px-10 py-5 rounded-2xl font-black hover:bg-slate-50 transition-all text-sm uppercase tracking-widest">
                  View Projects
                </button>
              </div>
            </div>

            {/* RIGHT SIDE: IMAGE CONTENT */}
            <div className="relative order-1 lg:order-2">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white transform lg:rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
                  className="w-full h-[500px] object-cover"
                  alt="Industrial Pre-fabrication"
                />
              </div>
              {/* Decorative Blue Box behind image */}
              <div className="absolute -top-6 -right-6 w-full h-full bg-blue-600/10 rounded-[3rem] -z-0"></div>
            </div>
          </div>
        </section>

        {/* --- PU ROOMS & SECURITY SECTION --- */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581092921461-7d65507b399a?q=80&w=2070"
                className="rounded-[2.5rem] shadow-2xl border-8 border-slate-50 relative z-10"
                alt="PU Panel Clean Room"
              />
            </div>
            <div>
              <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-sm italic">
                Core Specialty
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-8 uppercase leading-tight">
                High-Security <br />
                <span className="text-blue-600 italic">Insulated PU Rooms</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed italic border-l-4 border-blue-600 pl-6">
                "Superior thermal control meets structural integrity."
              </p>
              <p className="text-slate-600 mb-8 font-medium">
                Our PU panels provide the highest insulation rating in the
                industry, perfect for cold chains, labs, and modular offices.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <p className="font-black text-blue-600">A+ Grade</p>
                  <p className="text-xs font-bold text-slate-500 uppercase">
                    PU Insulation
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <p className="font-black text-blue-600">Fire-Rated</p>
                  <p className="text-xs font-bold text-slate-500 uppercase">
                    Safety Standard
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- INTERIOR DESIGN SECTION --- */}
        <section className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4 mb-10 shadow-3xl">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-4">
                Turnkey Interior{" "}
                <span className="text-blue-500">Excellence</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto font-medium">
                Custom furniture, restaurant sofas, and corporate architecture
                designed for impact.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
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
                  className="group relative h-[400px] overflow-hidden rounded-3xl border border-white/10"
                >
                  <img
                    src={item.img}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-black uppercase italic">
                      {item.title}
                    </h3>
                    <button className="mt-2 text-blue-400 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity underline">
                      Learn More
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
