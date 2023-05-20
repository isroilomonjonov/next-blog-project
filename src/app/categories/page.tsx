"use client";
import React, { Fragment } from "react";
import { CategoryService } from "@/services/category.service";
import { Box, Typography, Divider, ButtonGroup, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import Seo from "@/seo.layout/seo";

async function getData() {
  const categories = await CategoryService.getAllCategories();
  return { categories };
}
const Categories = async () => {
  const router = useRouter();

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
            <Fragment key={item.slug}>
              <Button
                onClick={() => {
                  router.push(`/categories/${item.slug}`);
                }}
              >
                # {item.label}
              </Button>
            </Fragment>
          ))}
        </ButtonGroup>
      </Box>
    </Seo>
  );
};

export default Categories;
