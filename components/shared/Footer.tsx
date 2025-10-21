import Social from "../common/Social";

export function Footer(){
    return(
       <footer className="py-12 border-t border-gray-400 ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left">
                <p className="text-lg font-semibold ">Sayed Anwar</p>
                <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
                </div>
                <nav aria-label="Social media links" className="mt-4 md:mt-0">
                <Social />
                </nav>
            </div>
      </footer>
    )
}