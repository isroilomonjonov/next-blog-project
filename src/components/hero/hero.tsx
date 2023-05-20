import React from "react";
import { Box, Divider } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography/Typography";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import { HeroProps } from "./hero.props";
import { readingTime } from "@/helpers/time.format";
import { useRouter } from "next/navigation";

const Hero = ({ blogs }: HeroProps) => {
  const router = useRouter();

  return (
    <Box width="100%" height="70vh" sx={{ backgroundColor: "red" }}>
      <Carousel
        responsive={{
          mobile: {
            breakpoint: { max: 4000, min: 0 },
            items: 1,
          },
        }}
      >
        {blogs.map((item) => (
          <Box
            key={item.id}
            onClick={() => router.push(`/blogs/${item.slug}`)}
            sx={{ cursor: "pointer" }}
          >
            <Box sx={{ position: "relative", width: "100%", height: "70vh" }}>
              <Image
                src={item.image.url}
                alt={item.title}
                fill
                style={{ objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,.5)",
                }}
              >
                <Box
                  width={{ xs: "100%", md: "70%" }}
                  position={"relative"}
                  sx={{
                    top: "50%",
                    transform: "translateY(-50%)",
                    paddingLeft: { xs: "10px", md: "50px" },
                  }}
                  zIndex={99}
                >
                  <Typography sx={{ fontSize: { xs: "30px", md: "50px" } }}>
                    {item.title}
                  </Typography>
                  <Typography
                    color={"gray"}
                    sx={{ fontSize: { xs: "20px", md: "30px" } }}
                  >
                    {item.excerpt}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                      marginTop: "20px",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      alt={item.author.name}
                      src={item.author.image.url}
                    />
                    <Box>
                      <Typography>{item.author.name}</Typography>
                      <Box color={"gray"}>
                        {format(new Date(item.createdAt), "dd MMM, yyyy")}{" "}
                        &#x2022; {readingTime(item.description.text)}min read
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Hero;
