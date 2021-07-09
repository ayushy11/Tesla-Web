import React from "react";
import Layout from "components/Layout";
import HomeLayout from "@/components/Home/HomeLayout";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() { 
  return (
    <Layout title="Tesla">
      <Navbar />
      <HomeLayout />
    </Layout>
  );
}
