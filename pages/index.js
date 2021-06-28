import React, { useState } from "react";
import Layout from "components/Layout";
import HomeLayout from "@/components/Home/HomeLayout";
import Navbar from "@/components/Navbar/Navbar";

// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { css, useTheme } from "@emotion/react";

// import { useSome } from "components/Providers/SomeProvider";

export default function Home() { 
  return (
    <Layout title="Tesla">
      <Navbar />
      <HomeLayout />
    </Layout>
  );
}
