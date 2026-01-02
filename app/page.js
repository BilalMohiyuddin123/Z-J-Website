"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

// --- CUSTOM CSS FOR FAST WHITE LINES & VISIBILITY ---
const styles = `
  @keyframes move-lines {
    0% { background-position: 0 0; }
    100% { background-position: 80px 80px; }
  }

.products-section-root {
  background-color: #00000; /* Deep Navy */
  position: relative;
  z-index: 0;
  isolation: isolate;
}

  .moving-pattern-layer {
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      45deg,
      rgba(59, 130, 246, 0.12) 0px,
      rgba(59, 130, 246, 0.12) 1px,
      transparent 1px,
      transparent 40px
    );
    background-size: 80px 80px;
    animation: move-lines 1.5s linear infinite;
    z-index: 0;
    pointer-events: none;
  }

  .pop-in {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
    transition: all 0.6s ease-out;
  }

  .pop-in-visible {
    opacity: 1 !important;
    transform: scale(1) translateY(0) !important;
  }

  .text-shadow-sm {
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
  }
`;

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pop-in-visible");
          }
        });
      },
      { threshold: 0.05 }
    );

    document.querySelectorAll(".pop-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProduct]);

  const products = [
    {
      id: 1,
      title: "Modular Site Office",
      specs: 'EPS/PU/PIR • 2", 4", 6"',
      shortDesc:
        "Rapid-deployment office units designed for harsh industrial environments.",
      longDesc:
        "Our modular site offices are the gold standard for construction management. Built with high-tensile MS frames and your choice of EPS, PU, or PIR insulation panels.",
      img: "/images/pu-room.jpg",
    },
    {
      id: 2,
      title: "Security Guard Room",
      specs: "Insulated • MS Frame",
      shortDesc:
        "Compact, insulated security cabins for checkpoints and perimeters.",
      longDesc:
        "Designed for 24/7 security operations. These cabins feature 2-inch to 6-inch PU insulation to keep guards comfortable in any weather.",
      img: "/images/guardroom.jpg",
    },
    {
      id: 3,
      title: "Prefab Washrooms",
      specs: "Moisture-Resistant",
      shortDesc: "Hygienic and ready-to-use sanitary units with full plumbing.",
      longDesc:
        "Our prefab washrooms solve the hygiene challenge. Using moisture-resistant PU panels, these units prevent mold and odor.",
      img: "/images/portablewashroom.jpg",
    },
    {
      id: 4,
      title: "Prefabricated Structures",
      specs: "MS Frame • Profile",
      shortDesc:
        "Factory-engineered buildings made with high-strength MS frames and premium profile sheets.",
      longDesc:
        "Ideal for warehouses, sheds, workshops, and storage with fast installation and long life.",
      img: "/images/prefabstructure.jpg",
    },
    {
      id: 5,
      title: "Profile Shed Parking",
      specs: "UV-Resistant • MS Frame",
      shortDesc: "Modern parking solutions with architectural profile sheets.",
      longDesc:
        "Upgrade your facility's look with our tensile parking sheds. We use high-grade MS tubing and profile sheets shed.",
      img: "/images/parkingshed.jpg",
    },
    {
      id: 6,
      title: "Tensile Shed",
      specs: "MS Frame • UV Resistant Fabric",
      shortDesc:
        "Durable tensile sheds built with MS frames for wide-span coverage.",
      longDesc:
        "High-quality tensile structures supported by robust MS frames and premium fabric. Designed for shade, weather protection, and long-term outdoor performance.",
      img: "/images/tensileshed.jpg",
    },
  ];

  return (
    <>
      <style>{styles}</style>
      <Navbar />
      <main className="bg-white overflow-x-hidden">
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[85vh] pt-20 pb-10 md:pt-24 md:pb-12 lg:pt-32 lg:pb-20 bg-[#020617] overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-img.JPG"
              alt="Hero"
              fill
              priority
              className="object-cover object-center opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/60 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-[1000px] mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center">
            <div className="animate-in fade-in slide-in-from-bottom duration-1000 ease-out">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/90 text-white text-[10px] font-black mb-4 tracking-[0.2em] uppercase backdrop-blur-md shadow-lg">
                Est. 2010 • Lahore
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.85] mb-6 uppercase italic tracking-tighter drop-shadow-2xl">
                Build <br />
                <span className="text-blue-500 not-italic">Smarter.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-100 max-w-2xl mx-auto mb-8 font-bold leading-relaxed drop-shadow-md text-shadow-sm">
                Z-J Integrated Engineering is your turnkey partner for
                pre-fabricated construction and luxury interior architecture.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all shadow-xl hover:-translate-y-1">
                  Get a Quote
                </button>
                <Link href="/projects">
                  <button className="bg-white/20 text-white border-2 border-white/70 px-10 py-4 rounded-xl font-black backdrop-blur-md uppercase tracking-widest text-xs hover:bg-white hover:text-slate-900 transition-all shadow-xl hover:-translate-y-1">
                    View Projects
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --- PRODUCTS SECTION --- */}
        <section className="products-section-root py-24">
          <div className="moving-pattern-layer" />

          <div className="relative z-10 max-w-[1400px] mx-auto px-6">
            <div className="mb-16 text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-black text-blue-600 mt-2 uppercase tracking-tighter italic">
                Our Core Products
              </h2>
              <div className="h-1.5 w-24 bg-blue-600 mt-4 mx-auto lg:mx-0 rounded-full" />
            </div>

            {/* Grid updated to 2 columns and reduced card height */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  /* HEIGHT REDUCED HERE */
                  className="pop-in group relative h-[300px] md:h-[400px] overflow-hidden rounded-[2.5rem] cursor-pointer shadow-2xl border-4 border-slate-800/50"
                >
                  <Image
                    src={product.img}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent group-hover:from-slate-950/90 transition-all duration-500" />

                  <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                    <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <span className="text-blue-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-2 block opacity-0 group-hover:opacity-100 transition-opacity">
                        {product.specs}
                      </span>
                      <h3 className="text-xl md:text-3xl lg:text-4xl font-black text-white uppercase italic leading-none flex items-center justify-between">
                        {product.title}
                        <span className="text-blue-500 transition-all duration-500 group-hover:translate-x-2 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,1)]">
                          →
                        </span>
                      </h3>
                      <p className="text-slate-200 text-xs md:text-sm mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 line-clamp-2">
                        {product.shortDesc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- MODAL --- */}
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
              onClick={() => setSelectedProduct(null)}
            />
            <div className="relative bg-white w-full max-w-5xl max-h-[90vh] rounded-[3rem] overflow-hidden shadow-3xl flex flex-col animate-in zoom-in duration-300">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 z-50 bg-slate-900 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all"
              >
                ✕
              </button>
              <div className="overflow-y-auto h-full">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto min-h-[400px]">
                    <Image
                      src={selectedProduct.img}
                      alt="Product"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-16">
                    <h3 className="text-3xl font-black text-slate-900 uppercase italic mb-6">
                      {selectedProduct.title}
                    </h3>
                    <p className="text-slate-600 text-lg mb-6 leading-relaxed italic border-l-4 border-blue-600 pl-6">
                      {selectedProduct.shortDesc}
                    </p>
                    <p className="text-slate-600 text-base leading-relaxed mb-10">
                      {selectedProduct.longDesc}
                    </p>
                    <a
                      href="/contact"
                      className="inline-block bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs"
                    >
                      Request Technical Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- INTERIOR DESIGN --- */}
        <section className="py-20 bg-slate-900 text-white rounded-[2rem] mx-4 md:mx-10 mb-10 overflow-hidden shadow-3xl">
          <div className="max-w-[1400px] mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-12 tracking-tighter">
              Interior <span className="text-blue-500">Excellence</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Offices",
                  img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070",
                },
                {
                  title: "Hospitality",
                  img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2070",
                },
                {
                  title: "Homes",
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
                  <h3 className="absolute bottom-6 left-6 text-xl font-black uppercase italic">
                    {item.title}
                  </h3>
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
