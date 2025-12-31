import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const services = [
  {
    title: "PU Sandwich Panels",
    spec: "50mm - 200mm Thickness",
    desc: "Polyurethane foam core for cold storage, clean rooms, and pharmaceutical labs.",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070",
  },
  {
    title: "Modular Site Offices",
    spec: "Quick-Install Units",
    desc: "Portable, energy-efficient offices for construction sites and remote oil/gas locations.",
    img: "https://images.unsplash.com/photo-1541976590-713941fbc1c6?q=80&w=2070",
  },
  {
    title: "Interior Restaurant Design",
    spec: "Turnkey Architecture",
    desc: "Bespoke furniture, custom sofas, and high-end fit-outs for the hospitality sector.",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070",
  },
  {
    title: "Heavy Steel Structures",
    spec: "ASTM Standard Steel",
    desc: "Large scale warehouses and industrial shed construction with integrated PU roofing.",
    img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070",
  },
];

export default function Products() {
  return (
    <>
      <Navbar />
      <div className="pt-40 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tight uppercase">
            Industrial <span className="text-blue-600 italic">Inventory</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mb-16 text-lg">
            We provide high-density insulated panels and modular building
            components engineered for the harshest environments.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {services.map((s, i) => (
              <div
                key={i}
                className="group relative bg-slate-900 rounded-3xl overflow-hidden aspect-video shadow-2xl"
              >
                <img
                  src={s.img}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                  alt={s.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10">
                  <span className="text-blue-400 font-bold uppercase text-xs tracking-[0.3em]">
                    {s.spec}
                  </span>
                  <h3 className="text-3xl font-black text-white mt-2 uppercase">
                    {s.title}
                  </h3>
                  <p className="text-slate-300 mt-4 max-w-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
