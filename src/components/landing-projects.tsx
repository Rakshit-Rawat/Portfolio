"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A personal portfolio showcasing my skills and work.",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Blog Platform",
      desc: "A full-featured blog platform with markdown support.",
      href: "https://example.com/blog",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Chat App",
      desc: "A real-time chat application using WebSockets.",
      href: "https://example.com/chat",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Task Manager",
      desc: "A productivity app to manage daily tasks efficiently.",
      href: "https://example.com/tasks",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    },
  ];
  return (
    <div className="py-10 px-1 border-2 border-amber-400">
      <p className="text-secondary max-w-lg pt-4 px-1 text-sm md:text-sm">
        I have bulid some web apps and products that is usefull as for your
        buisness
      </p>
      <div className="grid grid-cols-1 py-4 md:grid-cols-3">
        {projects.slice(0, 3).map((project, idx) => (
          <motion.div
            initial={{ opacity: 0, filter: "blur(50px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1, ease: "easeInOut" }}
            key={project.title}
            className="group relative p-2"
          >
            <Link href={project.desc}>
              <Image
                src={project.image}
                alt={project.title}
                height={500}
                width={350}
                className=" rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
              />
              <h2 className="z-20 mt-2 font-medium tracking-tight text-neutral-600 dark:text-neutral-300">
                {project.title}
              </h2>
              <p className="max-w-xs text-sm text-neutral-500 dark:text-neutral-300">
                {project.desc}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
