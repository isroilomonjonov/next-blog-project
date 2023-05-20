"use client";
import Sidebar from "@/components/sidebar/sidebar";
import { readingTime } from "@/helpers/time.format";
import Seo from "@/seo.layout/seo";
import { BlogService } from "@/services/blog.service";
import { CategoryService } from "@/services/category.service";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";

import React from "react";
async function getData(slug: string) {
  const blog = await BlogService.getBlogBySlug(slug);
  const latestBlogs = await BlogService.getLatestBlogs();
  const categories = await CategoryService.getAllCategories();
  return { blog, latestBlogs, categories };
}
const DetailedBlogPage = async (props: any) => {
  const { blog, latestBlogs, categories } = await getData(
    props.params.slug as string
  );
  
  return (
    <Seo metaTitle={blog.title}>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Box width={{ xs: "100%", lg: "70%" }}>
          <Box
            sx={{
              backgroundColor: "black",
              padding: "20px",
              boxShadow: "0px 8px 16px rgba(255,255,255,.2)",
              borderRadius: "8px",
            }}
            position={"relative"}
            width={"100%"}
            height={{ xs: "30vh", md: "50vh" }}
          >
            <Image
              src={blog.image.url}
              alt={blog.title}
              fill
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </Box>
          <Box display={"flex"} flexDirection={"column"} rowGap={"10px"} >
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                marginTop: "40px",
                alignItems: "center",
              }}
            >
              <Avatar alt={blog.author.name} src={blog.author.image.url} />
              <Box>
                <Typography>{blog.author.name}</Typography>
                <Box color={"gray"}>
                  {format(new Date(blog.createdAt), "dd MMM, yyyy")} &#x2022;{" "}
                  {readingTime(blog.description.text?blog.description.text:'')}min read
                </Box>
              </Box>
            </Box>
            <Typography variant="h3" marginTop={"10px"}>
              {blog.title}
            </Typography>
            <Typography variant="h5" color={"gray"}>
              {blog.excerpt}
            </Typography>
            <Divider color={"gray"}/>
            <div style={{opacity:'.8'}} dangerouslySetInnerHTML={{__html:blog.description.html}}/>
          </Box>
        </Box>
        <Sidebar blogs={latestBlogs} categories={categories} />
      </Box>
    </Seo>
  );
};

export default DetailedBlogPage;
