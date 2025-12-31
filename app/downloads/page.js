import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Downloads() {
  const files = [
    { title: "Z-J Company Profile", date: "2025 Edition", icon: "📁" },
    { title: "PU Panel Technical Specs", date: "PDF Download", icon: "📑" },
    { title: "Modular Building Catalog", date: "24 Pages", icon: "📦" },
    {
      title: "Restaurant Furniture Series",
      date: "Custom Designs",
      icon: "🛋️",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-40 pb-24 bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black text-slate-900 mb-4 uppercase italic">
              Resource Center
            </h1>
            <p className="text-slate-500 font-medium">
              Download our latest technical brochures and certifications.
            </p>
          </div>

          <div className="space-y-4">
            {files.map((f, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-slate-200 flex items-center justify-between group hover:border-blue-600 transition-all shadow-sm"
              >
                <div className="flex items-center gap-6">
                  <span className="text-3xl">{f.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {f.title}
                    </h3>
                    <p className="text-slate-500 text-sm uppercase font-bold tracking-tighter">
                      {f.date}
                    </p>
                  </div>
                </div>
                <a
                  href="https://google.com"
                  className="bg-slate-100 text-slate-900 px-6 py-2 rounded-xl font-bold group-hover:bg-blue-600 group-hover:text-white transition-all"
                >
                  DOWNLOAD
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
