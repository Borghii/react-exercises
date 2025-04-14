import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { MainContent } from "./Components/Main";

export function Page() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-50  p-4  h-screen w-screen bg-gradient-to-l from-black to-90%">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}
