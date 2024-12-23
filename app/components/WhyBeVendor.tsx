"use client"; // This tells Next.js that this component should be rendered on the client side

import Vendor from "../assets/vendor.jpeg";
import { useState, useEffect, useRef } from "react";
import {
  DollarSign,
  Calendar,
  Users,
  Wallet,
  Store,
  Network,
} from "lucide-react";
import Image from "next/image";

export default function WhyBeVendor() {
  const [visibleItems, setVisibleItems] = useState<any[]>([]);

  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Saving",
      description:
        "Save more and sell more in your Flea Market Booth in comparison to most traditional retail stores.",
    },
    {
      icon: Calendar,
      title: "Flexibility",
      description:
        "Open and operate your booth on weekends-only, allowing you to enjoy your Monday to Friday.",
    },
    {
      icon: Users,
      title: "Diverse Customers",
      description:
        "Meet and greet a diverse range of shoppers, including locals, tourists, bargainers and enthusiasts.",
    },
    {
      icon: Wallet,
      title: "Additional Income",
      description:
        "Flea Market selling can be a source of primary or additional income, and a great platform to attract customers.",
    },
    {
      icon: Store,
      title: "Entry Into Retail",
      description:
        "Test your products, master your sales and venture your business. Expand your customer base and product inventory at the Flea Market.",
    },
    {
      icon: Network,
      title: "New Opportunities",
      description:
        "Network like never-before! The avenues of opportunities are endless. The Flea Market is yours to discover.",
    },
  ];

  const handleVisibilityChange = (index: any, isVisible: boolean) => {
    if (isVisible && !visibleItems.includes(index)) {
      setVisibleItems((prev) => [...prev, index]);
    }
  };

  interface ScrollAnimationItemProps {
    children: React.ReactNode;
    id: string;
    index: number;
  }

  const ScrollAnimationItem: React.FC<ScrollAnimationItemProps> = ({
    children,
    id,
    index,
  }) => {
    const itemRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          handleVisibilityChange(index, entry.isIntersecting); // Update visibility state
        },
        { threshold: 0.7 }
      );

      if (itemRef.current) {
        observer.observe(itemRef.current);
      }

      return () => {
        if (itemRef.current) {
          observer.unobserve(itemRef.current);
        }
      };
    }, [index]);

    return (
      <div
        ref={itemRef}
        className={`flex gap-4 transform transition-all duration-600 ${
          visibleItems.includes(index)
            ? "opacity-100 translate-y-0" // Move up when visible
            : "opacity-0 translate-y-10"
        }`}
      >
        {children}
      </div>
    );
  };

  return (
    <section className="py-20 bg-offWhite">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-semibold text-center mb-16">
          Why Be A Vendor
        </h2>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left benefits */}
          <div className="space-y-8">
            {benefits.slice(0, 3).map((benefit, index) => (
              <ScrollAnimationItem id={index + ""} key={index} index={index}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </ScrollAnimationItem>
            ))}
          </div>

          {/* Center image */}
          <div className="relative h-[400px]">
            <Image
              src={Vendor}
              alt="Successful Vendor"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Right benefits */}
          <div className="space-y-8">
            {benefits.slice(3).map((benefit, index) => (
              <ScrollAnimationItem
                id={index + ""}
                key={index}
                index={index + 3}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </ScrollAnimationItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
