import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-24 bg-slate-900 text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-blue-600 p-1 rounded-2xl max-w-4xl mx-auto overflow-hidden">
            <div className="bg-slate-900 p-12 rounded-2xl grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-black uppercase mb-6 italic">
                  Start Your <br />
                  Project.
                </h2>
                <p className="text-slate-400 mb-10">
                  Submit your technical requirements and our engineering team
                  will get back to you within 24 hours.
                </p>
                <div className="space-y-6">
                  <div>
                    <p className="text-blue-500 font-bold uppercase text-xs">
                      Direct Line
                    </p>
                    <p className="text-xl">+92 (300) 123 4567</p>
                  </div>
                  <div>
                    <p className="text-blue-500 font-bold uppercase text-xs">
                      HQ Address
                    </p>
                    <p className="text-xl">Industrial Estate, Lahore, PK</p>
                  </div>
                </div>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 bg-slate-800 rounded-xl border border-slate-700 focus:border-blue-600 outline-none transition"
                />
                <input
                  type="email"
                  placeholder="Business Email"
                  className="w-full p-4 bg-slate-800 rounded-xl border border-slate-700 focus:border-blue-600 outline-none transition"
                />
                <textarea
                  rows="4"
                  placeholder="Brief about your project (e.g. PU Room Size, Warehouse Area)"
                  className="w-full p-4 bg-slate-800 rounded-xl border border-slate-700 focus:border-blue-600 outline-none transition"
                ></textarea>
                <button className="w-full bg-blue-600 p-4 rounded-xl font-black hover:bg-white hover:text-blue-600 transition-all uppercase tracking-widest">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
