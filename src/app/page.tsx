import Header from "@/components/ui/Header";
import About from "@/components/ui/sections/About";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen">
      <Header />
      <main className="flex flex-col p-8 pb-20 gap-16 min-h-[calc(100vh-100px)]">
        <About />
      </main>
      <footer className="flex gap-[24px] flex-wrap items-center justify-center">
        <p>Footer</p>
      </footer>
    </div>
  );
}
