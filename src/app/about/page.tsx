import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SubHeading } from "@/components/sub-heading";

export default function About() {
  return (
    <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
      <Heading>About Me</Heading>
      <SubHeading>
        I&apos;m a software developer with a passion for building scalable and
        efficient web apps. Currently not working anywhere, just unemployed.
      </SubHeading>
    </Container>
  );
}
