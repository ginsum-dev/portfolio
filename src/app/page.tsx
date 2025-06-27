import Header from "@/components/ui/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen">
      <Header />
      <main className="flex flex-col p-8 pb-20 gap-16">
        <h1>Hello World</h1>
      </main>
      <footer className="flex gap-[24px] flex-wrap items-center justify-center">
        <p>Footer</p>
      </footer>
    </div>
  );
}
