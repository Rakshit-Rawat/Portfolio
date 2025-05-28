"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export const Testimonials = () => {
  const data = [
    {
      quote:
        "Rakshit is an amazing developer! Fast, responsive, and delivered exactly what I needed.",
      avatar: "/images/user/user1.jpg",
      name: "Mr. Nobody",
    },
    {
      quote:
        "I was blown away by the attention to detail. My site looks professional and runs fast!",
      avatar: "/images/user/user2.jpg",
      name: "John Doe",
    },
    {
      quote:
        "Working with Rakshit was a breeze. Great communication and excellent code quality.",
      avatar: "/images/user/user4.jpg",
      name: "Jane Smith",
    },
    {
      quote:
        "Delivered ahead of time and exceeded expectations. Definitely hiring again!",
      avatar: "/images/user/user3.jpg",
      name: "David Lee",
    },
  ];

  return (
    <section className="py-16">
      <h2 className="mb-10 text-center text-3xl font-bold text-neutral-800 dark:text-white">
        What Clients Say
      </h2>

      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <Marquee speed={80} pauseOnHover>
          {data.map((item, idx) => (
            <TestimonialCard key={`testimonial-${idx}`} {...item} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

const TestimonialCard = ({
  quote,
  name,
  avatar,
}: {
  quote: string;
  name: string;
  avatar: string;
}) => {
  return (
    <div className="mx-6 flex max-w-xs flex-col gap-4 rounded-xl border border-neutral-200 bg-white/70 p-6 shadow-md backdrop-blur-sm dark:border-neutral-700 dark:bg-white/5">
      <p className="text-sm leading-relaxed text-neutral-800 italic dark:text-neutral-300">
        “{quote}”
      </p>
      <div className="flex items-center gap-3 pt-2">
        <Image
          src={avatar}
          alt={name}
          width={40}
          height={40}
          className="rounded-full border-2 border-indigo-500 object-cover"
        />
        <span className="text-sm font-medium text-neutral-800 dark:text-neutral-100">
          {name}
        </span>
      </div>
    </div>
  );
};
