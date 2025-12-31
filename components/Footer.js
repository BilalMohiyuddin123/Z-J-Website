export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <h2 className="text-3xl font-black mb-6 italic">
            Z-J <span className="text-blue-600">INTEGRATED</span>
          </h2>
          <p className="text-slate-400 max-w-sm mb-6 leading-relaxed text-sm">
            Setting the standard in Pakistan for modular and prefabricated
            engineering. Specializing in PU insulation and turnkey interior
            architecture.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-slate-800 rounded-full border border-slate-700 flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
              In
            </div>
            <div className="w-10 h-10 bg-slate-800 rounded-full border border-slate-700 flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
              Fb
            </div>
            <div className="w-10 h-10 bg-slate-800 rounded-full border border-slate-700 flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
              Ig
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-blue-500 uppercase tracking-widest text-xs">
            Engineering Services
          </h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li className="hover:text-white cursor-pointer transition">
              PU Sandwich Panels
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Pre-Fab Buildings
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Interior Architecture
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Steel Warehousing
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-blue-500 uppercase tracking-widest text-xs">
            Resources
          </h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li className="hover:text-white cursor-pointer transition">
              Technical Catalogue
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Company Profile
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Project Portfolio
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Privacy Policy
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-slate-800 flex justify-between text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">
        <p>© 2025 Z-J Integrated Engineering Solutions</p>
        <p>Design by BI-M</p>
      </div>
    </footer>
  );
}
