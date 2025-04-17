import ReactLogo from "../assets/react.svg";

export function Header() {
  return (
    <header className="flex h-12 gap-2 justify-center items-center w-screen absolute top-0 p-2 bg-gradient-to-r from-red-500 to-red-700 text-white shadow-sm shadow-blue-300">
      <img src={ReactLogo} className="w-10 " alt="React Logo" />
      <h1 className="text-lg font-[inter]">my travel journal</h1>
    </header>
  );
}
