import React, { Fragment } from "react";
import { Box, Typography, Divider } from "@mui/material";
import Image from "next/image";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import Avatar from "@mui/material/Avatar";
import { ContentProps } from "./content.props";
import { readingTime } from "@/helpers/time.format";
import { useRouter } from 'next/navigation';

const Content = ({blogs}:ContentProps) => {
  const router=useRouter()
  return (
    <Box width={{ xs: "100%", lg: "70%" }}>
      {blogs.map((item) => (
        <Fragment key={item.id}>
          <Box
            sx={{
              backgroundColor: "rgba(0,0,0,.5)",
              padding: "20px",
              marginTop: "20px",
              borderRadius: "8px",
              boxShadow: "0px 8px 16px rgba(255,255,255,.2)",
              cursor:'pointer'
            }}
            onClick={()=>router.push(`/blogs/${item.slug}`)}
          >
            <Box position={"relative"} width={"100%"} height={{xs:'30vh',md:'50vh'}}>
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
                    {format(new Date(item.createdAt), "dd MMM, yyyy")} &#x2022; {readingTime(item.description.text)}min read
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Fragment>
      ))}
    </Box>
  );
};

export default Content;

const data = [
  {
    image: "https://media.graphassets.com/MxJZhmooRRuudoErkQ38",
    title: "Technical SEO with Hygraph",
    exerpt:
      "Get started with your SEO implementation when using a Headless CMS",
    author: {
      name: "Samar Badriddinov",
      image: "https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx",
    },
  },
  {
    image: "https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h",
    title: "Union Types and Sortable Relations with Hygraph",
    exerpt:
      "Learn more about Polymorphic Relations and Sortable Relations with Hygraph",
    author: {
      name: "Samar Badriddinov",
      image: "https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx",
    },
  },
];
