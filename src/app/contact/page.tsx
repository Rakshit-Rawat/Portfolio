import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SubHeading } from "@/components/sub-heading";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  return (
    
      <div className="flex min-h-screen items-start justify-around">
        <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
          <Heading>Contact Me</Heading>
          <SubHeading>Open To Work</SubHeading>
          <ContactForm />
        </Container>
      </div>
    
  );
}
