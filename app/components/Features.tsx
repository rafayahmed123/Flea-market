"use client"; // This tells Next.js that this component should be rendered on the client side

import React, { useEffect, useRef, useState } from "react";
import { ShoppingBag, Utensils, Users } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: ShoppingBag,
      title: "Over 400 Vendors To Shop",
      description:
        "Browse through an eclectic variety of shops, each with their own unique offerings to suite every taste and budget",
    },
    {
      icon: Utensils,
      title: "Food, Treats & Eats From Around The World",
      description:
        "Taste and sample global cuisines that reflect rich traditions and bold flavours",
    },
    {
      icon: Users,
      title: "Fun For Everyone",
      description:
        "Whether you're seeking vintage nostalgia, modern elegance or anything in between, our vendors have something for everyone!",
    },
  ];

  interface ScrollAnimationItemProps {
    children: React.ReactNode; // Type for the children prop
    id: string; // Assuming `id` is a string
  }

  const ScrollAnimationItem: React.FC<ScrollAnimationItemProps> = ({
    children,
    id,
  }) => {
    const itemRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      // Create an intersection observer
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger animation when the item is in view
          }
        },
        { threshold: 0.65 } // Trigger when 50% of the item is visible
      );

      // Start observing the item
      if (itemRef.current) {
        observer.observe(itemRef.current);
      }

      // Cleanup observer on component unmount
      return () => {
        if (itemRef.current) {
          observer.unobserve(itemRef.current);
        }
      };
    }, []);

    return (
      <div
        ref={itemRef}
        className={`${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } transform transition-all duration-700 ease-out`}
        id={id}
      >
        {children}
      </div>
    );
  };

  return (
    <section className="py-20 bg-offWhite">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <ScrollAnimationItem key={index} id={`feature-${index}`}>
              <div className="text-center">
                <div className="bg-primary rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <feature.icon className="w-12 h-12 text-black" />
                </div>
                <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <button className="bg-primary text-black px-6 py-2 rounded border-2 border-black transition-all duration-300 transform hover:scale-95 hover:bg-black hover:text-white hover:border-transparent shadow-lg hover:shadow-xl">
                  Learn More
                </button>
              </div>
            </ScrollAnimationItem>
          ))}
        </div>
      </div>
    </section>
  );
}
