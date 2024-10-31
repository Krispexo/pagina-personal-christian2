import Link from 'next/link';

function Navbar() {
  return (
    <nav className="flex justify-center gap-4 p-4 bg-gray-800 text-white">
      <Link
        href="/"
        className="px-4 py-2 bg-blue-500 rounded-lg transition-transform duration-200 transform hover:scale-150 hover:mx-2"
      >
        Inicio
      </Link>
      <Link
        href="/projects"
        className="px-4 py-2 bg-blue-500 rounded-lg transition-transform duration-200 transform hover:scale-150 hover:mx-4"
      >
        Proyectos
      </Link>
      <Link
        href="/sobremi"
        className="px-4 py-2 bg-blue-500 rounded-lg transition-transform duration-200 transform hover:scale-150 hover:mx-4"
      >
        Sobre mí
      </Link>
    </nav>
  );
}

export default Navbar;