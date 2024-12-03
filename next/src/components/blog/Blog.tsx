import * as React from "react";
import {BlogSection} from "./BlogSection";
import {blogPosts} from "@components/blog/data";


export const Blog: React.FC = () => {
    return <BlogSection blogPosts={blogPosts}/>;
};
