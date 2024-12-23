import buildingsImage from "../assets/buildings.jpg";
import Image from "next/image"; // Import the Next.js Image component

export default function CallToAction() {
  return (
    <section className="relative h-[800px]">
      <div className="absolute inset-0">
        <img
          src={buildingsImage.src} // Access the `src` property from StaticImageData
          alt="Flea Market Exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center">
        <h2 className="text-brightYellow font-serif text-5xl font-medium text-center mb-12 max-w-4xl">
          WHERE EVERY WEEKEND IS A THRILL-FILLED SHOPPING ADVENTURE!
        </h2>
        <div className="flex gap-4">
          <button className="bg-primary text-black px-8 py-3 rounded border-2 border-secondary hover:border-primary hover:bg-secondary transition-all duration-300 transform hover:scale-95 hover:text-white shadow-md hover:shadow-lg">
            List Of Vendors
          </button>

          <button className="bg-secondary text-white px-8 py-3 rounded border-2 border-primary hover:bg-primary hover:border-secondary hover:text-black transition-all duration-300 transform hover:scale-95 shadow-md hover:shadow-lg">
            Join As A Vendor
          </button>
        </div>
      </div>
    </section>
  );
}
