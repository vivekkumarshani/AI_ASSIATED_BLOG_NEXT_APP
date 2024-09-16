import fs from "fs";
import matter from "gray-matter";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { notFound } from "next/navigation";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import rehypeSlug from 'rehype-slug';
import OnThisPage from "@/components/onThisPage";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default async function Page({ params }) {
  const filePath = `content/${params.slug}.md`;

  if (!fs.existsSync(filePath)) {
    notFound();
    return;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const file = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: "👋🌍" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug) 
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    });

  const htmlContent = (await file.process(content)).toString();

  return (
    <div className="max-w-5xl m-auto p-4">
      <h1 className="text-4xl font-bold mb-4 ">{data.title}</h1>
      <p className="text-base mb-2 border-l-4 pl-4 italic text-gray-600 italic border-gray-500">
        &quot;{data.description}&quot;
      </p>
      <div className="flex gap-2">
        <p className="text-xs text-gray-500 mb-2 italic">By {data.author}</p>
        <p className="text-xs text-gray-500 mb-2">{data.date}</p>
      </div>
      <OnThisPage htmlContent={htmlContent} />
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="prose dark:prose-invert"
      ></div>
  
    </div>
  );
}
