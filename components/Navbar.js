import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-white/90 backdrop-blur-lg border border-slate-200 rounded-2xl shadow-2xl">
      <div className="px-6 h-16 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 flex items-center justify-center rounded-lg shadow-lg">
            <span className="text-white font-black text-xl italic">ZJ</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-black text-slate-900 leading-none text-lg">
              Z-J INTEGRATED
            </p>
            <p className="text-[10px] text-blue-600 font-bold tracking-[0.2em] uppercase">
              Engineering Solutions
            </p>
          </div>
        </Link>

        <div className="hidden md:flex space-x-8 font-bold text-slate-600 text-sm uppercase tracking-wide">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-600 transition">
            Solutions
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/downloads" className="hover:text-blue-600 transition">
            Catalogue
          </Link>
        </div>

        <Link
          href="/contact"
          className="bg-slate-900 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-blue-600 transition-all shadow-lg"
        >
          GET A QUOTE
        </Link>
      </div>
    </nav>
  );
}
