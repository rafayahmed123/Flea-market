import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Features & Press Section */}

      <div className="bg-black p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-6">
          {/* Logo and Social Section */}
          <div className="space-y-6">
            <Image
              src="/logo.png"
              alt="HWY 404 & STEELES FLEA MARKET"
              width={200}
              height={50}
              className="brightness-0 invert"
            />
            <div>
              <h3 className="text-xl font-bold mb-4">Follow On</h3>
              <div className="flex space-x-4">
                <Link href="#" className="bg-primary p-2 rounded-full">
                  <Facebook className="w-6 h-6 text-black" />
                </Link>
                <Link href="#" className="bg-primary p-2 rounded-full">
                  <Instagram className="w-6 h-6 text-black" />
                </Link>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/become-vendor"
                  className="hover:text-primary transition-colors"
                >
                  → Become A Vendor
                </Link>
              </li>
              <li>
                <Link
                  href="/our-vendors"
                  className="hover:text-primary transition-colors"
                >
                  → Our Vendors
                </Link>
              </li>
              <li>
                <Link
                  href="/flea-bucks"
                  className="hover:text-primary transition-colors"
                >
                  → Flea Bucks
                </Link>
              </li>
            </ul>
          </div>

          {/* Location Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-2 rounded-full">
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold">Location</h3>
            </div>
            <address className="not-italic">
              2900 Steeles Ave.
              <br />
              East, Thornhill,
              <br />
              Ontario L3T4X1
            </address>
          </div>

          {/* Email Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-2 rounded-full">
                <Mail className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold">Email Us</h3>
            </div>

            <a
              href="mailto:info@404steelesfleamarket.com"
              className="hover:text-primary transition-colors"
            >
              info@404steelesfleamarket.com
            </a>
          </div>
        </div>
        {/* Copyright Section */}

        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <p className="text-center text-gray-400">
              © 2023 Hwy 404 & Steeles Flea Market. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
