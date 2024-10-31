import Image from 'next/image';
import Link from 'next/link';

export default function Card({ name, imageUrl, description, linkUrl }) {
    return (
      <Link href={linkUrl} passHref>
        <div className="relative group bg-gray-800 rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
          {/*imagen y nombre */}
          <div className="relative h-48">
            <Image
              src={imageUrl}
              alt={name}
              layout="fill"
              objectFit="cover"
              className="opacity-90 group-hover:opacity-50 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold text-white">{name}</h3>
            </div>
          </div>
  
          {/* texto expandido al pasar el raton */}
          <div className="p-4 group-hover:block transition-opacity duration-300">
            <p className="text-sm text-white">{description}</p>
          </div>
        </div>
      </Link>
    );
  }