import { Container } from "@/components/container";
import { Projects } from "@/components/landing-projects";
import { LandingBlogs } from "@/components/landing-blogs";
import { Heading } from "@/components/heading";
import { SubHeading } from "@/components/sub-heading";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-center">
      <Container className="relative min-h-screen p-4 md:pt-20 md:pb-10">
        {/* Left diagonal stripe */}
        {/* <div className="absolute top-0 bottom-0 left-0 z-10 w-8 border-r border-neutral-600 bg-[image:repeating-linear-gradient(-315deg,_black_0,_black_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] opacity-50 dark:border-white/10"></div> */}

        {/* Right diagonal stripe */}
        {/* <div className="absolute top-0 right-0 bottom-0 z-10 w-8 border-l border-neutral-600 bg-[image:repeating-linear-gradient(315deg,_black_0,_black_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] opacity-50 dark:border-white/10"></div> */}

        <div className="relative z-20 px-6">
          <Heading >Rakshit Rawat</Heading>
          <SubHeading>
            I&apos;m a software developer with a passion for building scalable and
            efficient web apps. Currently not working anywhere just unemployed
          </SubHeading>

          <Projects />

          <LandingBlogs />
          <Testimonials />
        </div>
      </Container>
    </div>
  );
}
