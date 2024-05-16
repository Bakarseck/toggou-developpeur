import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

export function Header() {
     return (
          (<header id="header" className="flex items-center justify-between w-full px-4 bg-black h-[110px] md:px-6">
               <Link className="flex items-center gap-2" href="#">
                    <Image
                         src="/logo.png"
                         width={200}
                         height={200}
                         className="mt-[60px] ml-10"
                    />
               </Link>
               <nav className="items-center hidden gap-6 text-sm font-medium md:flex">
                    <ScrollLink
                         to="home"
                         smooth={true}
                         duration={500}
                         className="dark:hover:text-gray-50 text-[#38B6FF] text-[45px] font-grand-hotel mr-20"
                    >
                         Home
                    </ScrollLink>
                    <ScrollLink
                         to="about"
                         smooth={true}
                         duration={500}
                         className="dark:hover:text-gray-50 text-[#38B6FF] text-[45px] font-grand-hotel mr-20"
                    >
                         About
                    </ScrollLink>
                    <ScrollLink
                         to="footer"
                         smooth={true}
                         duration={500}
                         className="dark:hover:text-gray-50 text-[#38B6FF] text-[45px] font-grand-hotel mr-20"
                    >
                         Footer
                    </ScrollLink>
               </nav>
               <Sheet>
                    <SheetTrigger asChild>
                         <Button className="md:hidden text-[#38B6FF]" size="icon" variant="outline">
                              <MenuIcon className="w-6 h-6" />
                              <span className="sr-only">Toggle navigation menu</span>
                         </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                         <div className="flex flex-col items-start gap-6 p-6">
                              <Link className="flex items-center gap-2" href="#">
                                   <Image
                                        src="/logo.png"
                                        width={100}
                                        height={100}
                                   />
                              </Link>
                              <nav className="grid gap-4">
                                   <ScrollLink
                                        to="home"
                                        smooth={true}
                                        duration={500}
                                        className="dark:hover:text-gray-50 text-[#38B6FF] text-[45px] font-grand-hotel mr-20"
                                   >
                                        Home
                                   </ScrollLink>
                                   <ScrollLink
                                        to="about"
                                        smooth={true}
                                        duration={500}
                                        className="dark:hover:text-gray-50 text-[#38B6FF] text-[45px] font-grand-hotel mr-20"
                                   >
                                        About
                                   </ScrollLink>
                                   <ScrollLink
                                        to="footer"
                                        smooth={true}
                                        duration={500}
                                        className="dark:hover:text-gray-50 text-[#38B6FF] text-[45px] font-grand-hotel mr-20"
                                   >
                                        Footer
                                   </ScrollLink>
                              </nav>
                         </div>
                    </SheetContent>
               </Sheet>
          </header>)
     );
}

function MenuIcon(props) {
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
               <line x1="4" x2="20" y1="12" y2="12" />
               <line x1="4" x2="20" y1="6" y2="6" />
               <line x1="4" x2="20" y1="18" y2="18" />
          </svg>)
     );
}

