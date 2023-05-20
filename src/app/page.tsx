"use client";
import Hero from "@/components/hero/hero";
import { Box } from "@mui/material";
import Sidebar from "@/components/sidebar/sidebar";
import Content from "@/components/content/content";
import { BlogService } from "@/services/blog.service";
import { CategoryService } from "@/services/category.service";
import Seo from "@/seo.layout/seo";
async function getData() {
  const blogs = await BlogService.getAllBlogs();
  const latestBlogs = await BlogService.getLatestBlogs();
  const categories = await CategoryService.getAllCategories();
  return { blogs, latestBlogs, categories };
}
export default async function Home() {
  const data = await getData();
  return (
    <Seo>
      <Hero blogs={data.blogs} />
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
}
