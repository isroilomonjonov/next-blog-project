"use client";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { Box } from "@mui/material";
import {Roboto } from "next/font/google";
import React from "react";
import { Router } from "next/router";
import "@/styles/global.css";

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
  React.useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);
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
