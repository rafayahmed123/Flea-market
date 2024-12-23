"use client"; // This tells Next.js that this component should be rendered on the client side

import { useState } from "react";

export default function Hero() {
  const categories = [
    { icon: "🏈", title: "Sports & Collectables" },
    { icon: "🏺", title: "Antiques & Decor" },
    { icon: "🍽️", title: "Foods, Treats & Sweets" },
    { icon: "🎨", title: "Artwork & Greenery" },
    { icon: "📱", title: "Electronics & Gadgets" },
    { icon: "👕", title: "Clothing & Accessories" },
  ];

  const data = [
    { name: "Bobs burgers", location: "Booth 101" },
    { name: "Bobs burgers", location: "Booth 101" },
    { name: "Bobs burgers", location: "Booth 101" },
    { name: "Bobs burgers", location: "Booth 101" },
    { name: "Bobs burgers", location: "Booth 101" },
    { name: "Bobs burgers", location: "Booth 101" },
    { name: "Bobs burgers", location: "Booth 101" },
    { name: "Bobs burgers", location: "Booth 101" },
    { name: "Bobs burgers", location: "Booth 101" },
  ];

  // State to manage modal visibility and title
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (title: string) => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalTitle("");
  };

  return (
    <section className="bg-secondary text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center max-w-5xl mx-auto mb-16 leading-tight">
          Escape The Ordinary And Embark On A Shopping Adventure At The Flea
          Market
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group cursor-pointer shadow-lg"
              onClick={() => openModal(category.title)}
            >
              <div className="w-24 h-24 flex items-center justify-center border-2 border-primary rounded-lg mb-4 group-hover:bg-primary group-hover:text-secondary transition-all">
                <span className="text-4xl">{category.icon}</span>
              </div>
              <h3 className="text-sm font-medium">{category.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black text-black bg-opacity-50 z-max">
          <div className="bg-white p-8 rounded-lg max-w-sm w-full relative ">
            <h2 className="text-2xl font-bold mb-4 text-black">{modalTitle}</h2>

            {data.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center hover:bg-gray-100 cursor-pointer hover:text-primary hover:scale-105 transition-transform duration-300 p-2 rounded-md"
              >
                <div>{item.name}</div>
                <div>{item.location}</div>
              </div>
            ))}

            <button
              onClick={closeModal}
              className="mt-4 px-6 py-2 bg-primary text-black rounded-lg hover:bg-primary-dark"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
