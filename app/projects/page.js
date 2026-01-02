"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const styles = `
  @keyframes move-lines {
    0% { background-position: 0 0; }
    100% { background-position: 80px 80px; }
  }

  .projects-section-root {
    background-color: #020617; 
    position: relative;
    z-index: 0;
    isolation: isolate;
    min-height: 100vh;
  }

  .moving-pattern-layer {
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      45deg,
      rgba(59, 130, 246, 0.1) 0px,
      rgba(59, 130, 246, 0.1) 1px,
      transparent 1px,
      transparent 40px
    );
    background-size: 80px 80px;
    animation: move-lines 2s linear infinite;
    z-index: 0;
    pointer-events: none;
  }
`;

export default function ProjectsPage() {
  // Array for 10 projects. Update the 'src' with your actual image filenames.
  const projects = [
    { id: 1, src: "/images/p1.jpg" },
    { id: 2, src: "/images/p2.jpg" },
    { id: 3, src: "/images/p3.jpg" },
    { id: 4, src: "/images/p4.jpg" },
    { id: 5, src: "/images/p5.jpg" },
    { id: 6, src: "/images/p6.jpg" },
    { id: 7, src: "/images/p7.jpg" },
    { id: 8, src: "/images/p8.jpg" },
    { id: 9, src: "/images/p9.jpg" },
    { id: 10, src: "/images/p10.jpg" },
    { id: 11, src: "/images/p11.jpg" },
    { id: 12, src: "/images/p12.jpg" },
  ];

  return (
    <>
      <style>{styles}</style>
      <Navbar />
      <main className="projects-section-root pt-24 pb-24">
        <div className="moving-pattern-layer" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6">
          {/* --- HEADER --- */}
          <div className="mb-16 text-center">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-xs">
              Our Work
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mt-3 uppercase italic tracking-tighter">
              Our <span className="text-blue-500">Portfolio</span>
            </h1>
            <div className="h-1 w-20 bg-blue-600 mt-4 mx-auto rounded-full" />

            <p className="text-slate-300 text-lg mt-8 max-w-2xl mx-auto">
              We have successfully completed several high-scale projects,
              delivering precision-engineered modular solutions and
              architectural excellence.
            </p>
          </div>

          {/* --- GRID --- 
              1 in each row on phone (grid-cols-1)
              3 in each row on laptop/desktop (lg:grid-cols-3)
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-900 shadow-lg"
              >
                <Image
                  src={project.src}
                  alt={`Project ${project.id}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
