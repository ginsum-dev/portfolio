import Header from "@/components/ui/Header";
import Hero from "@/components/ui/sections/Hero";
import About from "@/components/ui/sections/About";
import Skills from "@/components/ui/sections/Skills";
import Projects from "@/components/ui/sections/Projects";
import Contact from "@/components/ui/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
