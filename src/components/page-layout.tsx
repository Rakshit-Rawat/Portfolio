// components/layout/page-layout.tsx
import { Container } from "@/components/container";
import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export function PageLayout({
  children,
  className = "",
  containerClassName = "",
}: PageLayoutProps) {
  return (
    <div className="flex min-h-screen items-start justify-center">
      <Container
        className={`relative min-h-screen p-4 md:pt-20 md:pb-10 ${containerClassName}`}
      >
        {/* Left stripe */}
        <div className="absolute top-0 bottom-0 left-0 z-10 w-8 border-1  border-neutral-600 bg-[image:repeating-linear-gradient(-315deg,_black_0,_black_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] opacity-50 dark:border-white/10"></div>

        {/* Right stripe */}
        <div className="absolute top-0 right-0 bottom-0 z-10 w-8 border-1 border-neutral-600 bg-[image:repeating-linear-gradient(315deg,_black_0,_black_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] opacity-50 dark:border-white/10"></div>

        <div className={`relative z-20 px-12 ${className}`}>{children}</div>
      </Container>
    </div>
  );
}
