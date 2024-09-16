import React from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import fs from "fs/promises"; // Use the promise-based version of fs
import path from "path";
import matter from "gray-matter";

// Function to get blogs
async function getBlogs() {
  const dirPath = path.join(process.cwd(), "content");

  try {
    // Check if the directory exists
    const dirExists = await fs.stat(dirPath);

    if (!dirExists.isDirectory()) {
      throw new Error(`The path ${dirPath} is not a directory.`);
    }

    // Read the directory contents
    const dirContent = await fs.readdir(dirPath);

    const blogs = await Promise.all(
      dirContent.map(async (file) => {
        const filePath = path.join(dirPath, file);
        const fileContent = await fs.readFile(filePath, "utf-8");
        const { data } = matter(fileContent);
        return {
          ...data,
          slug: file.replace(/\.md$/, ""), // Remove file extension for the slug
        };
      })
    );

    return blogs;
  } catch (error) {
    console.error("Error reading directory or files:", error.message);
    return [];
  }
}

const BlogPage = async () => {
  const blogs = await getBlogs();

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Blogs</h2>
      <div className="flex flex-wrap -mx-4">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 px-4 mb-8 transform transition duration-500 hover:scale-105"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-64 object-cover"
                src={blog.image}
                alt={blog.title}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-700">
                  {blog.title}
                </h3>
                <p className="text-gray-700 mb-4">{blog.description}</p>
                <p className="text-gray-500 mb-4">
                  By {blog.author} on {new Date(blog.date).toLocaleDateString()}
                </p>
                <Link
                  href={`/blogPost/${blog.slug}`}
                  className={buttonVariants({ variant: "outline" })}
                >
                  Click here
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
