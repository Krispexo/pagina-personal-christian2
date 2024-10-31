import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Card from "../components/Card"
import Footer from "../components/Footer"

export default function Sobremi() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen bg-gray-900 text-white p-8">

        {/*sección de Información Personal en el lado izquierdo */}
        <section className="bg-gray-800 rounded-lg p-6 mb-8 max-w-lg mx-auto lg:mx-0 lg:mb-0">
          <h1 className="text-3xl font-bold mb-4">Sobre mí</h1>
          <p className="text-lg mb-4">
            Soy una persona a la que le encanta el desarrollo web. Cuento con conocimientos de React, Angular...
            Además de lenguajes de programación como Java, JS, TS, PHP. Y para bases de datos MySQL.
            Cuento con un nivel de inglés alto (certificado B2), y nivel básico de alemán.
            El trabajo en equipo es lo mio y cuento con bastante pro-actividad.
          </p>
        </section>

        {/*sección de Educación, Experiencia y Descarga del CV en el lado derecho */}
        <div className="flex flex-col justify-start items-start max-w-lg mx-auto lg:mx-0 space-y-8">

          {/*educación */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Educación</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/*tarjeta de Escolapios */}
              <Card
                name="Escolapios"
                imageUrl="/escolapios.jpg"
                description="Grado superior en Desarrollo de apliaciones multiplataforoma"
                linkUrl="https://www.escolapiosdegetafe.es"
              />

              {/*tarjeta de U-TAD */}
              <Card
                name="U-TAD"
                imageUrl="/u-tad.jpeg"
                description="Grado Superior en Desarrollo de Aplicaciones Web."
                linkUrl="https://u-tad.com"
              />
            </div>
          </section>


          {/*experiencia */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Experiencia</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card
                name="Neoris"
                imageUrl="/neoris.jpg"
                description="Prácticas profesionales en desarrollo de software en Neoris."
                linkUrl="https://neoris.com"
              />
            </div>
          </section>

          {/* Botón de Descarga del CV */}
          <h2 className="text-2xl font-semibold mb-4">¡Conóceme más!</h2>
          <section>
            <Link href="/cv.pdf" download target="_blank" rel="noopener noreferrer">
              <div className="px-4 py-2 bg-blue-500 rounded-lg transition-transform duration-200 transform hover:scale-150 cursor-pointer">
                Descargar CV
              </div>
            </Link>
          </section>
        </div>
      </div>
      <Footer />
    </>

  );
}



