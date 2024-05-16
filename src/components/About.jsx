import Image from 'next/image';

export default function About() {
     return (
          <div id="about" className="relative w-full h-[80vh]">
               <Image
                    src="/about.png"
                    layout="fill"
                    objectFit="cover"
                    alt="Un aperçu culinaire"
                    className='opacity-50'
               />

               <div className='grid grid-cols-1 max-w-7xl md:grid-cols-2'>
                    <div>
                         <div className="flex h-[80vh] bg-black">
                              <div className="flex items-center justify-center text-center">
                                   <div className="font-bold text-center text-[#38B6FF] font-grand-hotel">
                                        <h1 className="text-5xl font-bold leading-relaxed text-center md:text-6xl">Ce site a été créé dans l'optique de vous fournir des recettes sénégalaises.</h1>
                                        <p className="mt-10 text-2xl">Régalez-vous !!!</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               {/* Texte superposé */}
          </div>
     );
}
