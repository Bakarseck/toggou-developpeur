import RecipeCard from '@/components/RecipeCard';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import Banner from '@/components/Banner';
import About from '@/components/About';

export async function getStaticProps() {
     const data = require('../data/recettes.json');
     return {
          props: {
               recettes: data,
          },
     };
}

export default function Recettes({ recettes }) {
     return (
          <div className='min-h-screen'>
               <Header />
               <Banner />
               <div className="container mx-auto">
                    <h1 className="my-8 text-[110px] font-bold text-center font-grand-hotel text-[#38B6FF]">Recettes</h1>
                    <div className="grid items-center grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                         {recettes.map(recette => (
                              <RecipeCard key={recette.id} recette={recette} />
                         ))}
                    </div>
               </div>
               <div className="container mx-auto mt-20">
                    <h1 className="my-8 text-[110px] font-bold text-center font-grand-hotel text-[#38B6FF]">À Propos</h1>
               </div>
               <About />
               <Footer />
          </div>
     );
}
