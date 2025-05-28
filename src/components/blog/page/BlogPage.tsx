import * as React from "react";
import { BlogHeader } from "./BlogHeader";

export const BlogPage: React.FC = () => {
  return (
    <main role="main">
      <BlogHeader
        category="blog"
        title="Programmable Monitoring IoT Gateway"
        imageUrl="/blog/1.png"
      />
    </main>
  );
};
