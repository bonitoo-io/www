import * as React from "react";
import { BlogHeader } from "./BlogHeader";

export const BlogPage: React.FC = () => {
  return (
    <main role="main">
      <BlogHeader
        category="blog"
        title="Programmable Monitoring IoT Gateway"
        imageUrl="https://cdn.builder.io/api/v1/image/assets/cc7a26f1efab4cffa3ef16cb13f9ff11/d379d35185b9a04b60311b5115acd9d9ca979cf6187aac8a5f43cd84bd486d91?apiKey=cc7a26f1efab4cffa3ef16cb13f9ff11&"
      />
    </main>
  );
};
