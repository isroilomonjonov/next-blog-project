"use client";
import React, { Fragment } from "react";
import { CategoryService } from "@/services/category.service";
import { Box, Typography, Divider, ButtonGroup, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import Seo from "@/seo.layout/seo";
import Link from "next/link";

async function getData() {
  const categories = await CategoryService.getAllCategories();
  return { categories };
}
const Categories = async () => {

  const data = await getData();
  return (
    <Seo metaTitle="All Categories">
      <Box
        width={{ xs: "100%", md: "80%" }}
        marginTop={"10vh"}
        borderRadius={"10px"}
        marginX={"auto"}
        height={{ xs: "30vh", md: "50vh" }}
        sx={{
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          rowGap: "15px",
        }}
      >
        <Typography variant="h3" fontFamily={"cursive"}>
          All Categories
        </Typography>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          {data.categories.map((item) => (
            <Link href={`/categories/${item.slug}`} key={item.slug}>
              <Button># {item.label}</Button>
            </Link>
          ))}
        </ButtonGroup>
      </Box>
    </Seo>
  );
};

export default Categories;
