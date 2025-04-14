export function Header() {
  return (
    <header className="flex justify-between w-full absolute top-0 p-4 bg-gradient-to-r from-black to-gray-700 text-white shadow-sm shadow-blue-300">
      <img src="src/assets/react.svg" className="w-10" alt="" />
      <nav>
        <ul className="list-none flex text-2xl font-medium text-white gap-10  ">
          <li>Princing</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  );
}
