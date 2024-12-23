import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { PhoneIcon, ClockIcon } from "@heroicons/react/solid"; // Import icons from Heroicons

export default function Header() {
  return (
    <div className="w-full fixed top-0 left-0 z-40">
      <div className="bg-secondary text-white py-2 flex justify-between items-center px-4">
        <div className="flex items-center gap-4 flex-grow ml-10">
          <span>Something For Everyone!</span>
        </div>

        <div className="flex items-center gap-8 mr-16">
          <div className="flex items-center gap-2">
            <ClockIcon className="w-5 h-5 text-white" />
            <span>Saturday & Sunday, 10am - 5pm</span>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="w-5 h-5 text-white" />
            <span>+1 (905) 709-0004</span>
          </div>
          <div className="flex gap-2 items-center">
            <Link href="#" className="">
              <Facebook className="w-6 h-6 text-white" />
            </Link>
            <Link href="#" className="">
              <Instagram className="w-6 h-6 text-white" />
            </Link>
          </div>
        </div>
      </div>

      <header className="bg-primary py-2 shadow-md h-18">
        <nav className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo or Icon */}
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-16 h-16 text-primary"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>

          {/* Main navigation and "Become A Vendor" */}
          <div className="flex items-center gap-6">
            <Link
              href="/vendor-list"
              className="text-black hover:opacity-80 hover:shadow-md text-lg font-medium"
            >
              Vendor List
            </Link>
            <Link
              href="/flea-bucks"
              className="text-black hover:opacity-80 hover:shadow-md text-lg font-medium"
            >
              Flea Bucks Coupon
            </Link>
            <Link
              href="/blog"
              className="text-black hover:opacity-80 hover:shadow-md text-lg font-medium"
            >
              Blog
            </Link>
            <Link
              href="/become-vendor"
              className="bg-secondary text-white px-6 py-3 rounded hover:bg-opacity-90 hover:bg-primary hover:border-2 hover:border-black hover:text-black transition-all shadow-lg hover:shadow-xl"
            >
              BECOME A VENDOR
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
