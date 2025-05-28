import React from "react";
import Link from "next/link";
import { Container } from "../container";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <Container className="sticky bottom-0 z-50 flex justify-between border-1 border-gray-500 p-3">
      <p className="text-sm text-neutral-500"> Built By @Me</p>
      <div className="flex items-center justify-center gap-6">
        <Link href="https://github.com/Rakshit-Rawat">
          {" "}
          <FaGithub className="size-4" />
        </Link>
        <Link href="https://linkedin.com/in/rakshit-2002-rawat/">
          <FaLinkedin />
        </Link>
      </div>
    </Container>
  );
};
