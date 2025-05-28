import { Container } from "@/components/container";
import React from "react";
import { Heading } from "@/components/heading";
import { SubHeading } from "@/components/sub-heading";


export default function Projects() {
  return (
    
      <div className="flex min-h-screen items-start justify-around ">
        <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
          <Heading> Projects</Heading>
          <SubHeading>Some of my finest work</SubHeading>
        </Container>
      </div>
    
  );
}
