import { Box } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography/Typography";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Footer = () => {
  const router = useRouter();

  return (
    <Box
      padding={"20px"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#141414",
        color: "white",
        borderTop: "1px solid gray",
      }}
    >
      <Typography>
        @ {format(new Date(), "yyyy")} WebSite. All Rights Reserved.
      </Typography>
      <Box sx={{ display: "flex", gap: "15px" }}>
        <TelegramIcon
          sx={{ cursor: "pointer" }}
          onClick={() => router.push("https://t.me/Isroiljon_Omonjonov")}
        />
        <GitHubIcon
          sx={{ cursor: "pointer" }}
          onClick={() => router.push("https://github.com/isroilomonjonov")}
        />
        <LinkedInIcon
          sx={{ cursor: "pointer" }}
          onClick={() =>
            router.push(
              "https://www.linkedin.com/in/isroil-omonjonov-160922254"
            )
          }
        />
      </Box>
    </Box>
  );
};

export default Footer;
