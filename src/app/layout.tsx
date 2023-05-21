"use client";
import "nprogress/nprogress.css";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { Box } from "@mui/material";
import {Roboto } from "next/font/google";
import React from "react";
import "@/styles/global.css";
import Router from "next/router";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <Navbar />
        <Box minHeight={"90vh"}> {children} </Box>
        <Footer />
      </body>
    </html>
  );
}
