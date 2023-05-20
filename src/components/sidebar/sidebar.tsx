import React, { Fragment } from "react";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography/Typography";
import { navItems } from "@/config/constants";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import { useRouter } from 'next/navigation';

import Image from "next/image";
import { SidebarProps } from "./sidebar.props";
const Sidebar = ({blogs,categories}:SidebarProps) => {
  const router=useRouter()

  return (
    <>
      <Box width={{xs:'100%',lg:'30%'}}>
        <Box
          sx={{ position: "sticky", top: "100px", transition: "all .3s ease" }}
        >
          <Box
            padding={"20px"}
            border={"1px solid gray"}
            borderRadius={"10px"}
            boxShadow={"0 10px 16px rgba(0,0,0,.6)"}
          >
            <Typography variant="h5">Latest Blogs</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
              }}
            >
              {blogs.map((item) => (
                <Box key={item.id} marginTop={"20px"} style={{cursor:'pointer'}}
            onClick={()=>router.push(`/blogs/${item.slug}`)}
                
                >
                  <Box
                    sx={{ display: "flex", gap: "20px", alignItems: "center" }}
                  >
                    <Image
                      src={item.image.url}
                      alt={item.title}
                      width={100}
                      height={100}
                      style={{ objectFit: "cover", borderRadius: "8px" }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "7px",
                      }}
                    >
                      <Typography variant="body1">{item.title}</Typography>
                      {/* <Typography sx={{opacity:'.5'}}>{item.exerpt}</Typography> */}
                      <Box
                        sx={{ 
                          display: "flex",
                          gap: "10px",

                          alignItems: "center",
                        }}
                      >
                        <Avatar
                          alt={item.author.name}
                          src={item.author.image.url}
                        />
                        <Box>
                          <Typography variant="body2">
                            {item.author.name}
                          </Typography>
                          <Box sx={{ opacity: ".5" }}>
                            {format(new Date(item.createdAt), "dd MMM, yyyy")}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Divider sx={{ marginTop: "20px" }} color="gray" />
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            padding={"20px"}
            border={"1px solid gray"}
            borderRadius={"10px"}
            boxShadow={"0 10px 16px rgba(0,0,0,.6)"}
            marginTop={"20px"}
          >
            <Typography variant="h5">Category</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
              }}
            >
              {categories.map((item) => (
                <Fragment key={item.slug}>
                  <Button
                  onClick={()=>{router.push(`/categories/${item.slug}`)}}
                    fullWidth
                    sx={{ justifyContent: "flex-start", height: "50px" }}
                  >
                    {item.label}
                  </Button>
                  <Divider color="gray" />
                </Fragment>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
