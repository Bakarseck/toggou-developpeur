import Image from 'next/image';

export default function Banner() {
     return (
          <div id="home" className="relative w-full h-[86vh]">
               <Image
                    src="/about.png"
                    layout="fill"
                    objectFit="cover"
                    alt="Cuisine"
                    className="opacity-50"
               />
               <div className="absolute inset-0 bg-black bg-opacity-50"></div>
               <h1 className="absolute font-bold transform -translate-x-1/2 -translate-y-1/2 text-7xl text-center top-1/2 left-1/2 text-[#38B6FF] font-grand-hotel leading-relaxed">
                    Bienvenue sur le site Toggou Développeur
               </h1>
          </div>
     );
}
