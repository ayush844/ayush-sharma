import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    return ( <nav className="max-w-7xl mx-auto px-4 md:px-8 py-5 grid grid-cols-12">
        <div className="col-span-6 flex md:col-span-6">

            <Link href='/'>
                <h1 className="text-3xl md:text-4xl font-bold">Ayush <span className="bg-gradient-to-r from-red-600 via-orange-500 to-pink-600 bg-clip-text text-transparent">
                Sharma</span></h1>
            </Link>

        </div>

        <div className="flex items-center justify-end md:col-span-6 col-span-6">
            <Button className="sm:flex bg-gradient-to-r from-red-600 to-pink-500 p-1 md:p-3" asChild>
                <a href="mailto:ayush.xyz1625@gmail.com" className=" text-sm md:text-lg font-semibold">Contact Me</a>
            </Button>
        </div>

    </nav> );
}
 
export default Navbar;