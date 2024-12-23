"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "davey su",
    date: "2023-08-07",
    rating: 5,
    text: "非常棒的跳蚤市场，很干净整洁，种类多样化，我是...",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Sara G",
    date: "2023-08-06",
    rating: 5,
    text: "loved it! nice vendors, and very clean flea market...",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Yunchoa Cheng",
    date: "2023-08-06",
    rating: 4,
    text: "Very good",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Yunchoa Cheng",
    date: "2023-08-06",
    rating: 4,
    text: "Very good",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Yunchoa Cheng",
    date: "2023-08-06",
    rating: 4,
    text: "Very good",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Yunchoa Cheng",
    date: "2023-08-06",
    rating: 4,
    text: "Very good",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Yunchoa Cheng",
    date: "2023-08-06",
    rating: 4,
    text: "Very good",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Yunchoa Cheng",
    date: "2023-08-06",
    rating: 4,
    text: "Very good",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Yunchoa Cheng",
    date: "2023-08-06",
    rating: 4,
    text: "Very good",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Yunchoa Cheng",
    date: "2023-08-06",
    rating: 4,
    text: "Very good",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Yunchoa Cheng",
    date: "2023-08-06",
    rating: 4,
    text: "Very good",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Yunchoa Cheng",
    date: "2023-08-06",
    rating: 4,
    text: "Very good",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Yunchoa Cheng",
    date: "2023-08-06",
    rating: 4,
    text: "Very good",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Yunchoa Cheng",
    date: "2023-08-06",
    rating: 4,
    text: "Very good",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Yunchoa Cheng",
    date: "2023-08-06",
    rating: 4,
    text: "Very good",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Yunchoa Cheng",
    date: "2023-08-06",
    rating: 4,
    text: "Very good",
    image: "/placeholder.svg?height=50&width=50",
  },
];

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 4000);

    return () => {
      clearInterval(intervalId); // Cleanup on component unmount
    };
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 >= reviews.length ? 0 : prevIndex + 4
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 4 < 0 ? Math.max(reviews.length - 4, 0) : prevIndex - 4
    );
  };

  return (
    <section className="py-20 bg-secondaryOffWhite">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl underline font-semibold mb-4">
          Customers Feedback
        </h2>
        <h3 className="text-center text-4xl font-semibold mb-12">
          What Our Customers Say About Us
        </h3>

        <div
          className="relative "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex justify-between items-center gap-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-primary transition-all hover:bg-opacity-80 focus:outline-none"
              style={{ opacity: currentIndex === 0 ? 0.5 : 1 }}
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>

            <div className="flex-1 overflow-x-hidden">
              <div
                className="flex gap-6 transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${
                    (currentIndex / reviews.length) * 100
                  }%)`,
                  scrollBehavior: "smooth",
                }}
              >
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="flex-none w-1/4 bg-white p-6 rounded-lg shadow-lg transform transition-all duration-700 ease-in-out"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h4 className="font-semibold">{review.name}</h4>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600">{review.text}</p>
                    <button className="text-primary mt-2">Read more</button>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-primary transition-all hover:bg-opacity-80 focus:outline-none"
              style={{
                opacity: currentIndex + 4 >= reviews.length ? 0.5 : 1,
              }}
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
