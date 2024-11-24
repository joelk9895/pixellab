export default function Home() {
  return (
    <div className="relative min-h-screen text-white font-sans">
      <video
        loop
        muted
        playsInline
        autoPlay
        preload="metadata"
        poster="https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/hero-desktop-poster.jpg?tr=q-95"
        src="https://web-images.credcdn.in/v2/_next/assets/videos/landing/desktop/hero-desktop.mp4?tr=q-95"
        className="absolute top-0 left-0 w-full h-full object-cover"
      ></video>
      <div className="relative z-10  min-h-screen">
        <header className="p-8 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            pixellab<span className="text-yellow-400">.</span>
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#services" className="hover:text-yellow-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-yellow-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-300">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="text-center h-[90vh] flex justify-center items-center">
          <section className="py-20">
            <h2 className="text-[10rem] text-white leading-[10rem] -tracking-wide font-semibold">
              we make{"  "}
              <span style={{ fontFamily: "var(--font-scotch)" }}>
                {" "}
                funky
              </span>{" "}
              websites.
            </h2>
            <p className="mt-12 text-lg max-w-2xl mx-auto font-sans font-light lowercase">
              We craft unique, bold, and engaging websites.
            </p>
            <button
              className="mt-8 px-8 py-3 bg-white text-black text-lg font-semibold 
              transform transition duration-300 ease-in-out
              hover:scale-105 hover:bg-yellow-300 
              active:scale-95 active:bg-yellow-400"
            >
              Let's Get Started
            </button>
          </section>
        </main>
      </div>
    </div>
  );
}