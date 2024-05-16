import Link from "next/link"
import Image from "next/image";

export function Footer() {
     return (
          (<footer id="footer" className="w-full mt-20 bg-black md:py-12 dark:bg-gray-800">
               <div>
                    <h1 className="p-4 text-center ml-5 md:text-5xl text-3xl text-[#38B6FF] font-grand-hotel leading-relaxed">Tous droits réservés BarhamSoft © 2022</h1>
               </div>
          </footer>)
     );
}

function MountainIcon(props) {
     return (
          (<svg
               {...props}
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round">
               <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
          </svg>)
     );
}
