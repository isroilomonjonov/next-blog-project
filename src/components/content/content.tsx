import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Image from "next/image";
import { format } from "date-fns";
import Avatar from "@mui/material/Avatar";
import { ContentProps } from "./content.props";
import { readingTime } from "@/helpers/time.format";
import Link from "next/link";

const Content = ({ blogs }: ContentProps) => {
  return (
    <Box width={{ xs: "100%", lg: "70%" }}>
      {blogs.map((item) => (
        <Link href={`/blogs/${item.slug}`} key={item.id}>
          <Box
            sx={{
              backgroundColor: "rgba(0,0,0,.5)",
              padding: "20px",
              marginTop: "20px",
              borderRadius: "8px",
              boxShadow: "0px 8px 16px rgba(255,255,255,.2)",
              cursor: "pointer",
            }}
          >
            <Box
              position={"relative"}
              width={"100%"}
              height={{ xs: "30vh", md: "50vh" }}
            >
              <Image
                src={item.image.url}
                alt={item.title}
                fill
                style={{ objectFit: "cover", borderRadius: "10px" }}
              />
            </Box>{" "}
            <Box>
              <Typography variant="h4" marginTop={"30px"}>
                {item.title}
              </Typography>
              <Typography variant="h6" color={"gray"}>
                {item.excerpt}
              </Typography>
              <Divider color="gray" sx={{ marginTop: "20px" }} />

              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "20px",
                  alignItems: "center",
                }}
              >
                <Avatar alt={item.author.name} src={item.author.image.url} />
                <Box>
                  <Typography>{item.author.name}</Typography>
                  <Box color={"gray"}>
                    {format(new Date(item.createdAt), "dd MMM, yyyy")} &#x2022;{" "}
                    {readingTime(item.description.text)}min read
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default Content;
