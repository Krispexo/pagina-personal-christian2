"use client"; //esto sirve para decirle a next que renderice del lado del cliente para que pueda usar el useEfect

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://picsum.photos/v2/list?limit=6'); // API pública para obtener imágenes
      const data = await response.json();
      const projectsData = data.map((item) => ({
        title: `Proyecto ${item.id}`,
        imageUrl: item.download_url,
      }));
      setProjects(projectsData);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-4">
        <h1 className="text-3xl font-bold mb-8">Proyectos</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} title={project.title} imageUrl={project.imageUrl} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );

}

//componente independiente al ya creado de card para usar la api pública
function Card({ title, imageUrl }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-4 flex items-center space-x-4 hover:scale-105 transition-transform duration-200">
      <div className="relative w-24 h-24">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>
  );
}
