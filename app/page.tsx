"use client"
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Why from "@/components/Why";
import { useAuth } from "@/store/authStore";
import React, { useEffect } from "react";

const Home = () => {
  const {user,fetchUser} = useAuth();

  useEffect(()=>{
    fetchUser()
  },[])
  return (
    <>
      <Hero />
      <Banner img="partner.png" />
      <Why />
      <Banner img="comingSoon.png" />
      <Footer />
    </>
  );
};

export default Home;
