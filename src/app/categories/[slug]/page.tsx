"use client";
import React from "react";
import { BlogService } from "@/services/blog.service";
import { CategoryService } from "@/services/category.service";
import { Box } from "@mui/material";
import Sidebar from "@/components/sidebar/sidebar";
import Content from "@/components/content/content";
import Seo from "@/seo.layout/seo";
import { useRouter } from "next/navigation";

async function getData(slug: string) {
  const blogs = await BlogService.getBlogByCategorySlug(slug);
  const latestBlogs = await BlogService.getLatestBlogs();
  const categories = await CategoryService.getAllCategories();
  return { latestBlogs, categories, blogs };
}
const BlogsByCategory = async (props: any) => {
  const data = await getData(`${props.params.slug}`);
  return (
    <Seo metaTitle={`${props.params.slug}-category`}>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Sidebar blogs={data.latestBlogs} categories={data.categories} />
        <Content blogs={data.blogs} />
      </Box>
    </Seo>
  );
};

export default BlogsByCategory;
