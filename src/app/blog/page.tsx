// import { PageLayout } from "@/components/page-layout";
import { Heading } from "@/components/heading";
import { SubHeading } from "@/components/sub-heading";
import { getBlogs } from "@/utils/mdx";
import { Link } from "next-view-transitions";
import { Container } from "@/components/container";
import { Blog } from "@/utils/mdx";

export const metadata = {
  title: "ALL BLOGS",
  description: "ALL BLOGS",
};

export default async function BlogHome() {
  const allBlogs: Blog[] = await getBlogs();

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };

  return (
    <div className="flex min-h-screen items-start justify-around">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        <Heading>All Blogs</Heading>
        <SubHeading>
          I&apos;m a software developer with a passion for building scalable and
          efficient web apps.
        </SubHeading>
        <div className="flex flex-col gap-4 py-10">
          {allBlogs.map((blog) => (
            <Link
              key={blog.title}
              href={`/blog/${blog.slug}`}
              className="text-primary tracking-light text-base font-bold"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-primary mb-1 text-xl font-semibold md:text-2xl">
                  {blog.title}
                </h2>
                <p className="text-secondary text-sm">
                  {new Date(blog.date as string).toLocaleTimeString("en-us")}
                </p>
              </div>
              <p className="text-secondary max-w-lg pt-2 text-sm">
                {truncate(blog.description || "", 150)}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
