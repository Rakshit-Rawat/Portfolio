import { Container } from "@/components/container";
import { getSingleBlog } from "@/utils/mdx";
import { redirect } from "next/navigation";
import { getFrontMatter } from "@/utils/mdx";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const frontmatter = await getFrontMatter(slug);
  if (!frontmatter) {
    return { title: "Blog not found" };
  }
  return {
    title: frontmatter.title + "Rakshit Rawat",
    description: frontmatter.description,
  };
}

export default async function IndividualBlogPage({ params }: Props) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);
  if (!blog) redirect("/blog");

  return (
    <div className="flex min-h-screen items-start justify-center">
      <Container className="relative min-h-screen p-4 md:pt-20 md:pb-10">
        {/* Left diagonal stripe */}
        <div className="absolute top-0 bottom-0 left-0 z-10 w-10 border-r border-neutral-600 bg-[image:repeating-linear-gradient(-315deg,_black_0,_black_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] opacity-50 dark:border-white/10"></div>

        {/* Right diagonal stripe */}
        <div className="absolute top-0 right-0 bottom-0 z-10 w-10 border-l border-neutral-600 bg-[image:repeating-linear-gradient(315deg,_black_0,_black_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] opacity-50 dark:border-white/10"></div>

        <div className="relative z-20 px-12">
          <div className="prose mx-auto">{blog.content}</div>
        </div>
      </Container>
    </div>
  );
}
