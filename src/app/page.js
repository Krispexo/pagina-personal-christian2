import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <>
    <Navbar />

      <div className="flex flex-col items-center min-h-screen bg-gray-900 text-center text-white">
        <h1 className="text-3xl font-bold mb-4">Bienvenido a mi página personal</h1>

           {/* Contenedor expandible y responsivo */}
      <div className="grid grid-cols-2 items-center w-80 sm:w-96 md:w-1/2 lg:w-1/3 h-48 mb-4 bg-blue-300 rounded-3xl p-4 transform transition-transform duration-300 hover:scale-105 my-6">
        
        {/* Imagen circular */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32">
          <Image
            src="/a80e3690318c08114011145fdcfa3ddb.jpg"
            alt="Foto de [Tu Nombre]"
            fill
            className="rounded-full object-cover"
          />
        </div>

        {/* Texto al lado derecho de la imagen, responsivo */}
        <h2 className="text-lg font-semibold ml-4 overflow-hidden text-ellipsis break-words">
         Hola mi nombre es Christian.
        </h2>
      </div>

      
        <Link
          href="https://github.com/Krispexo"
          target="_blank"
          rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-500 rounded-lg transition-transform duration-200 transform hover:scale-150 hover:mx-2">

          Visita mi GitHub
        </Link>
      </div>
      <Footer />
    </>
  );
}