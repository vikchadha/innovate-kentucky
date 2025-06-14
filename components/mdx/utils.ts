import fs from "fs";
import path from "path";

type Metadata = {
  title: string;
  summary?: string;
  publishedAt: string;
  updatedAt?: string;
  image?: string;
  author?: string;
  authorImg?: string;
  authorRole?: string;
  authorLink?: string;
  category?: string;
};

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  let content = fileContent;
  const metadata: Partial<Metadata> = {};

  if (match && match[1]) {
    const frontMatterBlock = match[1];
    content = fileContent.replace(frontmatterRegex, "").trim();
    const frontMatterLines = frontMatterBlock.trim().split("\n");
    
    frontMatterLines.forEach((line) => {
      const [key, ...valueArr] = line.split(": ");
      if (key) {
        let value = valueArr.join(": ").trim();
        value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
        metadata[key.trim() as keyof Metadata] = value;
      }
    });
  }

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "content/blog"));
}

export function getHelpPages() {
  return getMDXData(path.join(process.cwd(), "content/help"));
}
