export default function RecipeCard({ recette }) {
     return (
       <div className="max-w-sm overflow-hidden rounded-lg shadow-md ">
         <img className="w-full p-5" src={recette.image} alt={`Image de ${recette.name}`} />
         <div className="px-6 py-4">
           <div className="mb-2 text-xl font-bold">{recette.name}</div>
           <p className="text-base text-gray-700">
             {recette.description}
           </p>
         </div>
         <div className="px-6 pt-4 pb-2">
           {recette.tags && recette.tags.map((tag, index) => (
             <span key={index} className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
               #{tag}
             </span>
           ))}
         </div>
       </div>
     );
   }
   