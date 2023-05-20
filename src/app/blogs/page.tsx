"use client";
import React from "react";
import { BlogService } from "@/services/blog.service";
import Content from "@/components/content/content";
import { Box } from "@mui/material";
import Seo from "@/seo.layout/seo";

async function getData() {
  const blogs = await BlogService.getAllBlogs();
  return { blogs };
}
const Blogs = async () => {
  const data = await getData();
  return (
    <Seo metaTitle="All Blogs">
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent:'center'
        }}
      >
        <Content blogs={data.blogs} />
      </Box>
    </Seo>
  );
};

export default Blogs;
