import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h1 className="text-6xl font-black text-slate-900 leading-[0.9] uppercase mb-10">
              We Are <br />
              <span className="text-blue-600">
                Architects of <br />
                Efficiency.
              </span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-8 italic border-l-4 border-blue-600 pl-6">
              "Z-J Integrated was built on the foundation of 'Off-Site
              Construction'. We believe in building smarter, not harder."
            </p>
            <p className="text-slate-500 leading-relaxed mb-6 text-sm">
              Founded in Lahore, our firm has grown into a regional leader for
              pre-fabricated building solutions. We manage the entire
              lifecycle—from the first drawing to the final bolt. Whether it's a
              cold storage facility using PU panels or a high-end restaurant
              interior, our attention to detail is unmatched.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=2070"
              className="relative z-10 rounded-[3rem] shadow-2xl border-8 border-slate-50"
              alt="About Z-J"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
