import { getBlogs } from "@/utils/mdx";
import React from "react";
import { Link } from "next-view-transitions";

export const LandingBlogs = async () => {
  const allBlogs = await getBlogs();

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "...." : str;
  };

  return (
    <div>
      <p className="text-primary max-w-lg py-6 px-2 md:text-sm">
        I love writing things i learn
      </p>
      <div className="flex flex-col gap-4 px-2">
        {" "}
        {allBlogs.map((blog) => (
          <Link
            key={blog.title}
            href={`/blog/${blog.slug}`}
            className="text-primary tracking-light text-base font-bold"
          >
            {" "}
            <div className="flex items-center justify-between">
              <h2 className="text-primary mb-1 text-xl font-semibold md:text-2xl">
                {blog.title}
              </h2>
              <p className="text-secondary text-sm md:text-sm">
                {new Date(blog.date as string).toLocaleTimeString("en-us")}
              </p>
            </div>
            <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm">
              {truncate(blog.description || "", 150)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
