"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";

export const Navbar = () => {
  const navItems = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];
  const [hovered, setHovered] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { scrollY } = useScroll();

  // Transform values
  const yTransform = useTransform(scrollY, [0, 100], [0, 10]);
  const widthTransform = useTransform(scrollY, [0, 100], ["60%", "50%"]);

  // Add spring animations for smooth transitions
  const y = useSpring(yTransform, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });
  const width = useSpring(widthTransform, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <motion.nav
      style={{
        boxShadow: scrolled ? "var(--shadow-ace)" : "none",
        width,
        y,
      }}
      transition={{
        boxShadow: {
          duration: 0.3,
          ease: "easeInOut",
        },
      }}
      className={`fixed inset-x-0 top-0 z-50 mx-auto flex max-w-4xl items-center justify-between bg-white/80 px-3 py-2 backdrop-blur-md dark:bg-neutral-700/80 ${
        scrolled
          ? "rounded-full"
          : "border-b border-neutral-200 dark:border-neutral-600"
      }`}
    >
      <Link href={"/"}>
        <Image
          className="h-10 w-10 rounded-full"
          src={"/avatar.jpg"}
          height={100}
          width={100}
          alt="Avatar"
        />
      </Link>
      <div className="flex items-center gap-1">
        {navItems.map((item, idx) => (
          <Link
            href={item.href}
            key={idx}
            className="relative rounded-md px-3 py-2 text-sm transition-colors duration-150"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <motion.span
              className="absolute inset-0 rounded-md bg-neutral-100 dark:bg-neutral-800"
              animate={{
                opacity: hovered === idx ? 1 : 0,
                scale: hovered === idx ? 1 : 0.95,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
                duration: 0.2,
              }}
            />
            <span className="relative z-10 text-neutral-700 dark:text-neutral-300">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};
