import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

type FrontMatter = {
  title: string;
  description: string;
  date: string;
  image: string;
};

export type Blog = { slug: string } & FrontMatter;

export const getSingleBlog = async (slug: string) => {
  try {
    const filePath = path.join(process.cwd(), "src/data", `${slug}.mdx`);
    const singleBlog = await fs.readFile(filePath, "utf-8");
    if (!singleBlog) return null;
    const { content, frontmatter } = await compileMDX<{ title: string }>({
      source: singleBlog,
      options: { parseFrontmatter: true },
    });

    return { content, frontmatter };
  } catch (err) {
    console.error("Error parsing Blog", slug, err);
    return null;
  }
};

export const getBlogs = async () => {
  const files = await fs.readdir(path.join(process.cwd(), "src/data"));
  const allBlogsWithNulls = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".mdx", "");
      const frontmatter = await getFrontMatter(slug);
      if (!frontmatter) return null;
      return { slug, ...frontmatter };
    }),
  );
  const allBlogs = allBlogsWithNulls.filter(
    (blog): blog is { slug: string } & FrontMatter => blog !== null,
  );
  return allBlogs;
};

export const getFrontMatter = async (
  slug: string,
): Promise<FrontMatter | null> => {
  try {
    const filePath = path.join(process.cwd(), "src/data", `${slug}.mdx`);
    const singleBlog = await fs.readFile(filePath, "utf-8");
    if (!singleBlog) return null;
    const { frontmatter } = await compileMDX<FrontMatter>({
      source: singleBlog,
      options: { parseFrontmatter: true },
    });

    return frontmatter;
  } catch (err) {
    console.error("Error parsing frontmatter for", slug, err);
    return null;
  }
};
